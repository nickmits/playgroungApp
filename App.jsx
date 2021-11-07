import React from 'react';
import AppNavigator from './components/AppNavigator';

import Scanner from './components/Scanner';
import ErrorBoundary from './components/ErrorBoundary';
import HomeScreen from './components/HomeScreen';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    
    <ErrorBoundary>         
     <AppNavigator>   
     <LoadingScreen /> 
      <HomeScreen />
      <Scanner />
     </AppNavigator>
     </ErrorBoundary>
     
    
  )
}
export default App;