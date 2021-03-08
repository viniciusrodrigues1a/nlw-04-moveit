import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface UserContextData {
  username: string;
}

interface UserContextProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData)

export function UserProvider({ 
  children,
  ...rest
}: UserContextProps) {
  const [username, setUsername] = useState(rest.username ?? "");

  useEffect(() => {
    setUsername(Cookies.get('username'));
  }, []);

  useEffect(() => {
    if (username) {
      Cookies.set('username', username, {sameSite: 'LaX'});
    }
  }, [username]);

  function login(githubUser) {
    setUsername(githubUser);
  }

  return (
    <UserContext.Provider value={{ username, login }}>
      {children}
    </UserContext.Provider>
  )
}
