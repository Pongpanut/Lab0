import React from 'react';
import { StyleSheet, Text, View, Button ,TextInput ,Alert, Image ,TouchableOpacity} from 'react-native';

export default class SignupScreen extends React.Component {
  

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
        <TextInput  placeholder="Confirm Password" 
          style={styles.input_login} 
          ref="password" 
          underlineColorAndroid='transparent'
          secureTextEntry={true}
          onChangeText={(password)=> this.setState({password})}
        />
      
        <View style={styles.login}>
          <Button  title="SIGN UP" color="white" />
        </View>
        <View >
          <Text  style={styles.orText}>OR</Text>
        </View>
        <View style={styles.login_facebook}>
          <TouchableOpacity style={styles.flexrow}>
            <Image style={styles.facebookLogo} source={require('../image/facebook.png')} />
            <Text  style={styles.facebookText}>SIGN UP WITH FACEBOOK</Text>
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
    fontSize: 16,
    marginTop: 12,
    marginLeft: 20,
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

