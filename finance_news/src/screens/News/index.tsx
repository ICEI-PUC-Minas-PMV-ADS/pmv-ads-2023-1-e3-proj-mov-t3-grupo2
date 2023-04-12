
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

import { Container } from "./styles";

export function News() {
  return (
    <Container>
      <Header />

      <Highlight
        title="Últimas Notícias"
        subtitle="clique no link para ser redirecionado"
      />
    </Container>
  )
}
