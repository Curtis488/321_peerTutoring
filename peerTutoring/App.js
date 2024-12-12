import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignUp">
          <Stack.Screen 
              name='SignUp' 
              component={SignUp}
              options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen 
              name="Home" 
              component={Home} 
              options={{headerLeft:() => (<MaterialCommunityIcons name="account-outline" size={30} color="black" />),
              headerRight: () => <Ionicons name="notifications-outline" size={24} color="black" />}}/>
        </Stack.Navigator>
      </NavigationContainer> 
  );
}

