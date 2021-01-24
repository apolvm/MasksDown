/** Author: AnaPatricia Olvera */
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'; 
import Home from '../screens/home';
import Cloth from '../screens/cloth';
import Surgical from '../screens/surgical';
import N95 from '../screens/n95'

const screens={
    Home: {
        screen: Home,
        navigationOptions:{
            title: 'MasksDown',
            headerStyle: { backgroundColor: '#eddcd2'}
        }
    },
    Cloth:{
        screen: Cloth,
        navigationOptions:{
            title: 'Cloth Mask',
            headerStyle: { backgroundColor: '#fff1e6'}
        }
    },
    Surgical:{
        screen: Surgical,
        navigationOptions:{
            title: 'Surgical Mask',
            headerStyle: { backgroundColor: '#fff1e6'}
        }
    },
    N95:{
        screen: N95,
        navigationOptions:{
            title: 'N95 Mask',
            headerStyle: { backgroundColor: '#fff1e6'}
        }
    }
}
const HomeStack= createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {height: 60},
        headerTintColor: '#cb997e'
    }
});

export default createAppContainer(HomeStack);
