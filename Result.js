import React, { useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
function Result(){

        const [s1,setTxt1] = useState('');
        const [s2,setTxt2] = useState('');
        const [s3,setTxt3] = useState('');
        const [s4,setTxt4] = useState('');
        const [s5,setTxt5] = useState('');
        const[total,setAns] = useState('');
        const[min,setMin] = useState('');
        const[max,setMax] = useState('');
        const[per,setPer] = useState('');
        const[grade,setGrade] = useState('');

    function submit(){

        setAns((parseInt(s1)+parseInt(s2)+parseInt(s3)+parseInt(s4)+parseInt(s5)))
        
        setPer((parseFloat(total/5)))



        if(s1<s2 && s1<s3 && s1<s4 && s1<s5){
            setMin((parseInt(s1)))
        }
        else if(s2<s3 && s2<s4 && s2<s5){
            setMin((parseInt(s2)))
        }
        else if(s3<s4 && s3<s5){
            setMin((parseInt(s3)))
        }
        else if(s4<s5){
            setMin((parseInt(s4)))
        }
        else{
            setMin((parseInt(s5)))
        }



        if(s1>s2 && s1>s3 && s1>s4 && s1>s5){
            setMax((parseInt(s1)))
        }
        else if(s2>s3 && s2>s4 && s2>s5){
            setMax((parseInt(s2)))
        }
        else if(s3>s4 && s3>s5){
            setMax((parseInt(s3)))
        }
        else if(s4>s5){
            setMax((parseInt(s4)))
        }
        else{
            setMax((parseInt(s5)))
        }

        if(per=>90){
            setGrade(("A1"))
        }
        else if(per=>80){
            setGrade(("A2"))
        }
        else if(per=>70){
            setGrade(("B1"))
        }
        else if(per=>60){
            setGrade(("B2"))
        }
        else if(per=>50){
            setGrade(("C1"))
        }
        else {
            setGrade(("fail"))
        }
        
        
    }
    return(
        <>
            <ScrollView>
                <View>
                    <Text style={style.main}>Isha Shingala</Text>

                    <View style={style.box}>
                        <Text style={style.name}>sub1:</Text>
                        <TextInput style={style.txt} onChangeText={((t)=>{setTxt1(t)})}></TextInput>  
                    </View>
                    <View style={style.box}>
                         <Text style={style.name}>sub2:</Text>
                        <TextInput style={style.txt} onChangeText={((t)=>{setTxt2(t)})}></TextInput>  
                    </View>
                    <View style={style.box}>
                         <Text style={style.name}>sub3:</Text>
                        <TextInput style={style.txt} onChangeText={((t)=>{setTxt3(t)})}></TextInput>  
                    </View>
                    <View style={style.box}>
                         <Text style={style.name}>sub4:</Text>
                        <TextInput style={style.txt} onChangeText={((t)=>{setTxt4(t)})}></TextInput>  
                    </View>
                    <View style={style.box}>
                         <Text style={style.name}>sub5:</Text>
                        <TextInput style={style.txt} onChangeText={((t)=>{setTxt5(t)})}></TextInput>  
                    </View>
                    <View style={style.box}>
                         <Text style={style.name}>Total:</Text>
                        <Text style={style.total}>{total}</Text>  
                    </View>
                    <View style={style.box}>
                         <Text style={style.name}>Per:</Text>
                         <Text style={style.per}>{per}</Text>  
                    </View>
                    <View style={style.box}>

                         <Text style={style.name}>Min:</Text>
                         <Text style={style.min}>{min}</Text>  
                        

                        <Text style={style.name}>Max:</Text>
                        <Text style={style.max}>{max}</Text>  
                    
                    </View>

                    <View style={style.box}>
                         <Text style={style.name}>Grade:</Text>
                         <Text style={style.grade}>{grade}</Text>  
                    </View>
                    
                    <View>
                        <Pressable onPress={submit}><Text style={style.btn}>Submit</Text></Pressable>
                    </View>

                </View>
            </ScrollView>

        </>
    )
}
export default Result;
const style=StyleSheet.create({

    name:{
        color:'white',
        fontSize:20,
        padding:10
        
    },
    main:{       
        fontSize:20,
        textAlign:'center',
        margin:10,
        color:'white',
    },
    box:{
        flex:0,
        flexDirection:'row',
        
    },
    txt:{
        padding:10,
        borderWidth:2,
        borderColor:'white',
        height: '70%',
        width: '80%',
        color:'white',
    },
    total:{
        padding:10,
        borderWidth:2,
        borderColor:'white',
        height: '80%',
        width: '30%',
        fontSize:15,
    },
    min:{
        padding:10,
        borderWidth:2,
        borderColor:'white',
        height: '80%',
        width: '30%'
    },
    max:{
        padding:10,
        borderWidth:2,
        borderColor:'white',
        height: '80%',
        width: '30%'
    },
    per:{
        padding:10,
        borderWidth:2,
        borderColor:'white',
        height: '80%',
        width: '30%'
    },
    grade:{
        padding:10,
        borderWidth:2,
        borderColor:'white',
        height: '80%',
        width: '30%'
    },
    btn:{
        height:'80%',
        width:'30%',
        backgroundColor:'blue',
        color:'white',
        fontSize:20,
        alignSelf:'center',
        textAlign:'center',
    }
})