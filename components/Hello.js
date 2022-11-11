import { View, Text } from 'react-native'
import React from 'react'
import ToastManager,{Toast} from 'toastify-react-native'
export default function Hello(props) {
  return (
    <>
    <View>
      <ToastManager/>
     
      <Text >Hello WORLD</Text>
     
    </View>
     { Toast.success('Success','top')
      }
      </>
  )
}