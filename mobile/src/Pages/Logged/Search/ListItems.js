import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FlatList, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

import { rgba } from 'polished'
import Text from '@components/Text';
import { Container, Item, ItemFooter, Header, Image } from './styles';

const ListItems = ({ array }) => {
  const themeContext = useContext(ThemeContext).colors;
  return (
    <Container>
      {/* <Status /> */}
      <FlatList
        horizontal={false}
        data={array}
        renderItem={({ item }) => (
          <Item key={item.id} width="100%" height="300px" 
            background={themeContext.primary}
          >
            <Header style={{width: '65%',height: 20}}>
              <Image source={item.logo} width="60px" height="60px" borderRadius="100px" />
              <Text style={{width: '90%'}} text={item.title} color={themeContext.secundary} size={12} bold="bold" />
            </Header>

            <FlatList
              horizontal={true}
              data={item.goods}
              renderItem={({ item }) => (
                <Item key={item.id} width="200px" height="80%"
                  style={{marginLeft: 20, marginRigth: 20}}
                  background={themeContext.primary}
                >
                  <Image source={item.img} width="100%" height="100%" borderRadius="10px" />
                  <Text style={{width: '90%'}} text={item.title} color={themeContext.secundary} size={12} bold="bold" />
                </Item>
              )}
              // style={{flex: 1, height: 1000}}
              keyExtractor={item => item.id}
            />

          </Item>
        )}
        // style={{flex: 1, height: 1000}}
        keyExtractor={item => item.id}
      />
    </Container>
  );
}

const Status = ({ array }) => {
  const themeContext = useContext(ThemeContext).colors;
  return (
    <FlatList
      horizontal={true}
      data={array}
      renderItem={({ item }) => (
        <Image source={item.img} width="50px" height="50px" />          
      )}
      // style={{flex: 1, height: 1000}}
      keyExtractor={item => item.id}
    />
  );
}

export default ListItems;