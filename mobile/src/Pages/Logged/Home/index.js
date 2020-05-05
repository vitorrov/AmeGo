import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {FlatList} from 'react-native';

import { rgba } from 'polished';

import Carousel from 'react-native-snap-carousel';;

import Search from '@components/Search';
import Text from '@components/Text';

import { Container, CarouselContainer, Content, Item } from './styles';

import temporaryData from '@app/temporaryData'

const Home = ({ navigation, navigationStack }) => {
  const [ categories, setCategories ] = useState(temporaryData.categories);
  const [ recentCategories, setRecentCategories ] = useState(temporaryData.recentCategories);
  const themeContext = useContext(ThemeContext).colors;
  
  return (
    <Container>
      <Search 
        placeholder="O que deseja?"
        background={rgba(themeContext.tertiary, 0.2)}
        placeholderTextColor={rgba(themeContext.secundary, 0.4)}
        buttonColor={themeContext.secundary}
        iconColor={themeContext.secundary}
      />

      <CarouselContainer>
        <Carousel
          layout={"default"}
          // ref={ref => carousel = ref}
          data={categories}
          sliderWidth={500}
          itemWidth={250}
          itemHeight={250}

          renderItem={({item, index}) => (
            <Item width={200} height={250} onPress={()=> navigation.push('Categorie', { categorie: item })}>
              <Text text={item.title} style={{fontSize: 30}} />
              <Text>{item.text}</Text>
            </Item>
          )}
          // onSnapToItem = { index => this.setState({activeIndex:index}) }
        />
      </CarouselContainer>
      
      <Content>
        <Text 
          text="Visitados recentemente"
          color={rgba(themeContext.secundary, 0.8)}
          size={20}
          bold="bold"
        />

        <FlatList
          horizontal={true}
          data={recentCategories}
          renderItem={({ item }) => (
            <Item key={item.id} width={150} height={150}>
              <Text text={item.title} />
            </Item>
          )}
          style={{height: 200, marginTop: 20}}
          keyExtractor={item => item.id}
        />
      </Content>
      
    </Container>
  );
}

export default Home;