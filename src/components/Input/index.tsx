import colors from '@/constants/colors';
import {JSX, memo} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

const Input = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<TextInput> &
    Readonly<TextInputProps>,
) => {
  return (
    <TextInput
      placeholderTextColor={colors.lightGrey2}
      style={styles.input}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    color: colors.black,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: colors.lightGrey,
    marginBottom: 12,
  },
});

export default memo(Input);
