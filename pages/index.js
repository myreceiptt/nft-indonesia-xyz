import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Indonesia: Initialization Page!</title>
        <link rel="icon" href="/nft-indonesia-logo.webp" />
        <link rel="apple-touch-icon" href="/nft-indonesia-logo.webp" />
        <link rel="shortcut icon" href="/nft-indonesia-logo.webp" />
        <link rel="canonical" href="https://www.nftindonesia.xyz/" />

        <meta
          name="description"
          content="The init page initializes and controls processes. Its primary role is to start processes based on records read from the NFT Indonesia files. NFT Indonesia files usually requests that the init command run the getty command for each line on which process can log in."
        />
      </Head>

      <main>
        <Analytics/>
        <h1 className={styles.title}>
          <a href="https://www.nftindonesia.xyz" target="_blank">
            NFT Indonesia
          </a>{" "}
          <code>init</code> Page!
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.nftindonesia.xyz/"
            className={styles.card}
            target="_blank"
          >
            <h3>This Page &rarr;</h3>
            <p>An init page contain a link list related to NFT Indonesia.</p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
          >
            <h3>Link #2 &rarr;</h3>
            <p>A link #2 is a link to some where on the Internet.</p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
          >
            <h3>Link #3 &rarr;</h3>
            <p>A link #3 is a link to some where on the Internet.</p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
          >
            <h3>Link #4 &rarr;</h3>
            <p>A link #4 is a link to some where on the Internet.</p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
          >
            <h3>Link #5 &rarr;</h3>
            <p>
              A link #5 is a link to some where on the Internet.</p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
          >
            <h3>Link #6 &rarr;</h3>
            <p>A link #6 is a link to some where on the Internet.</p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
          >
            <h3>Link #7 &rarr;</h3>
            <p>A link #7 is a link to some where on the Internet.</p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
          >
            <h3>Link #8 &rarr;</h3>
            <p>A link #8 is a link to some where on the Internet.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://x.com/NFTindonesia_/status/1446378297516982274"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/nft-indonesia-logo.webp" alt="Logo NFT Indonesia" className={styles.logo} />
          {" "}NFT Indonesia - Since 2021{" "}
          <img src="/nft-indonesia-logo.webp" alt="Logo NFT Indonesia" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Fira Code, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Fira Code, monospace;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
