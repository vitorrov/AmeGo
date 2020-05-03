import styled from 'styled-components/native';
import { rgba } from 'polished'

export const Container = styled.View`
  width: 90%;
  height: 50px;
  margin-bottom: 50px;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  height: 50px;
  padding: 10px 20px 10px 20px;
  margin-top: 10px;

  background: ${({ theme }) => rgba(theme.colors.tertiary, 0.9)};
  border-radius: 6px;

  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${({ theme,labelColor }) => labelColor ? labelColor : theme.colors.primary};
`;

export const TextInput = styled.TextInput.attrs(props => ({ 
  placeholderTextColor: props.theme.colors.quartenary
}))`
  font-size: 14px;
  color: ${({ theme,labelColor }) => labelColor ? labelColor : theme.colors.quartenary};

  width: 84%;
  height: 100%;
  margin-left: 6%;
  padding: 0;

  /* background: #f00 */
`;