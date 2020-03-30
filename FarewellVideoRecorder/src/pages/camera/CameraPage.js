import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ColorPropType } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import { Buffer } from 'buffer'

export default class CameraPage extends React.Component {
    camera = null;

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.front,
        ratio: undefined,
        cameraHeight: undefined,
        cameraWidth: undefined,
        recording:false
    };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');
        this.setState({hasCameraPermission: hasCameraPermission} );
    };

    async record() {
        if(!this.state.hasCameraPermission) {
            await componentDidMount();
        }
        if (this.camera && !this.state.recording) {
            this.setState({
                recording: !this.state.recording
            });
            let video = await this.camera.recordAsync({maxDuration:2});
            this.setState({
                recording: false
            });
            let uri = video.uri;
            console.log("uri="+uri.replace('file://',''));
            let data = await FileSystem.readAsStringAsync(uri, {encoding: FileSystem.EncodingType.Base64});
            const buffer = Buffer.from(data, 'base64')
            console.log("data="+data.length)
            fetch('https://4c6cbdd1pc.execute-api.eu-west-2.amazonaws.com/v1/videos/upload', {
                method: 'POST',
                headers: {
                    Authorization: this.props.token
                }
            })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                //Success 
                console.log(responseJson);
                let url = responseJson['upload_url'];
                console.log('url='+url);
                fetch(url, {
                    method:'PUT',
                    headers: {
                        'Content-Type': 'video/mp4; charset=utf-8'
                    },
                    body: buffer
                })
                .then((responseData) => {
                    for(var property in responseData) {
                        console.log(property + "=" + responseData[property]);
                    }
                })
                .catch((error) => {
                    //Error 
                    console.error(error);
                });
            })
            //If response is not in json then in error
            .catch((error) => {
                //Error 
                console.error(error);
            });
        }
    }

    async flipCamera() {
        this.setState(
            {
            type: this.state.type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
            }
        );
        await this.getCameraRatio();
    }

    async getCameraRatio() {
        const ratios = await this.camera.getSupportedRatiosAsync()
        
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;
        const screenRatio = windowHeight / windowWidth;

        let minDiff = 100000;
        let bestHeight = null;
        let bestWidth = null;
        let bestRatio = null
        for(let i = 0; i < ratios.length; i++) {
            // find closest camera aspect ratio to screen aspect ratio
            let thisRatio = ratios[i];
            let heightNum = parseInt(thisRatio.split(':')[0]);
            let widthNum = parseInt(thisRatio.split(':')[1]);
            let diff = Math.abs(heightNum / widthNum - screenRatio)
            if(diff < minDiff) {
                minDiff = diff;
                bestHeight = heightNum;
                bestWidth = widthNum;
                bestRatio = thisRatio
            }
        }
        // adjust viewport to reflect that ratio - trimming height or width if needed
        let cameraWidth = windowWidth;
        let cameraHeight = windowWidth * bestHeight / bestWidth;
        if(cameraHeight > windowHeight) {
            cameraWidth = windowHeight * bestWidth / bestHeight;
            cameraHeight = windowHeight;
        }

        this.setState({
            ratio: bestRatio,
            cameraHeight: cameraHeight,
            cameraWidth: cameraWidth
        })
     }

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }
        
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems:'center', backgroundColor:'black'}}>
                <Camera 
                    style={{ flex: 1, width:this.state.cameraWidth, height:this.state.cameraHeight }} ratio={this.state.ratio} 
                    type={this.state.type} ref={ (ref) => {this.camera = ref} }
                    onCameraReady={this.getCameraRatio.bind(this)}>
                    <View
                        style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'column',
                        justifyContent: 'flex-end'
                        }}>
                        <TouchableOpacity
                        style={{
                            alignItems: 'center',
                        }}
                        onPress={this.flipCamera.bind(this)}>
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip Camera </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{
                            alignItems: 'center',
                        }}
                        onPress={this.record.bind(this)}>
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> {this.state.recording?'Recording Now':'Press to Record'} </Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        );
    };
};