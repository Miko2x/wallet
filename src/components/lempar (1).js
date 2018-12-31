import React from 'react'
import {View,Text,FlatList,ActivityIndicator,Image,TouchableOpacity,ToastAndroid,TextInput} from 'react-native'

export default class Coba extends React.Component{
    
    state={
      id:this.props.navigation.state.params.detail.id,
      nama:this.props.navigation.state.params.detail.nama,
      asal:this.props.navigation.state.params.detail.asal
    }
    updatedata =({id,nama,asal})=>{
      const url='http://211.11.1.25:3000/santri/'+id
      return fetch(url,{
          method:'PUT',
          headers:{
              Accept:'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify({
              nama: nama,
              asal:asal,
        
          })
      })
      .then(data=>{console.log(data)
        ToastAndroid.show('data berhasil cuyyy',ToastAndroid.SHORT)
    })
      .catch(err=>{console.log(err)
        ToastAndroid.show('data gagal cuyyy',ToastAndroid.SHORT)
    })
      
  }
  deletedata =({id})=>{
    const url='http://211.11.1.25:3000/santri/'+id
    return fetch(url,{
        method:'DELETE',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
       
    })
    .then(data=>{console.log(data)
      ToastAndroid.show('data berhasil cuyyy',ToastAndroid.SHORT)
  })
    .catch(err=>{console.log(err)
      ToastAndroid.show('data gagal cuyyy',ToastAndroid.SHORT)
  })
    
}
  render(){
    const {id,nama,asal}=this.state
    return(
      <View>
         <TextInput
         value={this.state.nama}
         onChangeText={text=>this.setState({nama:text})}/>
         <TextInput
         value={this.state.asal}
         onChangeText={text=>this.setState({asal:text})}/>
         <TouchableOpacity onPress={()=>this.updatedata({id,nama,asal})}>
           <Text> UPDATE DATA</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>this.deletedata({id})}>
           <Text>DELETE DATA</Text>
         </TouchableOpacity>
      </View>
    )
  }
}

