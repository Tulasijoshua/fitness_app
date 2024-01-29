import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function exerciseDetails() {
    const item = useLocalSearchParams();
    const router = useRouter()

    console.log('got item: ', item)
  return (
    <View class="flex flex-1">
      <View class="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{uri: item.gifUrl}}
          contentFit='cover'
          style={{width: wp(100), height: wp(100)}}
          className="rounded-b-[40px]"
        />
      </View>
      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-2 absolute rounded-full mt-2 right-0"
      >
        
      </TouchableOpacity>
    </View>
  )
}