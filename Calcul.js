import React,{useState} from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

function Calcul(){

    const [txt1,setTxt1] = useState('');
    const [txt2,setTxt2] = useState('');
    const [ans,setAns] = useState('');

    function btnClick(s){

        console.log("val1",txt1)
        console.log("val2",txt2)

        if(s == "+"){
            console.log("sub",parseInt(txt1)+parseInt(txt2))
            setAns((parseInt(txt1)+parseInt(txt2)));
        }

        if(s == "-"){
            console.log("sub",parseInt(txt1)-parseInt(txt2))
            setAns((parseInt(txt1)-parseInt(txt2)));
        }

        if(s == "*"){
            console.log("sub",parseInt(txt1)*parseInt(txt2))
            setAns((parseInt(txt1)*parseInt(txt2)));
        }

        if(s == "/"){
            console.log("div",parseInt(txt1)/parseInt(txt2))
            setAns((parseInt(txt1)/parseInt(txt2)));
        }

        

    }



    function btnClick1(){
        console.log("val1",txt1)
        console.log("val2",txt2)
        console.log("sum",parseInt(txt1)+parseInt(txt2))
        setAns((parseInt(txt1)+parseInt(txt2)));
    }
    function btnClick2(){
        console.log("val1",txt1)
        console.log("val2",txt2)
        console.log("sub",parseInt(txt1)-parseInt(txt2))
        setAns((parseInt(txt1)-parseInt(txt2)));

    }
    function btnClick3(){
        console.log("val1",txt1)
        console.log("val2",txt2)
        console.log("sub",parseInt(txt1)*parseInt(txt2))
        setAns((parseInt(txt1)*parseInt(txt2)));

    }
    function btnClick4(){
        console.log("val1",txt1)
        console.log("val2",txt2)
        console.log("div",parseInt(txt1)/parseInt(txt2))
        setAns((parseInt(txt1)/parseInt(txt2)));

    }



    return(
        <>
            <ScrollView>
                <View style={style.main}>
                    <View style={{width:'100%'}}>
                        <TextInput style={style.txtborder} onChangeText={((t)=>{setTxt1(t)})}></TextInput>
                    </View>
                    <View style={{width:'100%'}}>
                        <TextInput style={style.txtborder} onChangeText={((t)=>{setTxt2(t)})}></TextInput>
                    </View>
                    
                </View>
                
                    <View style={style.btn}>
                        <Button title="+" onPress={btnClick1} ></Button>
                   
                        <Button title="-" onPress={btnClick2} ></Button>
                    
                        <Button title="*" onPress={btnClick3} ></Button>
                    
                        <Button title="/" onPress={btnClick4} ></Button>
                    </View>

                    <View style={{width:'100%'}}>
                        <Button title="Submit" onPress={btnClick}></Button>
                    </View>
                
                <Text style={style.ans}>{ans}</Text>
                
            </ScrollView>
        </>
    )
}
export default Calcul;
const style = StyleSheet.create({
    txtborder:{
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:2,
        margin:10,
        color:'black',
    },
    ans:{
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:2,
        margin:10,
        color:'black',
    },
    btn:{
        color:'white',
        height:40,
        width:100,
        flexDirection:'row',
        alignContent:"space-around",
        margin:20,
        gap:10,
        justifyContent:'center'
       
    }
   
   
});

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// export default function Calcul() {
//   const [display, setDisplay] = useState('0');
//   const [operand1, setOperand1] = useState('');
//   const [operand2, setOperand2] = useState('');
//   const [operator, setOperator] = useState('');

//   const handleButtonPress = (value) => {
//     if (value === '=') {
//       calculateResult();
//     } else if (value === 'C') {
//       clearDisplay();
//     } else if (value === '+' || value === '-' || value === '*' || value === '/') {
//       setOperator(value);
//       setOperand1(display);
//       setDisplay('0');
//     } else {
//       if (display === '0') {
//         setDisplay(value);
//       } else {
//         setDisplay(display + value);
//       }
//     }
//   };

//   const clearDisplay = () => {
//     setDisplay('0');
//     setOperand1('');
//     setOperand2('');
//     setOperator('');
//   };

//   const calculateResult = () => {
//     const num1 = parseFloat(operand1);
//     const num2 = parseFloat(display);
//     let result;

//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         result = num1 / num2;
//         break;
//       default:
//         return;
//     }

//     setDisplay(result.toString());
//     setOperand1('');
//     setOperand2('');
//     setOperator('');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.display}>{display}</Text>
//       <View style={styles.buttons}>
//         {[['7', '8', '9'], ['4', '5', '6'], ['1', '2', '3'], ['C', '0', '=']].map((row, rowIndex) => (
//           <View key={rowIndex} style={styles.row}>
//             {row.map((buttonValue, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={styles.button}    
//                 onPress={() => handleButtonPress(buttonValue)}>
//                 <Text style={styles.buttonText}>{buttonValue}</Text>
//               </TouchableOpacity>
//             ))} 
//           </View>
//         ))}
//         {['+', '-', '*', '/'].map((operator, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.button}
//             onPress={() => handleButtonPress(operator)}>
//             <Text style={styles.buttonText}>{operator}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   display: {
//     fontSize: 48,
//     marginBottom: 20,
//   },
//   buttons: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 10,
//   },
//   button: {
//     width: 80,
//     height: 80,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     margin: 5,
//   },
//   buttonText: {
//     fontSize: 24,
//   },
// });
