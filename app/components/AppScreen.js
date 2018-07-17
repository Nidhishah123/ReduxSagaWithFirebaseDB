import React, {Component} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

import styles from '../assets/styles';
import Input from './Input';
import {USER_DB_ID} from "../assets/constants";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dataFetch();
  }

  isEmailValid = (email) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email) == false) {
      alert('Invalid Email Address');
      return false;
    }
    return true;
  };

  onSave = () => {
    const {saveData, editData} = this.props;
    const {firstName, lastName, company, department, position, email} = this.props;

    if (email && !this.isEmailValid(email)) return null;

    let data = {firstName, lastName, company, department, position, email};
    AsyncStorage.getItem(USER_DB_ID)
      .then((id) => {
        if (id) {
          editData(data, id);
        } else {
          saveData(data);
        }
      });
  };

  render() {
    const {inProgress, editFormData, error} = this.props;
    const {firstName, lastName, company, department, position, email} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.separator}/>
        <Input
          autoFocus={true}
          autoCorrect={false}
          label='First Name'
          onChangeText={(firstName) => editFormData({firstName})}
          value={firstName}
        />
        <Input
          autoCorrect={false}
          label='Last Name'
          onChangeText={(lastName) => editFormData({lastName})}
          value={lastName}
        />

        <View style={styles.separator}/>
        <Input
          label='Company'
          onChangeText={(company) => editFormData({company})}
          value={company}
        />
        <Input
          label='Department'
          onChangeText={(department) => editFormData({department})}
          value={department}
        />
        <Input
          label='Position'
          onChangeText={(position) => editFormData({position})}
          value={position}
        />

        <View style={styles.separator}/>
        <Input
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          label='Email'
          onChangeText={(email) => editFormData({email})}
          value={email}/>
        <View style={styles.separator}/>

        {inProgress
        && <ActivityIndicator style={{ margin: 35}} />
        || <TouchableHighlight
          style={styles.button}
          underlayColor='#FFF'
          disabled={inProgress}
          onPress={() => this.onSave()}
        >
          <Text style={{color: '#FFF', alignSelf: 'center', fontSize: 18}}>Save</Text>
        </TouchableHighlight>
        }

        {error && <Text style={styles.error}>Error Occurred!!</Text>}
      </View>
    );
  }
}

export default LoginScreen


