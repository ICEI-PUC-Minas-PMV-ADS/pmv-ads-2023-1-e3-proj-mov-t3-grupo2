import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Container, Content, Icon } from './styles'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

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

        <Input
          placeholder="Título da notícia"
        />

        <Input
          placeholder="Link da notícia"
        />

        <Button
          title="Compartilhar notícia"
          style={{ marginTop: 12 }}
        />
      </Content>
    </Container>
  )
}