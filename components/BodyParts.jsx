import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function BodyParts() {
  return (
    <View className="mx-4">
      <Text style={{fontSize: hp(3)}} className="font-semibold  text-neutral-700">
        Exercises
      </Text>
    </View>
  )
}