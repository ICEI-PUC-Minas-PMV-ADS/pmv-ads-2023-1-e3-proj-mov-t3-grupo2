import { TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Logo } from '@components/Logo';
import { useUser } from '@contexts/userContext';

import { Container, BackIcon, BackButton, SignOutIcon, SignOutButton } from './styles';

type HeaderProps = {
  showBackButton?: boolean;
  showSignOutButton?: boolean;
};

export function Header({ showBackButton = false, showSignOutButton = false }: HeaderProps) {
  const navigation = useNavigation();
  const route = useRoute();
  const { setSigned, setUserId } = useUser();

  function handleLogOut() {
    setSigned?.(false);
    setUserId?.(0);
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoToNewsList() {
    if (route.name === 'news') return

    navigation.navigate('news');
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      {showSignOutButton && (
        <SignOutButton onPress={handleLogOut}>
          <SignOutIcon />
        </SignOutButton>
      )}
      <TouchableOpacity onPress={handleGoToNewsList}>
        <Logo size={showBackButton ? 56 : 84} />
      </TouchableOpacity>
    </Container>
  );
}
