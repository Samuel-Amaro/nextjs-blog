import Link from "next/link"; //importa o link component

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
 * Simplesmente crie um arquivo JS no pages diretório , e o caminho para o arquivo se tornará o caminho da URL.
 * @returns
 */

//FirstPost Componente e uma pagina, sua rota e pages/posts/first-post e /posts/first-post
export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        {/**
         * No Next.js, você pode usar o Linkcomponente next/linkpara vincular as páginas do seu aplicativo. <Link>permite que você faça navegação do lado do cliente e aceita props que lhe dão melhor controle sobre o comportamento de navegação.
         */}
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
