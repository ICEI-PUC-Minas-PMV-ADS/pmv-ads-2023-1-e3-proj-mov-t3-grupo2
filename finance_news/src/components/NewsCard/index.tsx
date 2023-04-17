import { TouchableOpacityProps, Linking, Text } from 'react-native';
import { Container, Icon, Title, Author, InnerContainer } from './styles';

type NewsCardProps = TouchableOpacityProps & {
  title: string;
  link: string;
  author: string;
};

export function NewsCard({ title, link, author, ...rest }: NewsCardProps) {
  return (
    <Container {...rest}>
      <Icon />
      <InnerContainer>
        <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(link)}>
          <Title>{title}</Title>
        </Text>
        <Author>Compartilhado por: {author}</Author>
      </InnerContainer>
    </Container>
  );
}
