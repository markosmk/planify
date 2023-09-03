import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../../../constants/colors';
import {StyleSheet} from 'react-native';

// const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    // height: 100,
    flex: 1,
  },
  content: {
    padding: 46,
    paddingTop: 0,
    backgroundColor: Colors.white,
  },
  title: {
    color: colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  subtitle: {
    color: colors.grey,
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
    backgroundColor: colors.white,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
});

export default styles;
