import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Touchable, TextInput, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ScanScreen from '../screens/ScanScreen'

export default class ScanScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }
    }

render(){

    if(buttonState !== 'normal' && hasCameraPermissions){
        return(
            <View>
          <BarCodeScanner style = {StyleSheet.absoluteFillObject} onBarCodeScanned = {
            scanned ? console.log('successful') : this.handleBarCodeScanner
          }></BarCodeScanner>
          
          <TouchableOpacity onPress = {this.getCameraPermission} style = {StyleSheet.scanButton} title = "Bar Code Scanner">
              <Text style = {StyleSheet.buttonText}>Scan QR Code</Text>
          </TouchableOpacity>
          </View>
        )
      }

}
     

}

getCameraPermission()= async () => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA)

    this.setState({
      hasCameraPermissions : status === 'granted',
      scanned: 'false'
    });
  }


handleBarCodeScanner()