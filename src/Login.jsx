import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'

export class Login extends Component {
    constructor(props){
        super(props)
        this.state= {count :0}
    }
    increament =() =>{
        this.setState({count : this.state.count +1})
    }
  render() {
    return (
      <View style = {{flex : 1 , justifyContent : 'center' , alignItems : 'center'}}>
        <Text testID='countText'>{this.state.count}</Text>
       <Button title='up' onPress={this.increament} testID='upbutton' />
      </View>
    )
  }
}

export default Login