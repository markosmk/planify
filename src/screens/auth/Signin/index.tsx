import {memo} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';

import styles from './styles';

import Button from '@/components/Button';
import Title from '@/components/Title';
import Input from '@/components/Input';

type RootStackParamList = {
  Signin: undefined;
  Signup: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Signin'>;

const Signin = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Title>Welcome Back!</Title>
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry />
        <Button>Log In</Button>
        <Text style={styles.footerText}>
          Not Registered?{' '}
          <Text
            style={styles.footerLink}
            onPress={() => navigation.navigate('Signup')}>
            Signup here!
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default memo(Signin);
