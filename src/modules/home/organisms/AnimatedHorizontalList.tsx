/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {FONTS, screenWidth} from '@utils/Constants';
import {navigate} from '@navigation/NavigationUtil';

const AnimatedHorizontalList: FC<{data: any}> = ({data}) => {
  console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{data?.title}</Text>

      <FlatList
        data={data?.data}
        keyExtractor={item => item?.id.toString()}
        horizontal
        // style={{paddingHorizontal: 15}}
        renderItem={({item, index}) => (
          <Pressable
            key={index}
            style={styles.imgContainer}
            onPress={() => navigate('Categories')}>
            <Image source={{uri: item?.image_uri}} style={styles.image} />
          </Pressable>
        )}
        contentContainerStyle={{
          paddingHorizontal: 15,
          gap: 12,
        }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default AnimatedHorizontalList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  textStyle: {
    fontSize: RFValue(14),
    fontFamily: FONTS.heading,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imgContainer: {
    width: screenWidth * 0.45,
    height: screenWidth * 0.6,
    marginRight: 15,
  },
});
