import React from 'react';
import { StyleSheet, Text, View, Button ,TextInput ,Alert, Image ,TouchableOpacity} from 'react-native';
import ApiUtils from '../util/ApiUtils'
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        username :'',
        password:'',
        member: '',
        verifyUser: false
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
                      autoCapitalize = 'none'
                      underlineColorAndroid='transparent'
                      onChangeText={(username)=> this.setState({username})}
                     
            />
      
        <TextInput  placeholder="Password" 
                    style={styles.input_login} 
                    ref="password" 
                    autoCapitalize = 'none'
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    onChangeText={(password)=> this.setState({password})}
                   
            />
      
        {/* <View style={styles.login}>
          <Button onPress={this.props.onLoginPress} title="Login" color="white" />
        </View> */}
        <View style={styles.login}>
          <TouchableOpacity onPress={this.login}  >
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
        
        <PopupDialog
          width= {0.5}
          height= {0.2}
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
        >
          <View style={styles.popupDialog}>
            <View style={styles.popupIcon}>
              <Icon  containerStyle={{ marginTop: 26, marginLeft: 20 }} name="ban" size={70} color={'#77c8a7'}/>
            </View>
            <Text style={styles.popupText}>incorrect Password</Text>
          </View>
        </PopupDialog>
      </View>
    );
  }

  verifyUser= ()=>{
    return fetch('https://lab0api.herokuapp.com/api/member/verifyUser',{
      method: 'post',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({"username":"petch","password":"1234"})
      }).then((res) =>  console.log(res.json()));
  }


  login= ()=>{
    // var res = ApiUtils.verifyUser(this.state.username, this.state.password)
    // Need to move logic to ApiUtil

    fetch('https://lab0api.herokuapp.com/api/member/verifyUser',{
      method: 'post',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': this.state.username,
        'password': this.state.password,
      }),
      })
      .then(response => 
        response.json().then(data => ({
            data: data,
            status: response.status
        })
      ).then(res => {
          if(res.status == '200' && res.data.status){
            console.log(this.props);
            this.props.onLoginPress()
            //navigate.navigate('homescreen')
          }
          else{
            this.popupDialog.show(() => {
              console.log('callback - will be called immediately')
            });
            console.log('incorrect user or pass');
          }
      }));
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
  popupDialog:{
    paddingTop: 20,
    backgroundColor: '#F0F0F5',
    height: 140
  },
  popupIcon:{
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
    justifyContent:'center'
  },
  popupText:{
    display: 'flex',
    fontSize: 20,
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 10,
    color:'#6E6E9E',
    justifyContent: 'center'
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

