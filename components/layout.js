import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css"; //para usar as declarações css declaradas no arquivo css, dentro deste componente temos que importar o arquivo CSS e atribuir um nome a ele
//Usamos CSS Modules que permite importar aquivos CSS em um componente React
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Samuel Amaro";
export const siteTitle = "Next.js Sample Website";

/**
 * Componente de layout
 *
 * vamos criar um componente Layout que será compartilhado em todas as páginas.
 *
 * @param {*} param0
 * @returns
 */
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/*metadados da pagina*/}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/*metatags usada para descrever conteudo de uma pagina*/}
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
