import React from 'react';
import { StyleSheet, Text, View, Button ,TextInput ,Alert, Image ,TouchableOpacity} from 'react-native';

export default class Login extends React.Component {
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
        <Image style={styles.Logo} source={require('../image/logo.png')} />
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
      
        {/* <View style={styles.login}>
          <Button onPress={this.props.onLoginPress} title="Login" color="white" />
        </View> */}
        <View style={styles.login}>
          <TouchableOpacity onPress={this.props.onLoginPress}  >
            <Text  style={styles.login_label}>Login</Text>
          </TouchableOpacity>
        </View>
        <View >
          <Text  style={styles.orText}>OR</Text>
        </View>
        <View style={styles.login_facebook}>
          <TouchableOpacity style={styles.flexrow} >
            <Image style={styles.facebookLogo} source={require('../image/facebook.png')} />
            <Text  style={styles.facebookText}>Login with facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.additional}>
          <TouchableOpacity style={styles.flexrow}>
            <Text  style={styles.orText}>Forgot password ?   </Text>
          </TouchableOpacity>
          <Text  style={styles.orText}>|</Text>
          <TouchableOpacity style={styles.flexrow}  onPress={this.props.onSignupPress}>
            <Text  style={styles.orText}>   Create an account</Text>
          </TouchableOpacity>
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
  additional:{
      flexDirection: 'row',
      marginTop: 20,
  },
  container: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
  },
  Logo: {
    margin: 10,
    marginBottom: 20,
  },
  flexrow:{
    flexDirection: 'row',
  },
  orText:{
    color: 'white',
    marginTop: 10,
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookLogo: {
  //  display: 'flex',
    flexDirection: 'row',
    width:30,
    height:30,
    marginLeft: 25,
    marginTop: 5,
  },
  facebookText:{
    color:'white',
    fontSize: 20,
    marginTop: 7,
    marginLeft: 35,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  login: {
    marginTop: 20,
    backgroundColor: '#33bc6e',
    marginBottom: 5,
    height: 50, 
    width:300,
    paddingTop: 5,
    borderRadius: 20,
    
  },
  login_facebook: {
    marginTop: 20,
    backgroundColor: '#157dc3',
    marginBottom: 5,
    height: 50, 
    width:300,
    paddingTop: 5,
    borderRadius: 20,
  },
  login_label: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    marginBottom: 10,
  },
  input_login:{
    backgroundColor: 'white',
    marginBottom: 5,
    height: 50, 
    fontSize:20,
    width:300,
    color:'grey',
    textAlign: 'center',
    borderRadius: 20,
  }
});

