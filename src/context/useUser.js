import { createContext, useContext, useState, useEffect } from 'react';
import { check_authenticated } from '../helpers/index'
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);

    useEffect(() => {
        const is_aitheticated = check_authenticated()
        if(!is_aitheticated){
            navigate('/auth/login')
        }

        const user = localStorage.getItem('user')
        if(user){
          setUser(JSON.parse(user))
        }
    }, [])

  const value = {
    user,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};