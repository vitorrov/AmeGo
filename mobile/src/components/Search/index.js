import React, { useState, useContext  } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Dimensions } from 'react-native';

import { ThemeContext } from 'styled-components';

import Animated, { Easing } from 'react-native-reanimated';
import Icon from "@expo/vector-icons/FontAwesome";

const ContainerInputAnimated = Animated.createAnimatedComponent(View);

import { Container, Input, Button } from './styles';

export default function Search({ onPress, background, placeholder, placeholderTextColor, buttonColor, iconColor, keyboardType }) {
    const themeContext = useContext(ThemeContext).colors;
    const [marginHeader] = useState(new Animated.Value(0));    
    const [searchWidth] = useState(new Animated.Value(Dimensions.get("window").width));
    const searchInput = React.createRef();
    
    function animateInput(a,b,c){
        Animated.timing(searchWidth,{
            toValue:Dimensions.get("window").width*a,
            useNativeDriver:true,             
            duration: 250,  
            easing: Easing.elastic(),
        }).start();
        Animated.timing(marginHeader,{
            toValue:b,
            useNativeDriver:true,             
            duration: 250,  
            easing: Easing.elastic(),
        }).start();
    }
    return (
        <Container>
            <ContainerInputAnimated style={{marginLeft:20,width:searchWidth}}>
                <Input 
                    background={background}
                    ref={searchInput}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    onFocus={()=>animateInput(0.8,-50,false)}
                />
            </ContainerInputAnimated>
            <Button style={{justifyContent:"center"}} onPress={()=>{animateInput(1,0,true);searchInput.current.blur()}}>
                <Text style={{color:buttonColor,fontSize:16, marginLeft:-20}}>Cancelar</Text>
            </Button>
            <View style={{position:'absolute',marginTop:18,marginLeft:32}}>
                <Icon name="search" size={20} color={iconColor}/> 
            </View>
        </Container>
    );
}

Search.propTypes = {
  onPress: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  keyboardType: PropTypes.string,
  buttonColor: PropTypes.string,
  iconColor: PropTypes.string,
  background:  PropTypes.string,
}

Search.defaultProps = {
  onPress: () => {},
  placeholder: "Buscar",
  placeholderTextColor: "#ddd",
  keyboardType: "default",
  buttonColor: "#333",
  iconColor: "#333",
  background: "#ddd",
};