import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

async function fetchData(queryInput) {

    const url = `http://api.wolframalpha.com/v1/result?appid=7TX64H-P32AW25LLY&i=${queryInput}`;

    const response = await fetch(url);
    addReply(`${response}`);
  }

export default function Home() {
  const [reply, addReply] = useState(null);
  const [query, updateQuery] = useState(null);


  function handleChange(e) {
    updateQuery(e.target.value);
    console.log(query);
  }

  function handleClick(e) {
    e.preventDefault;
    fetchData(query)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>A Wee Morrigan Knowledge Box</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>I am a wee Morrigan Knowledge Box</h1>

        <p className={styles.description}>ask me something....</p>

        <div className={styles.grid}>
          <form onSubmit={() => fetchData(query)}>
            <label>
              ---->
              <input type="text" onChange={handleChange} />{" "}
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

{
  (reply !== null) &&
  <h3>{reply}</h3>
}
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
