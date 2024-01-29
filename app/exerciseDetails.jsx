import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function exerciseDetails() {
    const item = useLocalSearchParams();
    console.log('got item: ', item)
  return (
    <View class="flex flex-1">
      <View class="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{uri: item.gifUrl}}
          contentFit='cover'
          style
      </View>
    </View>
  )
}