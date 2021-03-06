import {ExperienceBar} from "../components/ExperienceBar";
import {Profile} from "../components/Profile";
import styles from "../styles/pages/Home.module.css";
import {CompleteChallenges} from "../components/CompletedChallenges";
import {Countdown} from "../components/Countdown";

import Head from "next/head";

export default function Home() {
  return (
      <div>
      <div className={styles.container}>
          <Head>
              <title>Início | move.it</title>
          </Head>
        <ExperienceBar />
        <section>
            <div>
                <Profile />
                <CompleteChallenges />
                <Countdown />
            </div>
            <div>

            </div>
        </section>
      </div>
      </div>
  )
}
