import Head from "next/head";
//import Link from "next/link"; //importa o link component
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link"; //componente  embutido do next para Link
import Date from "../components/date"; //componente formatador de Data
import { GetStaticProps } from "next";

/**
 * * PARTE 3 USANDO GERAÇÃO ESTATICA (getStaticProps)
 *
 * esta function renderiza a page Homr com pre-renderização com metodo geração estatica com dados usando getStaticProps
 *
 * é executado em tempo de compilação na produção e…, pre-renderiza a pagina no momento da compilação, o HTML da pagina e gerado no mommento da compilação
 *
 * Dentro da função, você pode buscar dados externos e enviá-los como props para a página.
 *
 * getStaticProps só pode ser exportado de uma página . Você não pode exportá-lo de arquivos que não sejam de página.
 *
 * Uma das razões para essa restrição é que o React precisa ter todos os dados necessários antes que a página seja renderizada.
 * @returns
 */

export const getStaticProps: GetStaticProps = async () => {
  //buscando dados externos de db, api, file system, etc... para envia-los como props para a página

  const allPostsData = getSortedPostsData();
  //Ao retornar allPostsData para dentro do props objeto em getStaticProps, as postagens do blog serão passadas para o Home componente como um prop
  return {
    props: {
      allPostsData,
    },
  };
};

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
 * @returns
 */

//parte1: Page Home esta associada a root rota, a rota raiz, pagina inicial,
//parte3: lemos a prop allPostsData para ler os dados necessarios para renderizamos a page Home
export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
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
          Hello, I´m Samuel. I´m a Front End Developer. Who loves coding UI,
          learning new subjects and riding MTB.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/**parte3: ler os dados de cada postagem */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {/**No Next.js, você pode usar o Link componente next/link para vincular as páginas do seu aplicativo. <Link> permite que você faça navegação do lado do cliente e aceita props que lhe dão melhor controle sobre o comportamento de navegação.*/}
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
