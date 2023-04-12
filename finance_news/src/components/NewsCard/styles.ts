import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { CurrencyDollar } from 'phosphor-react-native'

export const Container = styled(TouchableOpacity)`
  width: 80%;
  height: auto;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  padding: 24px;
  margin-bottom: 12px;
`

export const InnerContainer = styled.View`
  flex: 1;
  flex-direction: column;

  align-items: flex-end;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Author = styled.Text`
  margin-top: 12px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const Icon = styled(CurrencyDollar).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700
}))`
  margin-right: 20px;
`