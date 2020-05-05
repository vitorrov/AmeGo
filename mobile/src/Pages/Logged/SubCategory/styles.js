import styled from 'styled-components/native';
import { rgba } from 'polished';

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.Image`
  width: ${({ width = "80px" }) => width};
  height: ${({ height = "80px" }) => height};
  margin-top: -10px;
  /* margin-bottom: 10px; */

  resize-mode: contain;
`;


export const Content = styled.View`
  width: 100%;
  height: 80%;
  margin-top: 2%;
  padding: 6%;

  background: ${({ theme }) => theme.colors.background};
  border-top-left-radius: 37px;
  border-top-right-radius: 37px;

  
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;
  
  /* background: ${({ theme }) => theme.colors.primary}; */

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.TouchableOpacity`
  min-width: 100%;
  height: 125px;
  margin-top: 6%;
  margin-bottom: 6%;
  padding: 4%;

  background: ${({ theme }) => rgba(theme.colors.tertiary, 0.6)};
  border-radius: 8px;

  flex-direction: row;
  justify-content: space-between;
  align-items:  flex-start;
`;

export const Body = styled.View`
  min-width: 50%;
  height: 76%;

  flex-direction: column;
  justify-content: space-between;
`;