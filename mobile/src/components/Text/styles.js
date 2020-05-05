import styled from 'styled-components/native';

export const Text = styled.Text`
  width: 100%;
  text-align: ${({ align }) => align};

  font-size: ${({ size }) => size}px;
  font-weight: ${({ bold }) => bold};

  color: ${({ color }) => color};
`;
