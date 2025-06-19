/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from '@store/reduxHook';
import {
  addItem,
  removeItem,
  selectItemCountById,
} from '@modules/cart/api/slice';
import {Colors} from '@utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from '@components/atoms/Icon';

const UniversalAdd: FC<{item: any}> = ({item}) => {
  const count = useAppSelector(selectItemCountById(item._id));
  const dispatch = useAppDispatch();
  return (
    <View
      style={[
        styles.constainer,
        {backgroundColor: count === 0 ? '#fff' : Colors.active},
      ]}>
      {count === 0 ? (
        <TouchableOpacity
          onPress={() => dispatch(addItem(item))}
          style={styles.add}>
          <Text style={styles.addText}>ADD</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={() => dispatch(removeItem(item))}>
            <Icon
              color="#fff"
              name="minus"
              iconFamily="MaterialCommunityIcons"
              size={RFValue(14)}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{count}</Text>
          <TouchableOpacity onPress={() => dispatch(addItem(item))}>
            <Icon
              color="#fff"
              name="plus"
              iconFamily="MaterialCommunityIcons"
              size={RFValue(14)}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default UniversalAdd;

const styles = StyleSheet.create({
  constainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.active,
    width: 65,
  },
  add: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  addText: {
    color: Colors.active,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 4,
    paddingVertical: 4,
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    fontSize: RFValue(12),
  },
});
