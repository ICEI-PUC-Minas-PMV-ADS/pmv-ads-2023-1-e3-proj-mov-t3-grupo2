import { Container, Logo, BackIcon, BackButton } from './styles'

import logoSvg from '@assets/logo.svg'

type HeaderProps = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {
        showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoSvg} />
    </Container>
  )
}