// import colors from '../../../constants/colors';
import colors from '@/constants/colors';
import {StyleSheet} from 'react-native';

// const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  content: {
    // gap: 12,
  },
  footerText: {
    color: colors.grey,
    fontSize: 14,
    textAlign: 'center',
  },
  footerLink: {
    color: colors.green,
    fontWeight: 'bold',
  },
});

export default styles;
