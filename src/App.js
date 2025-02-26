import React from 'react';
    import { NotificationProvider } from './NotificationContext';
    import MyComponent from './test';
    import NotificationDisplay from './Display';

    function App() {
      return (
        <NotificationProvider>
          <MyComponent />
          <NotificationDisplay />
        </NotificationProvider>
      );
    }

    export default App;
