import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Container, Content, Icon } from './styles'
import { Button } from '@components/Button'

export function AddNew() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Adicionar notícia"
          subtitle="Ajude outras pessoas a se manterem informadas."
        />

        <Button
          title="Compartilhar notícia"
        />
      </Content>
    </Container>
  )
}