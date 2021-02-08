import Head from 'next/head';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
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
          placeholder="Seu melhor e-mail"
          type="text"
        />
        <div className={styles.submit}>
          <button>Acessar</button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
