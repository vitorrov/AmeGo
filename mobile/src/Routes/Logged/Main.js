import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemeContext } from 'styled-components';

import Feather from '@expo/vector-icons/Feather';

import Text from '@components/Text';
import { MainContainer, Main, Row } from './styles';

const MainComponent = () => {
  const themeContext = useContext(ThemeContext).colors;

  return <MainContainer>
    <Main>
      <TouchableOpacity style={{width: '26%', height: 50, marginLeft: '2%'}}>
        <Row>
          <Feather name="user" size={20} color={themeContext.background} />
          <Text text="Dados do perfil" align="center" size={16} color={themeContext.background} />
        </Row>
      </TouchableOpacity>

      <TouchableOpacity style={{width: '26%', height: 50, marginLeft: '2%'}}>
        <Row>
            <Feather name="credit-card" size={20} color={themeContext.background} />
            <Text text="Método de pagamento" align="center" size={16} color={themeContext.background} />    
        </Row>
      </TouchableOpacity>
    </Main>
  </MainContainer>;
}

export default MainComponent;