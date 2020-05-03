import React, { useState } from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Routes from '@app/Routes/Authentication';

import Logo from '@assets/logo.png'
import { Container, Content, Header, Img } from './styles';

export default function Authentication(){
  const translateY = new Animated.Value(0);
  let offset = 0;

  const animatedEvent = new Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  );

  const onHandlerStateChange = (event) => {

    if(event.nativeEvent.oldState === State.ACTIVE){
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if(translationY >= 100){
        opened = true
      } else{
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 0 : -200,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 0 : -200;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }
  return (
    <Container>
      <Header>
        <Img source={ Logo } />
      </Header>

      <PanGestureHandler 
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Content style={{
          transform: [{
            translateY: translateY.interpolate({
              inputRange: [-200, 0, 380],
              outputRange: [-200, 0, 380],
              extrapolate: 'clamp'
            }),
          }]        
        }}>
          <Routes />
        </Content>
      </PanGestureHandler>

    </Container>
  );
}
