import React from 'react';
import {NavigationContainer,DefaultTheme} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import { Icon } from 'react-native-elements';
import {  Home,
          ItemDetail,
          Profile,
          Cart
} from "./screens";


const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:"transparent",
  }
};

const Drawer = createDrawerNavigator();

const App = () => {
  return (

    <NavigationContainer theme={theme}>
      
    <Drawer.Navigator
        screenOptions={{
            headerShown:false
        }}
        initialRouteName={'Home'}
    >
      
        <Drawer.Screen name="Home" component={Home}
          options={{
            drawerIcon: ({}) => (
              <Icon
                name='home-sharp'
                type='ionicon'
              />
            )
          }}
        />
        <Drawer.Screen name="Profile" component={Profile}
          options={{
            drawerIcon: ({}) => (
              <Icon
                name='person-circle-sharp'
                type='ionicon'
              />
            )
          }}
        />
        <Drawer.Screen name="Cart" component={Cart}
          options={{
            drawerIcon: ({}) => (
              <Icon
                name='cart-sharp'
                type='ionicon'
              />
            )
          }}
        />
        <Drawer.Screen name="ItemDetail" component={ItemDetail}
          options={{
            drawerIcon: ({}) => (
              <Icon
                name='pricetags-sharp'
                type='ionicon'
              />
            )
          }}
        />
    </Drawer.Navigator>
   
  </NavigationContainer>
  )
}

export default () =>{
  return <App/>;
}
