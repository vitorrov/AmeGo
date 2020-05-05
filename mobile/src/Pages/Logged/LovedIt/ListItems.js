import React from 'react';
import { FlatList } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

import Text from '@components/Text';
// import { Container } from './styles';

const ListItem = ({ array }) => {
  return (
    <FlatList
      horizontal={false}
      data={array}
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
  );
}

export default ListItem;