import { TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Logo } from '@components/Logo';

import { Container, BackIcon, BackButton } from './styles';

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();
  const route = useRoute();

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
      <TouchableOpacity onPress={handleGoToNewsList}>
        <Logo size={showBackButton ? 56 : 84} />
      </TouchableOpacity>
    </Container>
  );
}
