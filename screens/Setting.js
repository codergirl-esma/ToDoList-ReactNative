import React from 'react'
import {Text, View, StyleSheet} from "react-native"
import {Avatar, Title, Subheading ,Button} from 'react-native-paper'

const Settings = () =>{
  return(
    <View style={styles.stil}>
      <Avatar.Text label ="ES" />
      <Title>İsminiz </Title>
      <Subheading>kullaniciAdi@gmail.com</Subheading>
      <Button>Sign Out</Button>
    </View>
  )
};




export default Settings;

const styles = StyleSheet.create({ 
    stil : {
      alignItems : 'center',
      marginTop : 20
    }
  
 });

