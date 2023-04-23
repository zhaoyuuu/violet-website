import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Violet Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://zhaoyuuu.github.io/violet-design/">Violet-design!</a>
        </h1>
        <div className={styles.logo}>
          <Image
            src="/violet-logo.svg"
            width={144}
            height={144}
            alt="violet-logo"
          />
        </div>
      </main>

    </div>
  )
}
