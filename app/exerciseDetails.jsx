import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';


export default function exerciseDetails() {
    const item = useLocalSearchParams();
    const router = useRouter()

    console.log('got item: ', item)
  return (
    <View class="flex flex-1 pt-[7rem]">
      <StatusBar />
      <View class="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{uri: item.gifUrl}}
          contentFit='cover'
          style={{width: wp(100), height: wp(100)}}
          className="rounded-b-[40px]"
        />
      </View>
      <TouchableOpacity
        onPress={() => {router.back()}}
        className="mx-2 absolute rounded-full top-10 right-4"
      >
        <AntDesign name="closecircle" size={hp(3)} color="#f43f5e" />
      </TouchableOpacity>

      {/* details */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 60}} className="mx-4 space-y-2 mt-3">
        <Animated.Text
          entering={FadeInDown.duration(300).springify()}
          style={{fontSize: hp(3.5)}}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          {item.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(300).springify()} 
          style={{fontSize: hp(2)}}
          className="text-neutral-800 tracking-wide"
        >
          Equipment <Text className="font-bold text-neutral-800">
            {item?.equipment}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200).duration(300).springify()}  
          style={{fontSize: hp(2)}}
          className="text-neutral-800 tracking-wide"
        >
          Secondary Muscles <Text className="font-bold text-neutral-800">
            {item?.secondaryMuscles}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(300).duration(300).springify()}  
          style={{fontSize: hp(2)}}
          className="text-neutral-800 tracking-wide"
        >
          Target <Text className="font-bold text-neutral-800">
            {item?.target}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(400).duration(300).springify()}  
          style={{fontSize: hp(3)}}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          Instructions
        </Animated.Text>
        {
          item.instructions?.split(',').map((instruction, index) => {
            return (
              <Animated.Text
                entering={FadeInDown.delay((index+6) * 100).duration(300).springify()} 
                key={instruction}
                style={{fontSize: hp(1.7)}}
                className="text-neutral-800"
              >
                {instruction}
              </Animated.Text>
            )
          })
        }
      </ScrollView>
    </View>
  )
}