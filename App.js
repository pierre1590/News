import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TopNews } from './screens/TopNews';
import {Economics } from './screens/Economics';
import {Search } from './screens/Search';
import {Entertainment } from './screens/Entertainment';
import{Sport} from './screens/Sport';
import {Ionicons} from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
  <StatusBar style="light" />
    <NavigationContainer>
    
      <Tab.Navigator initialRouteName="TopNews"
      screenOptions={{
        tabBarActiveTintColor: '#00f',
        tabBarInactiveTintColor: '#001',
        tabBarStyle: {
          backgroundColor: '#ccc',
          height: 55,
        },
        tabBarActiveBackgroundColor: '#fff',
        tabBarInactiveBackgroundColor: '#ccc',
        
        tabBarLabelStyle: {
          fontSize: 13,
          marginBottom: 10,
        },
        marginBottom: 15,
        headerStyle: {backgroundColor: 'grey'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontSize: 22,fontWeight: 'bold'},
        
        
      }}
      >
        <Tab.Screen name="TopNews" component={TopNews}
        options={{
          title: 'Top News',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="newspaper" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Economics" component={Economics}
        options={{
          title: 'Economics',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cash" color={color} size={size} />
          ),
        }}
        />
       
        <Tab.Screen name="Search" component={Search}
        options={{
          title: 'Search',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search" color={color} size={size} />
          ),
         
        }}
        />
        <Tab.Screen name="Entertainment" component={Entertainment}
        options={{
          title: 'Entertainment',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="book" color={color} size={size} />
          ),
        }}
        />
         <Tab.Screen name="Sport" component={Sport}
        options={{
          title: 'Sport',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="football" color={color} size={size} />
          ),
        }}
        />
       
      </Tab.Navigator>
    </NavigationContainer>
    
    </>
  );
}
      
     

