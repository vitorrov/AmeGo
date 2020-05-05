import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const CarouselContainer = styled.View`
  width: 100%;
  /* margin-top: 10%; */

  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 5%;
  padding: 5%;
`;


export const Item = styled.TouchableOpacity`
  width: ${({ width = 300 }) => width}px;
  height: ${({ height = 200 }) => height}px;

  padding: 10px;
  margin-left: 25px;
  margin-right: 25px;

  background-color: blue;
  border-radius: 5px;
`;