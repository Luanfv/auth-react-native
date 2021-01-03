import React, { 
  createContext, 
  useContext, 
  useState, 
  useCallback, 
  useEffect 
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const user = JSON.parse(await AsyncStorage.getItem('@app:user'));

      if (user)
        setData(user);
          
      setIsLoading(false);
    }

    loadStoragedData();
  }, [setIsLoading]);

  const signIn = useCallback((formRef) => {
    try {
      const { email, password } = formRef.current.getData();

      // FAKE AUTHENTICATION
      const user = { 
        id: 1,
        name: 'Luan',
        email: email,
      };

      setTimeout(async () => {
        await AsyncStorage.setItem('@app:user', JSON.stringify(user));
        setData(user);
      }, 2500);

      return false;
    }
    catch (err) {
      const message = 'Falha de autenticação do usuário!';

      return message;
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@app:user');
    setData({});
  }, [data]);

  const updatePassword = useCallback(async ({ email, password }) => {
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user: data,
      signIn, 
      signOut,
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) 
    throw new Error('useAuth must be used within an AuthProvider');
  

  return context;
}
