import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  AddContact,
  DetailContact,
  EditContact,
  Home,
  SplashScreen,
} from '../pages';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const MainApp = () => {
//   return (
//     <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Order" component={Order} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// };

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddContact"
        component={AddContact}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailContact"
        component={DetailContact}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditContact"
        component={EditContact}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
