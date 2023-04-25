import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Landing from '../screens/landing';
import Register from '../screens/Register';
import Add from '../screens/Add';
import Electricity from '../screens/electricity';
import Transport from '../screens/transport';
import Link_WS from '../screens/link_ws';
import Link_TS from '../screens/link_transport';
import New from '../screens/Add_Cat';

const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Landing:{screen:Landing},
    Add:{screen:Add},
    Register:{screen:Register},
    Electricity:{screen:Electricity},
    Transport:{screen:Transport},
    Link_WS:{screen:Link_WS},
    Link_TS:{screen:Link_TS},
    New:{screen:New},
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);