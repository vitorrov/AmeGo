import styled from 'styled-components/native';
import { rgba } from 'polished';

export const FooterContainer = styled.View`
  width: 100%;
  min-height: 50px;
  max-height: 100px;

  position: absolute;
  bottom: 0%;

  background-color: ${({ theme }) => rgba(theme.colors.secundary, 0.4)};

  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  min-height: 100px;
  max-height: 300px;
  margin-bottom: 100px;

  /* background-color: ${({ theme }) => rgba(theme.colors.secundary, 0.4)}; */

  align-items: center;
  justify-content: center;
`;


export const Header = styled.View`
  flex: 1;
  width: 100%;
  min-height: 100px;
 /*  max-height: 300px; */
  padding: 20px;
  padding-top: 20px;

  /* background-color: ${({ theme }) => rgba(theme.colors.secundary, 0.4)}; */

  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const Row = styled.View`
  width: 100%;
  /* min-height: 100px;
  max-height: 300px; */
  margin-bottom: 10px;

  /* background-color: ${({ theme }) => rgba(theme.colors.secundary, 0.4)}; */

  flex-direction: ${({ direction = "column" }) => direction};
  align-items: center;
  justify-content: space-between;
`;

export const MainContainer = styled.View`
  width: 100%;
  min-height: 100px;
  max-height: 300px;
  margin-top: 10px;
  margin-bottom: 20px;

  align-items: center;
  justify-content: center;
`;

export const Main = styled.View`
  width: 94%;
  min-height: 100px;
  padding: 4%;
  padding-top: 25px;
  padding-bottom: 50px;

  background-color: ${({ theme }) => rgba(theme.colors.secundary, 1)};
  border-radius: 5px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;