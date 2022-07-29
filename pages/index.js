import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navigation from "../src/components/Navigation";
import Menu from "../src/components/Menu";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SkillEx</title>
        <meta name="description" content="SkillEx " />
        <link rel="icon" href="/LightBulbFAVICON.ico" />
      </Head>

      <Navigation />
      <Footer />
    </div>
  );
}
