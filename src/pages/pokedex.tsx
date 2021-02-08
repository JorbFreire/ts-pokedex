import Head from 'next/head';
import styles from '../styles/Pokedex.module.css';

export default function Pokedex(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/pokeball.svg" />
      </Head>

      <aside className={styles.pokemonList}>
        <h1> List </h1>
      </aside>
      <main className={styles.pokemon}>
        <h1> Poke </h1>
      </main>
    </div>
  );
}
