import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {View, FlatList} from 'react-native';

import { rgba } from 'polished';

import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

import Search from '@components/Search';
import Text from '@components/Text';

import { Container, FlatListContainer, Item, ItemFooter, Image } from './styles';

import temporaryData from '@app/temporaryData'

const Categorie = ({ route, navigation }) => {
  const themeContext = useContext(ThemeContext).colors;
  const { subCategories, popular } = route.params.categorie;
  console.log(popular);
  
  navigation.setOptions({
    headerTitle : () => (
      <View style={{ flexDirection: 'row', justifyContent:"center", alignItems:"center" }} >
        <Text text="R. Aramina 412" style={{width: 'auto'}} size={16} color={themeContext.secundary}/>
        <Ionicons style={{ marginLeft: '5%' }} name="ios-arrow-down" size={22} color={themeContext.secundary} />
      </View>
    ),
    headerLeft: () => <Feather name="user" size={28} color={themeContext.secundary} />,
  });

  return (
    <Container>
      <Search 
        placeholder="O que deseja?"
        background={rgba(themeContext.tertiary, 0.2)}
        placeholderTextColor={rgba(themeContext.secundary, 0.4)}
        buttonColor={themeContext.secundary}
        iconColor={themeContext.secundary}
      />

      <FlatListContainer
        style={{minHeight: 100, height: "12%"}}>
        <FlatList
          horizontal={true}
          data={subCategories}
          renderItem={({ item }) => (
            <Item key={item.id} 
              width="100px"
              height="100px"
              background={themeContext.primary}
              onPress={()=> navigation.push('SubCategory', { SubCategory: item })}
            >
              <Image source={item.img} style={{marginTop: 20}} />            
              <Text text={item.title} />
            </Item>
          )}
          keyExtractor={item => item.id}
        />
      </FlatListContainer>
      
      <FlatListContainer style={{minHeight: 300, height: "40%"}}>
        <Text text="Populares" color={themeContext.primary} size={18} bold="bold" style={{width: "94%"}} />
        <FlatList
            horizontal={false}
            data={popular}
            renderItem={({ item }) => (
              <Item key={item.id} width="340px" height="200px" 
                //background={themeContext.primary}
              >
                <View style={{width: "100%", height: "100%", alignItems: "flex-start", justifyContent: "flex-start"}} >
                  <Image source={item.img} width="100%" height="85%" />            
                  <Text text={item.title} size={18} bold="bold" color={rgba(themeContext.primary, 0.6)} />
                </View>

                <ItemFooter>
                  <Ionicons name="ios-star" size={16} color="#ffff00" />
                  <Text text={item.evaluation} size={12} bold="bold" color={themeContext.tertiary} />
                </ItemFooter>
              </Item>
            )}
            // style={{flex: 1, height: 1000}}
            keyExtractor={item => item.id}
          />
      </FlatListContainer>
    </Container>
  );
}

export default Categorie;