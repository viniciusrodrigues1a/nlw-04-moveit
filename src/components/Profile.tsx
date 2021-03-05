import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export default function Profile() {

  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/viniciusrodrigues1a.png" alt="Vinícius Rodrigues" />
      <div>
        <strong>Vinícius Rodrigues</strong>
        <p>
          <img src="icons/level.svg" alt="Level 1" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
