import React from 'react';
import { StyleSheet, Text, View, Button ,TextInput ,Alert } from 'react-native';

export default class App extends React.Component {
  

  constructor(props){
    super(props);
    this.state ={
        username :'',
        password:''
    };
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Logo}>LAB0</Text>
        <View style={{ margin: 7 }} />
          <TextInput  placeholder="Username" 
                      style={styles.input_login} 
                      ref="username" 
                      underlineColorAndroid='transparent'
                      onChangeText={(username)=> this.setState({username})}
                     
            />
      
        <TextInput  placeholder="Password" 
                    style={styles.input_login} 
                    ref="password" 
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    onChangeText={(password)=> this.setState({password})}
                   
            />
      
        <View style={styles.login_btn}>
          <Button onPress={this.props.onLoginPress} title="Login With Facebook" color="white" />
        </View>
        <View style={styles.login_btn}>
          <Button onPress={this.props.onLoginPress} title="Login With Email" color="white" />
        </View>
        <View style={styles.login_btn}>
          <Button onPress={this.props.onLoginPress} title="Login With Line" color="white" />
        </View>
       


      </View>
    );
  }

  login= ()=>{
    if(this.state.username=='admin'){
      this.props.onLoginPress;
    }else{
      this.props.onLogoutPress;
    }
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#77c8a7',
  },
  Logo: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    marginBottom: 50,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  login_btn: {
    marginVertical: 5,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    width: 200,
  },
  login_label: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    marginBottom: 10,
  },
  input_login:{
    height: 40, 
    fontSize:20,
    width:200,
    color:'#fff',
    textAlign: 'center',
  }
});

