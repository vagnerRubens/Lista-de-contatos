import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailsPage from './src/pages/PeopleDetailsPage'
import { createStackNavigator } from '@react-navigation/stack';


//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function App() {
  return (  
    <View style={styles.container}>
        <NavigationContainer >
          <Stack.Navigator initialRouteName="PeoplePage">
            <Stack.Screen name="Lista de Pessoas" component={PeoplePage} />
            <Stack.Screen name="Detalhe da Pessoa" component={PeopleDetailsPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default App;
