import Head from "next/head";
//import Link from "next/link"; //importa o link component
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

/**
 * * PARTE 1 criando pagina
 *
 * Em Next.js, uma página(page) é um React Component exportado de um arquivo no pages diretório
 *
 * As páginas são associadas a uma rota com base em seu nome de arquivo.
 *
 * pages/index.js está associado à / rota.
 *
 * * PARTE 2 componente de link
 *
 * Ao criar links entre páginas em sites, você usa a <a> tag HTML.
 *
 * No Next.js, você pode usar o Linkcomponente next/link para vincular as páginas do seu aplicativo. <Link> permite que você faça navegação do lado do cliente e aceita props que lhe dão melhor controle sobre o comportamento de navegação.
 * @returns
 */

//Page Home esta associada a root rota, a rota raiz
export default function Home() {
  return (
    <Layout home>
      {/**
       * metadados de uma página
       * <Head> é um React Component que está embutido no Next.js. Ele permite que você modifique o <head> de uma página.
       */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I´m Samuel. I´m a Front End Developer. Who loves coding UI, learning new subjects
          and riding MTB.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/*<main>
        
         * No Next.js, você pode usar o Link componente next/link para vincular as páginas do seu aplicativo. <Link> permite que você faça navegação do lado do cliente e aceita props que lhe dão melhor controle sobre o comportamento de navegação.
         
        <h1 className={styles.title}>
          Read <Link href="/posts/first-post">this page!</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
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
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
      </Layout>*/}
    </Layout>
  );
}
