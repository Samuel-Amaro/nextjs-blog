import Link from "next/link"; //importa o link component embutido do next
import Head from "next/head"; //importa um Head componente embutido do next
import Script from "next/script"; //importa um Script componente embutido do next
import Layout from "../../components/layout";

/**
 * Em Next.js, uma página(page) é um React Component exportado de um arquivo no pages diretório
 *
 * As páginas são associadas a uma rota com base em seu nome de arquivo.
 *
 * pages/index.js está associado à / rota.
 *
 * pages/posts/first-post.js está associado à /posts/first-post rota.
 *
 * O componente pode ter qualquer nome, mas você deve exportá-lo como uma default exportação.
 *
 * Simplesmente crie um arquivo JS no pages diretório, e o caminho para o arquivo se tornará o caminho da URL.
 * @returns
 */

//FirstPost Componente e uma pagina, sua rota e pages/posts/first-post e /posts/first-post
export default function FirstPost() {
  return (
    <Layout>
      {/**
       * metadados de uma página
       * <Head> é um React Component que está embutido no Next.js. Ele permite que você modifique o <head> de uma página.
       * add Head componente a page fist-post
       */}
      <Head>
        {/**add a title tag */}
        <title>First Post</title>
      </Head>
      {/**
       * como podemos adicionar um script de terceiros a uma página Next.js. mostrar como adicionar scripts de terceiros ao seu aplicativo de maneira eficiente. usando o componente embutido do next Script
       *
       * Observe que algumas propriedades adicionais foram definidas no componente Script:
       *
       * strategy controla quando o script de terceiros deve carregar. Um valor de lazyOnload diz ao Next.js para carregar este script específico lentamente durante o tempo ocioso do navegador
       * onLoad é usado para executar qualquer código JavaScript imediatamente após o carregamento do script. Neste exemplo, registramos uma mensagem no console que menciona que o script foi carregado corretamente
       
       <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
       */}
      <h1>First Post</h1>
      <h2>
        {/**
         * No Next.js, você pode usar o Linkcomponente next/linkpara vincular as páginas do seu aplicativo. <Link>permite que você faça navegação do lado do cliente e aceita props que lhe dão melhor controle sobre o comportamento de navegação.
         */}
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
