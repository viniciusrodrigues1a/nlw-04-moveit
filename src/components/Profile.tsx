import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  const { level } = useContext(ChallengesContext);
  const { username } = useContext(UserContext);

  return (
    <div className={styles.profileContainer}>
      <img 
        src={`https://github.com/${username}.png`} 
        alt={username} 
        onError={e => (e.target as HTMLImageElement).src = "user.svg"}
      />
      <div>
        <strong>{username}</strong>
        <p>
          <img src="icons/level.svg" alt="Level 1" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
