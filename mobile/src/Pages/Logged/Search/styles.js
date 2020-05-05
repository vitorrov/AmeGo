import styled from 'styled-components/native';
import { rgba } from 'polished'

// scrollView
export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.background};
  /* justify-content: center; */
  /* align-items:center; */
`;

export const Content = styled.View`
  flex: 1;
  height: 100%;
  position: relative;
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;
  
  /* background: ${({ theme }) => theme.colors.primary}; */

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.TouchableOpacity`
  width: ${({ width = '300px' }) => width};
  height: ${({ height = '200px' }) => height};
  margin-top: 6%;
  margin-bottom: 6%;
  padding: 6%;
  padding-top: 8%;

  background: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
  border-radius: 8px;

  flex-direction: column;
  justify-content: space-between;
  align-items:  flex-start;
`;

export const ItemFooter = styled.View`
  width: 100%;
  margin-top: 2%;

  /* background-color: ${({ theme }) => rgba(theme.colors.primary, 0.4)}; */

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image`
  width: ${({ width = "80px" }) => width};
  height: ${({ height = "80px" }) => height};
  margin-top: -10px;
  /* margin-bottom: 10px; */

  border-radius: ${({ borderRadius = '0px' }) => borderRadius};

  resize-mode: contain;
`;
