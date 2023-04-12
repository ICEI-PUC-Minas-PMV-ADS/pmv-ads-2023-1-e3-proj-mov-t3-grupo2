
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { NewsCard } from "@components/NewsCard";

import { Container } from "./styles";

export function News() {
  return (
    <Container>
      <Header />

      <Highlight
        title="Últimas Notícias"
        subtitle="clique no link para ser redirecionado"
      />

      <NewsCard
        title="Banco Central sobre o PIX"
        link="https://www.bcb.gov.br/estabilidadefinanceira/pix"
        author="João"
      />
    </Container>
  )
}
