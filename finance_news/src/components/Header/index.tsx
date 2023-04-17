import { Container, BackIcon, BackButton } from './styles';
import { Logo } from '@components/Logo';

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo size={showBackButton ? 56 : 84} />
    </Container>
  );
}
