import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../contexts/UserContext';

import Redirect from '../components/Redirect';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  const { login, username } = useContext(UserContext);
  const [user, setUser] = useState("");

  return (
    <>
      { username && <Redirect to="/dashboard" /> }

      <div className={styles.container}>
        <img src="login-background.svg" alt="Move.it" />
          <div className={styles.loginContent}>
            <img src="logo.svg" alt="Move.it" />

            <h1>Bem-vindo</h1>

            <div className={styles.loginDescriptionContainer}>
              <img src="github.svg" alt="Github" />
              <span>
                Faça login com seu Github para começar
              </span>
            </div>

            <div className={styles.loginInputContainer}>
              <input 
                placeholder="Digite seu username"
                value={user}
                onChange={e => setUser(e.target.value)}
              />
              <button 
                type="button" 
                onClick={() => login(user)}
                className={user && styles.loginButtonActive}
              >
                <img src="arrow-right.svg" alt="Entrar" />
              </button>
          </div>
        </div>
      </div>
    </>
  )
}
