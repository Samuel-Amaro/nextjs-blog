import Date from "../../components/date"; //componente que formata data
import Layout from "../../components/layout";
import { getAllPostsIds, getPostData } from "../../lib/posts";
import Head from "next/head"; //componente embutido do next para metadados da pagina
import utilStyles from "../../styles/utils.module.css"; //estilos dos utils

/**
 * páginas que começam com [ e terminam com ] são rotas dinamicas em Next.js
 *
 */

/**
 * esta function renderiza a page Post com pre-renderização com metodo geração estatica com dados usando getStaticProps
 *
 * é executado em tempo de compilação na produção e…, pre-renderiza a pagina no momento da compilação, o HTML da pagina e gerado no mommento da compilação
 *
 * Dentro da função, você pode buscar dados externos e enviá-los como props para a página.
 *
 * getStaticProps só pode ser exportado de uma página . Você não pode exportá-lo de arquivos que não sejam de página.
 *
 * Uma das razões para essa restrição é que o React precisa ter todos os dados necessários antes que a página seja renderizada.
 *
 * ira buscar os dados necessarios para a postagem do blog com um determinado id
 *
 * e fornecido um params que contem o id
 * @returns
 */
export async function getStaticProps({ params }) {
  //buscando dados externos de db, api, file system, etc... para envia-los como props para a página

  //obtem dados de forma assincrona de uma postagem por meio de seu id e retorna como props para componente Post renderizar postagem
  const postData = await getPostData(params.id);
  //Ao retornar postData para dentro do props objeto em getStaticProps, os dados da postagem do blog serão passadas para o Post componente como um prop
  return {
    props: {
      postData,
    },
  };
}

/**
 * function assincrona chamada getStaticPaths
 *
 * @returns
 */
export async function getStaticPaths() {
  //paths contém a matriz de caminhos conhecidos retornados por getAllPostIds(), que incluem os parâmetros definidos por pages/posts/[id].js
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

/**
 * Em Next.js, uma página(page) é um React Component exportado de um arquivo no pages diretório
 *
 * As páginas são associadas a uma rota com base em seu nome de arquivo.
 *
 * [id] está associado à uma rota dinamica em next, como /pages/posts/id rota.
 *
 * O componente pode ter qualquer nome, mas você deve exportá-lo como uma default exportação.
 *
 * Simplesmente crie um arquivo JS no pages diretório, e o caminho para o arquivo se tornará o caminho da URL.
 *
 * esta página ira renderizar uma pagina de postagem
 *
 * lemos a prop PostsData para ler os dados necessarios para renderizamos a page Post
 * @returns
 */
export default function Post({ postData }) {
  return (
    <Layout>
      {/**
       * metadados de uma página
       * <Head> é um React Component que está embutido no Next.js. Ele permite que você modifique o <head> de uma página.
       */}
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {/*renderizar contentHtml usando dangerouslySetInnerHTML*/}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
