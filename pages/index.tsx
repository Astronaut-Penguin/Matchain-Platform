import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Header,
  HomeSection,
  Midpage,
  Education,
  Roadmap,
  About,
  Team,
  Footer,
} from "../components";

import styles from "../styles/Home.module.css";
import "@egjs/react-flicking/dist/flicking.css";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matchain Platform</title>
        <meta name="description" content="The educational platform for TON" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <HomeSection />
        <Midpage />
      </main>

      {/*
      <footer>
         <Footer/>
      </footer>
    */}
    </div>
  );
};

export default Home;
