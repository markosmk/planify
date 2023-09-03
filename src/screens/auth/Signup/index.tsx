import {memo, useState} from 'react';
import {Linking, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';
import Input from '@/components/Input';
import Title from '@/components/Title';
import Checkbox from '@/components/Checkbox';
import {PRIVACY_LINK, TERMS_CONDITIONS_LINK} from '@/constants/links';

// type RootStackParamList = {
//   Signup: undefined;
// };

// type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const Signup = ({navigation}: any) => {
  const [agreed, setAgreed] = useState(false);

  const onLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the hub!</Title>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" secureTextEntry />
      <Input placeholder="Confirm Password" secureTextEntry />

      <View style={styles.row}>
        <Checkbox checked={agreed} onPress={() => setAgreed(value => !value)} />
        <Text style={styles.agreeText}>
          I agree to{' '}
          <Text
            style={styles.link}
            onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}>
            Terms and Conditions
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={() => onLinkPress(PRIVACY_LINK)}>
            Privacy Policy
          </Text>
        </Text>
      </View>

      <Button type="primary">Create new Account</Button>

      <Text style={styles.footerText}>
        Already Registered?{' '}
        <Text
          style={styles.footerLink}
          onPress={() => navigation.navigate('Signin')}>
          Sign in!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default memo(Signup);
