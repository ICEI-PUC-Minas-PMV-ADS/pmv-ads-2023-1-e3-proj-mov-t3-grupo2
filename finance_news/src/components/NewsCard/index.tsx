import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title, Author, InnerContainer } from './styles'

type NewsCardProps = TouchableOpacityProps & {
  title: string
  link: string
  author: string
}

export function NewsCard({ title, link, author, ...rest }: NewsCardProps) {
  return (
    <Container {...rest}>
      <Icon />
      <InnerContainer>
        <a
          href={link}
          target='_blank'
        >
          <Title>{title}</Title>
        </a>
        <Author>Compartilhado por: {author}</Author>
      </InnerContainer>
    </Container>
  )
}