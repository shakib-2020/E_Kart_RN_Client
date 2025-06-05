import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import {screenHeight, screenWidth} from '@utils/Constants';
import FilmSlip from '../molecules/FilmSlip';
import Carousel from 'react-native-reanimated-carousel';
import Dots from '../atoms/Dots';

const AdCarousal: FC<{data: any}> = ({data}) => {
  const [active, setActive] = useState(0);
  const baseOption = {
    vertical: false,
    width: screenWidth,
    height: screenHeight * 0.35,
  };
  return (
    <View>
      <FilmSlip />
      <Carousel
        {...baseOption}
        loop
        autoPlayInterval={3500}
        pagingEnabled
        snapEnabled
        autoPlay
        onSnapToItem={(index: any) => setActive(index)}
        data={data?.data}
        renderItem={({item}: any) => (
          <Pressable style={styles.imageContainer}>
            <Image source={item?.image_uri} style={styles.img} />
          </Pressable>
        )}
      />
      {active !== null && (
        <View style={styles.dots}>
          {data?.data?.map((item: any, index: any) => (
            <Dots key={index} index={index} active={active} />
          ))}
        </View>
      )}
    </View>
  );
};

export default AdCarousal;

const styles = StyleSheet.create({
  dots: {
    flexDirection: 'row',
    width: 100,
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  imageContainer: {
    width: screenWidth,
    height: screenHeight * 0.35,
  },
  img: {
    width: screenWidth,
    height: screenHeight * 0.35,
    resizeMode: 'cover',
  },
});
