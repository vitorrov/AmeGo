import * as React from 'react';
import PropTypes from 'prop-types';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import RoutesBottomTabs from './BottomTabs.routes';
import Home from './Home.routes';

import Main from './Main';
import Header from './Header';
import { FooterContainer, HeaderContainer } from './styles';
const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      drawerContentOptions={{
        itemStyle: { marginRight: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0 },
      }}
      drawerContent={props => <DrawerContent header={<Header />} main={<Main />} {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      {/* <Drawer.Screen name="Home" component={RoutesBottomTabs} /> */}
      {/* <Drawer.Screen name="LogOut" component={View} /> */}
    </Drawer.Navigator>
  );
}

const DrawerContent = ({ header, main, footer, progress,...props }) => (
  <>
    <DrawerContentScrollView {...props}>
      { header && <HeaderContainer>{header}</HeaderContainer>}
      
      {main}

      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Help"
        onPress={() => Linking.openUrl('https://mywebsite.com/help')}
      /> */}
    </DrawerContentScrollView>

    { footer && <FooterContainer>{footer}</FooterContainer>}
  </>
);

DrawerContent.propTypes = {
  header: PropTypes.element,
  footer: PropTypes.element
};