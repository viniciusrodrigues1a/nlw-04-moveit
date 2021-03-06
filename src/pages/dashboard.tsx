import Head from 'next/head';
import { GetServerSideProps } from 'next';

import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import Sidebar from '../components/Sidebar';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import styles from '../styles/pages/Dashboard.module.css';

interface DashboardProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Dashboard({ level, currentExperience, challengesCompleted }: DashboardProps) {
  return (
    <>
      <ChallengesProvider
        level={level}
        currentExperience={currentExperience}
        challengesCompleted={challengesCompleted}
      >

        <div className={styles.container}>
          <Sidebar />

          <div className={styles.content}>
            <Head>
              <title>Início | move.it</title>
            </Head>
            <ExperienceBar />

            <section>
              <CountdownProvider>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </div>

                <div>
                  <ChallengeBox />
                </div>
              </CountdownProvider>
            </section>
          </div>
        </div>
      </ChallengesProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
