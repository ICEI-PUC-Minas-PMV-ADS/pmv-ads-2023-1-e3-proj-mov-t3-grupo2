import { useEffect, useState } from "react";
import { DatePickerIOSBase, FlatList } from "react-native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { NewsCard } from "@components/NewsCard";
import { api } from "@lib/axios";

import { Container } from "./styles";

export function News() {
  const [news, setNews] = useState()

  async function fetchNews() {
    const { data } = await api.get('/news/?_expand=user')
    setNews(data)
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <Container>
      <Header />

      <Highlight
        title="Últimas Notícias"
        subtitle="clique no título para ler"
      />

      <FlatList
        data={news}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <NewsCard
            title={item.title}
            link={item.link}
            author={item.user.login}
          />
        }
      />
    </Container>
  )
}
