import {memo} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import colors from '../../constants/colors';

const Button = ({
  onPress,
  type = 'primary',
  children,
}: TouchableOpacityProps & {type?: 'secondary' | 'primary'}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        type === 'secondary' && {backgroundColor: colors.lightGrey},
      ]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default memo(Button);
