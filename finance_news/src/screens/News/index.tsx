import { useEffect, useState } from 'react';
import { FlatList, StatusBar, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { api } from '@lib/axios';

import { Loading } from '@components/Loading';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { NewsCard } from '@components/NewsCard';
import { Button } from '@components/Button';

import { Container } from './styles';

type User = {
  id: Number;
  name: string;
  email: string;
};

type New = {
  id: Number;
  title: string;
  link: string;
  likes: Number;
  createdAt: string;
  user: User;
};

export function News() {
  const [news, setNews] = useState<New[]>();
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  function handleAddNew() {
    navigation.navigate('addNew');
  }

  async function fetchNews() {
    try {
      setIsLoading(true);
      const { data } = await api.get('/news/?_expand=user');
      setNews(data);
    } catch (error) {
      Alert.alert('Notícias', 'Não foi possível carregar as notícias.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />

      <Highlight
        title="Últimas Notícias"
        subtitle="clique no título para ler"
      />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={news}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <NewsCard
              title={item.title}
              link={item.link}
              author={item.user.name}
            />
          )}
          contentContainerStyle={
            (news === undefined || news.length === 0) && { flex: 1 }
          }
          ListEmptyComponent={() => (
            <ListEmpty message="Cadastre a primeira notícia!" />
          )}
        />
      )}

      <Button title="Criar nova notícia" onPress={handleAddNew} />
    </Container>
  );
}
