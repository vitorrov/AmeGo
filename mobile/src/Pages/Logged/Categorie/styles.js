import styled from 'styled-components/native';
import  { rgba } from 'polished';

export const Container = styled.View`
  flex: 1;  
  min-height: 1000px;

  /* justify-content: flex-start;
  align-items: flex-start; */
`;

export const FlatListContainer = styled.View`
  width: 100%;
  /* min-height: 300px;
  height: 300px; */
  /* max-height: 500px; */
  margin-top: 2%;

  /* background-color: ${({ theme }) => rgba(theme.colors.primary, 0.4)}; */

  justify-content: center;
  align-items: center;
`;

export const Item = styled.TouchableOpacity`
  width: ${({ width = "300px" }) => width};
  height: ${({ height = "200px" }) => height};

  padding: 10px;
  margin: 10px;

  background-color: ${({ background }) => background ? rgba(background, 0.6) : 'transparent' };
  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: ${({ width = "80px" }) => width};
  height: ${({ height = "80px" }) => height};
  /* margin-top: 20px; */
  margin-bottom: 10px;

  resize-mode: contain;
`;

export const ItemFooter = styled.View`
  width: 100%;
  margin-top: 2%;

  /* background-color: ${({ theme }) => rgba(theme.colors.primary, 0.4)}; */

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
