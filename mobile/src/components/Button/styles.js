import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { rgba } from 'polished';

export const Container = styled(LinearGradient).attrs(props => ({
  colors:[props.theme.colors.primary, props.theme.colors.secundary],
  start: {x: 0.01, y: 0},
  end: {x: 1, y: 0}
}))`
  width: 90%;
  height: 50px;
  padding: 10px 20px 10px 20px;
  margin-top: 10px;
  margin-bottom: 50px;

  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  width: 84%;

  font-size: 16px;
  color: ${({ theme, textColor }) => textColor ? textColor : theme.colors.background};

  text-align: center;
`;