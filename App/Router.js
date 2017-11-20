import { StackNavigator } from 'react-navigation';
import Login from './Containers/Login';
import Home from './Containers/Home';

const RootNavigator = StackNavigator({
    Login: { screen: Login },
    Home: { screen: Home }
});

export default RootNavigator;