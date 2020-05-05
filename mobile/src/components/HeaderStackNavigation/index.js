import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Text from '@components/Text';
import { Container, View } from './styles';

const HeaderStackNavigation = ({ scene, ...props}) => {
  const themeContext = useContext(ThemeContext).colors;
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options?.headerTitle()
      : options.title !== undefined
      ? utils(options.title)
      : utils(scene.route.name);
  const headerLeft = options?.headerLeft ? options?.headerLeft() : null;
  const headerRight = options?.headerRight ? options?.headerRight() : null;

  // console.log(options.transparent)
  return (
    <Container transparent={options?.transparent}>
      <View>
        {headerLeft}
      </View>
      <View>
        {title}
      </View>
      <View>
      {/* {title} */}
        {headerRight}
      </View>

      {/* <Text text={title} style={{width: 'auto'}} size={32} bold='bold' color={themeContext.secundary}/> */}
    </Container>
  );
}

export default HeaderStackNavigation;

const utils = (title) => <Text text={title} style={{width: 'auto'}} size={16} bold='bold'/>