import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyList from './MyList';
import Home from '../screens/Home';

const Tab = createMaterialTopTabNavigator();

export default function NavigationScreens() {
  return (
    <Tab.Navigator
      tabBarPosition='bottom'
      initialRouteName='Home'
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyList" component={MyList} />
    </Tab.Navigator>
  );
}