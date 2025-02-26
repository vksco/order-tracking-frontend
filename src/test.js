import React, { useContext } from 'react';
    import { NotificationContext } from './NotificationContext';

    function MyComponent() {
      const { addNotification } = useContext(NotificationContext);

      const handleClick = () => {
        addNotification('Button pressed!!!!!!!!');
      };

      return (
        <div>
          <button onClick={handleClick}>Press this button from login</button>
        </div>
      );
    }

    export default MyComponent;