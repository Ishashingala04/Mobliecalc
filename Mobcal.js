import React, { useState } from "react";
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
function Mobcal() {


  const [txt, setTxt] = useState('')
  const [firstval, setFirst] = useState('')
  const [action, setAction] = useState('') 

  function btnnum(val) {
    const regex = /^\d+(\.\d{0,10})?$/;
     let text = txt + val
    // Check if the input matches the regex pattern
    if (regex.test(text) || text === '') {
      setTxt(text) // Update the state if it's a valid input
    }
  }

  function sign(si) {
    setFirst(txt);
    setAction(si);
    setTxt('');
    
  }

  function clear() {
    setTxt('') 
  }

  function delet() {
    let newval = txt.slice(0, txt.length - 1);
    setTxt(newval)
  } 

  function eqal() {
    if (action == "+") {
      // setTxt('')
      // setAns(parseInt(firstval) + parseInt(txt));
      var ans =(parseFloat(firstval) + parseFloat(txt));
    }
    if (action == "-") {
      // setTxt('')
      // setAns(parseInt(firstval) - parseInt(txt));
      var ans=(parseFloat(firstval) - parseFloat(txt));
    }
    if (action == "*") {
      // setTxt('')
      // setAns(parseInt(firstval) * parseInt(txt));
      var ans=(parseFloat(firstval) * parseFloat(txt));
    }
    if (action == "%") {
      // setTxt('')
      // setAns(parseInt(firstval) % parseInt(txt));
      var ans =(parseFloat(firstval) % parseFloat(txt));
    }
    if (action == "÷") {
      // setTxt('')
      // setAns(parseInt(firstval) / parseInt(txt));
      var ans =(parseFloat(firstval) / parseFloat(txt));
    }
    setTxt(''+ans);

  }


  return (
    <>
      <TextInput style={{ fontSize: 30, backgroundColor: 'black', color: 'white', height: '45%', }}>{txt}</TextInput>

      <View style={style.button}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <Pressable onPress={clear}><Text style={style.myred} >Ac</Text></Pressable>
          <Pressable onPress={delet}><Text style={style.mygreen}>⇒</Text></Pressable>
          <Pressable onPress={()=>{sign('%')}}><Text style={style.mygreen} >%</Text></Pressable>
          <Pressable onPress={()=>{sign('÷')}}><Text style={style.mygreen} >÷</Text></Pressable>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <Pressable onPress={() => { btnnum('7') }}><Text style={style.mytext} >7</Text></Pressable>
          <Pressable onPress={() => { btnnum('8') }}><Text style={style.mytext} >8</Text></Pressable>
          <Pressable onPress={() => { btnnum('9') }}><Text style={style.mytext} >9</Text></Pressable>
          <Pressable onPress={()=>{sign('*')}}><Text style={style.mygreen}>*</Text></Pressable>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <Pressable onPress={() => { btnnum('4') }}><Text style={style.mytext} >4</Text></Pressable>
          <Pressable onPress={() => { btnnum('5') }}><Text style={style.mytext} >5</Text></Pressable>
          <Pressable onPress={() => { btnnum('6') }}><Text style={style.mytext} >6</Text></Pressable>
          <Pressable onPress={()=>{sign('-')}}><Text style={style.mygreen}>-</Text></Pressable>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <Pressable onPress={() => { btnnum('1') }}><Text style={style.mytext} >1</Text></Pressable>
          <Pressable onPress={() => { btnnum('2') }}><Text style={style.mytext} >2</Text></Pressable>
          <Pressable onPress={() => { btnnum('3') }}><Text style={style.mytext} >3</Text></Pressable>
          <Pressable onPress={()=>{sign('+')}}><Text style={style.mygreen} >+</Text></Pressable>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <Pressable onPress={() => { btnnum('00') }}><Text style={style.mytext} >00</Text></Pressable>
          <Pressable onPress={() => { btnnum('0') }}><Text style={style.mytext} >0</Text></Pressable>
          <Pressable onPress={() => { btnnum('.') }}><Text style={style.mytext} >.</Text></Pressable>
          <Pressable onPress={eqal}><Text style={style.mygreeneq}>=</Text></Pressable>
        </View>

      </View>
    </>
  )
}

export default Mobcal;
const style = StyleSheet.create({

  button: {
    flex: 1,
    backgroundColor: 'black',
    borderTopColor: '#333333',
    borderWidth: 2,

  },
  mytext: {
    height: 75,
    width: 75,
    backgroundColor: '#333333',
    borderRadius: 50,
    fontSize: 35,
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
    paddingTop: 10,
  },
  mygreen: {
    color: '#8fde5b',
    height: 75,
    width: 75,
    backgroundColor: '#333333',
    borderRadius: 50,
    fontSize: 40,
    textAlign: 'center',
    marginTop: 10,
    paddingTop: 10,

  },
  myred: {
    color: '#fa5252',
    height: 75,
    width: 75,
    backgroundColor: '#333333',
    borderRadius: 50,
    fontSize: 40,
    textAlign: 'center',
    marginTop: 10,
    paddingTop: 10,

  },
  mygreeneq: {
    color: 'white',
    height: 75,
    width: 75,
    backgroundColor: '#8fde5b',
    borderRadius: 50,
    fontSize: 40,
    textAlign: 'center',
    marginTop: 10,
    paddingTop: 10,

  }

})