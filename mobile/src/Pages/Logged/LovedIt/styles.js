import styled from 'styled-components/native';

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