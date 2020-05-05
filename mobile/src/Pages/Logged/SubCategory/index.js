import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FlatList, StatusBar } from 'react-native';

import { rgba } from 'polished';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Text from '@components/Text';
import { Container, Image, Content, Header, Item, Body } from './styles';

const SubCategory = ({ route, navigation }) => {
  const { cover, stores, title } = route.params.SubCategory;
  const themeContext = useContext(ThemeContext).colors;
    
  navigation.setOptions({
    // headerRight : () => <Ionicons name="ios-search" size={28} color={themeContext.secundary} />,
    headerTitle : () => <></>,
    headerLeft: () => <Ionicons name="ios-arrow-back" size={28} color={themeContext.secundary} />,
    transparent: true
  });

  return (
    <Container>
      <StatusBar hidden={true}/>
      <Image width="100%" height="38%" source={cover} />
      
      <Text style={{marginTop: "-30%"}} text={title} color={themeContext.secundary} align="center" size={28} bold="bold" />

      <Content>
        <Header>
          <Text style={{width: '50%'}} text={`${stores.length} Restaurantes`} color={themeContext.tertiary} size={18} bold="bold" />
          <MaterialIcons name="unfold-more" size={28} color={themeContext.tertiary} />
        </Header>

        <FlatList
          horizontal={false}
          data={stores}
          renderItem={({ item }) => (
            <Item key={item.id}>
              <Image style={{marginTop: 0, borderRadius: 10}} width="45%" height="100px" source={item.img} />
              <Body>
                <Header style={{width: '65%',height: 20}}>
                  <Text style={{width: '90%'}} text={item.title} color={themeContext.secundary} size={12} bold="bold" />
                  <Ionicons name="ios-heart" size={16} color={themeContext.tertiary} />
                </Header>
                <Header style={{width: '65%',height: 20}}>
                  <Ionicons name="ios-star" size={16} color="#ffff00" />
                  <Text style={{width: '90%'}} text={item.evaluation} color={themeContext.quartenary} size={11} />
                </Header>
              </Body>
            </Item>
          )}
        />
      </Content>
    </Container>
  );
}

export default SubCategory;