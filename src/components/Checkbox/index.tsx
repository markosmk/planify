import colors from '@/constants/colors';
import {memo} from 'react';
import {Pressable, PressableProps, StyleSheet, View} from 'react-native';

const Checkbox = ({checked, onPress}: PressableProps & {checked: boolean}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, checked ? styles.checkedBox : {}]}>
      {checked ? <View style={styles.innerSquare} /> : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 3,
    height: 16,
    width: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerSquare: {
    backgroundColor: colors.green,
    height: 10,
    width: 10,
  },
  checkedBox: {
    borderWidth: 2,
  },
});

export default memo(Checkbox);
