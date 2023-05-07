import { useState } from 'react';
import { Alert } from 'react-native';

import { api } from '@lib/axios';

import { Highlight } from '@components/Highlight';
import { Container, Content, Icon } from './styles';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@components/Header';

export function SignUp() {
  const [email, setEmail] = useState('joao@exemplo.com');
  const [password, setPassword] = useState('123456');
  const [confirmation, setConfirmation] = useState('123456');
  const [name, setName] = useState('João');

  const navigation = useNavigation();

  async function handleLogin() {
    if (confirmation !== password) {
      Alert.alert('Erro ⚠', 'As senhas não coincidem.');

      return;
    }

    try {
      api.post('/users', {
        email,
        password,
        name,
      });

      setEmail('');
      setPassword('');
      setName('');
      Alert.alert('Sucesso! 👍', 'Usuário cadastrado com sucesso!');
    } catch (_error) {
      Alert.alert('Erro ⚠', 'Falha ao cadastrar usuário.');
    } finally {
      navigation.navigate('login');
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon size={128} />

        <Highlight title="Cadastro de Usuário" />

        <Input placeholder="Nome" value={name} onChangeText={setName} />

        <Input placeholder="Email" value={email} onChangeText={setEmail} />

        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Input
          placeholder="Confirme a Senha"
          value={confirmation}
          onChangeText={setConfirmation}
          secureTextEntry
        />

        <Button
          title="Cadastrar"
          style={{ marginTop: 12 }}
          onPress={handleLogin}
          disabled={!name || !email || !password || !confirmation}
        />
      </Content>
    </Container>
  );
}
