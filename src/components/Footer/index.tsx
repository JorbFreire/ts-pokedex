import styles from './styles.module.css';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.container}>
      <p>Icons made by&nbsp;</p>
      <a
        href="https://www.flaticon.com/authors/roundicons-freebies"
        title="Roundicons Freebies"
      >
        Roundicons Freebies&nbsp;
      </a>
      <p>from&nbsp;</p>
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </footer>
  );
}
