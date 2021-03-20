import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  const { login } = useContext(UserContext);
  const [user, setUser] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    login(user);
  }

  function handleDemoLogin() {
    login("Demo user");
  }

  return (
    <>
      <div className={styles.container}>
        <img src="icons/login-background.svg" alt="Move.it" />
          <div className={styles.loginContent}>
            <img src="icons/logo.svg" alt="Move.it" />

            <h1>Bem-vindo</h1>

            <div className={styles.loginDescriptionContainer}>
              <img src="icons/github.svg" alt="Github" />
              <span>
                Faça login com seu Github para começar
              </span>
            </div>

            <form className={styles.loginForm} onSubmit={handleLogin}>
              <input 
                placeholder="Digite seu username"
                value={user}
                onChange={e => setUser(e.target.value)}
              />
              <button 
                type="submit"
                className={user && styles.loginButtonActive}
              >
                <img src="icons/arrow-right.svg" alt="Entrar" />
              </button>
          </form>

          <button 
            type="button"
            className={styles.demoLoginButton}
            onClick={handleDemoLogin}
          >
            Demo user
          </button>
        </div>
      </div>
    </>
  )
}
