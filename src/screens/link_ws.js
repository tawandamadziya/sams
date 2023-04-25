import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Link_WS extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%",}}>

            <View style={{flex:0.1,}}></View>

            <Image
            source={require("../images/hmb.jpg")}
            style={{
            //   
              flexDirection: "center",
              width: "80px",
              height: "65px",
            }}
          />
                <Text style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    fontSize:"25px",
                    fontWeight:"bold",
                    }}>Add Request</Text>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    // backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderColor:"#004AAD",
                    borderWidth:"1px",
                    
                    
                }}>
                    <Text onPress={()=>navigate('Add')} style={{
                        color:"black",
                        fontFamily:"SemiBold"
                    }}>Blocked Drains</Text>
                </View>
                <View  style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    paddingVertical:10,
                    borderColor:"#004AAD",
                    borderWidth:"1px",
                    
                }}>
                    <Text onPress={()=>navigate('Add')} style={{
                        color:"black",
                        fontFamily:"SemiBold"
                    }}>Water Leakage</Text>
                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    paddingVertical:10,
                    borderColor:"#004AAD",
                    borderWidth:"1px",
                    
                }}>
                    <Text onPress={()=>navigate('Add')} style={{
                        color:"black",
                        fontFamily:"SemiBold"
                    }}>Blocked Toilets</Text>
                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    paddingVertical:10,
                    borderColor:"#004AAD",
                    borderWidth:"1px",
                    
                }}>
                    <Text onPress={()=>navigate('New')} style={{
                        color:"black",
                        fontFamily:"SemiBold"
                    }}>Add different category</Text>
                </View>

                <View  style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"red",
                    paddingVertical:10,
                    
                }}>
                    <Text onPress={()=>navigate('landing')} style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Back</Text>
                </View>

            </View>
        )
    }
}