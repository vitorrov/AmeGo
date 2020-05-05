import styled from 'styled-components/native';

export const Container = styled.View`
  position: ${props => props.transparent ? 'absolute' : 'relative' };
  z-index: 9;

  width: 100%;
  min-height: 80px;
  padding: 0;
  padding-left: 5%;
  padding-right: 5%;
  
  top: 0;
  left: 0px;
  right: 0px;

  flex-direction: row;
  /* flex-flow: row wrap; */
  justify-content: space-between;
  align-items: center;
  align-content: center;
  
  background-color: ${props => props.transparent ? 'transparent' : props.theme.colors.background};

  elevation: ${props => props.transparent ? 0 : 5 };
`;


export const View =  styled.View`
  flex-grow: 3;
  flex-shrink: 3;

  justify-content: center;
  align-items: center;
`;