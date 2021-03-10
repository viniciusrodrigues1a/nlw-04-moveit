import { createContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

interface UserContextData {
  username: string;
  login: (githubUser: string) => void;
}

interface UserContextProps {
  children: ReactNode;
  username: string;
}

export const UserContext = createContext({} as UserContextData)

export function UserProvider({ 
  children,
  ...rest
}: UserContextProps) {
  const [username, setUsername] = useState(rest.username ?? "");
  const router = useRouter();

  useEffect(() => {
    const usernameCookie = Cookies.get('username');

    setUsername(usernameCookie);

    if (usernameCookie) {
      redirectTo('/dashboard');
    } else {
      redirectTo('/');
    }
  }, []);

  function redirectTo(to: string) {
    router.push(to);
  }

  useEffect(() => {
    if (username) {
      Cookies.set('username', username, { sameSite: 'strict' });
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
