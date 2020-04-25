import React from 'react'; 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen'; 
import { BlogProvider } from './src/context/BlogContext'; 
import ShowScreen from './src/screens/ShowScreen'; 
import CreateScreen from './src/screens/CreateScreen'; 
import EditScreen from './src/screens/EditScreen'; 


const navigator = createStackNavigator({
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
}, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
        title: 'Blog List'
    }
});

const App = createAppContainer(navigator); 
export default () => {
    return <BlogProvider>
        <App/>
        </BlogProvider>
}

//We are going to be using something called a provider component to wrap the entire application
// including the react component. It is going to be responsible for managing all the data. It 
//allows us to centralize all of our data in one place. Then if any component or child needs
//access to that data, it will be able to get direct access from the provider. Provider can
//also pass callbacks to children to delete or do other things. This is called global state
//management

//Instead of props (which we have to write alot of code for to communicate data down
//multiple layers), context allows us to communicate information from a parent directly to child.
//It is more complicated to set up with lots of special terms but is easy to communicate data
//from parent to suppper nested child. We set up context insisde of provider