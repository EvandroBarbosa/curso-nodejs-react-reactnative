import React from 'react';
import { Text } from 'react-native';

import Input from '~/components/Input';
import Background from '~/components/Background';

export default function SignIn() {
  return (
    <Background>
      <Text>SignIn</Text>

      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Digite seu celular"
      />
    </Background>
  );
}
