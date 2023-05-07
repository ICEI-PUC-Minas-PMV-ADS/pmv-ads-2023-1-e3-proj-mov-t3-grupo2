import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { api } from '@lib/axios';

import { Highlight } from '@components/Highlight';
import { Container, Content, Icon } from './styles';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';

import { useUser } from '@contexts/userContext';

export function Login() {
  const [email, setEmail] = useState('joao@exemplo.com');
  const [password, setPassword] = useState('123456');
  const { setSigned, setUserId } = useUser();
  const navigation = useNavigation();

  async function handleLogIn() {
    try {
      const { data } = await api.post('/login', {
        email,
        password,
      });

      setSigned?.(true);
      setUserId?.(data.user.id);

      navigation.navigate('news');
    } catch (_error) {
      Alert.alert('Erro ⚠', 'Usuário ou senha inválidos.');
    }
  }

  function handleSignUp() {
    navigation.navigate('signUp');
  }

  return (
    <Container>
      <Content>
        <Icon size={128} />

        <Highlight title="Finance News" subtitle="Faça login ou cadastre-se" />

        <Input placeholder="Email" value={email} onChangeText={setEmail} />

        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button
          title="Login"
          style={{ marginTop: 12 }}
          onPress={handleLogIn}
          disabled={!email || !password}
        />

        <Button
          title="Cadastrar"
          style={{ marginTop: 12 }}
          type="SECONDARY"
          onPress={handleSignUp}
        />
      </Content>
    </Container>
  );
}
