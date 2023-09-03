import colors from '@/constants/colors';
import {PropsWithChildren, memo} from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = ({children}: PropsWithChildren) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: colors.black,
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 24,
  },
});

export default memo(Title);
