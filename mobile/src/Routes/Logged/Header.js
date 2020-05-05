import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Ionicons from '@expo/vector-icons/Ionicons';

import Button from '@components/Button';
import Avatar from '@components/Avatar';
import Text from '@components/Text';
import { Header, Row } from './styles';

const HeaderContent = () => {
  const themeContext = useContext(ThemeContext).colors;
  return (
    <Header>
        <Row direction="row">
          <Row style={{width: '50%'}}>
            <Text text="Olá" size={32} bold='bold'/>
            <Text text="Carlos" size={32} bold='bold' color={themeContext.secundary}/>
          </Row>
          <Avatar source="https://avatars2.githubusercontent.com/u/57706806?s=460&u=d99f75dd759767691aecc7463b92fa022a4b01ee&v=4" />
        </Row>
        
        <Button 
          color={themeContext.secundary}
          text={<Text text="Bronze" size={16} color={themeContext.background} />}
          icon={<Ionicons name="ios-arrow-forward" size={22} color={themeContext.background}/>}
          width="50%"
          height="40px"
        />
    </Header>
  );
}

export default HeaderContent;