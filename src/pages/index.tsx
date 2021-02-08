import { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer/index';
import styles from '../styles/Home.module.css';

export default function Home(): JSX.Element {
  const [email, setEmail] = useState<string>();
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex - Login</title>
        <link rel="icon" href="/pokeball.svg" />
      </Head>

      <header className={styles.header}>
        <img
          className={styles.titlePokeball}
          src="/pokeball.svg"
          alt="pokeball"
        />
        <h1>POKEDEX </h1>
      </header>

      <main className={styles.main}>
        <img
          className={styles.bodyPokeball}
          src="/pokeball.svg"
          alt="pokeball"
        />
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Seu melhor e-mail"
        />
        <div className={styles.submit}>
          <button type="button">Acessar</button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
