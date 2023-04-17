import { useState } from 'react';
import { Alert } from 'react-native';

import { api } from '@lib/axios';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container, Content, Icon } from './styles';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function AddNew() {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  async function handleAddNew() {
    try {
      const createdAt = new Date().toISOString();
      await api.post('/news', {
        title,
        link,
        createdAt,
        userId: 1,
      });

      setTitle('');
      setLink('');
      Alert.alert('Sucesso! 👍', 'Notícia adicionada com sucesso!');
    } catch (_error) {
      Alert.alert('Erro ⚠', 'Não foi possível adicionar a notícia.');
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Adicionar notícia"
          subtitle="Ajude outras pessoas a se manterem informadas."
        />

        <Input placeholder="Título da notícia" onChangeText={setTitle} />

        <Input placeholder="Link da notícia" onChangeText={setLink} />

        <Button
          title="Compartilhar notícia"
          style={{ marginTop: 12 }}
          onPress={handleAddNew}
        />
      </Content>
    </Container>
  );
}
