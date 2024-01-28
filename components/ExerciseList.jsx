import { View, Text } from 'react-native'
import React from 'react'

export default function ExerciseList({data}) {
  return (
    <View>
      <FlatList 
        data={data}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 60, paddingTop: 20}}
        columnWrapperStyle={{
            justifyContent: 'space-between'
        }}
        renderItem={({item, index}) => <Exercise router={router} index={index} item={item}/>}
      />
    </View>
  )
}