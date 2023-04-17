import styled from 'styled-components/native';
import { CurrencyCircleDollar } from 'phosphor-react-native';

export const LogoStyle = styled(CurrencyCircleDollar).attrs(({ size, color }) => ({
  size: size,
  color: color,
}))``;