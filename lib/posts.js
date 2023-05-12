import fs from "fs"; //modulo node.js que permite ler arquivos do file system
import path from "path"; //modulo node.js que permite manipular caminhos de arquivos
import matter from "gray-matter"; //lib que permite analisar os metadados em cada arquivo markdown
import { remark } from "remark"; //renderizar o conteudo(body) do post marckdow usaremos esta biblioteca
import html from "remark-html";

/**
 * * Criando a função utilitária para ler o sistema de arquivos
 *
 * criaremos uma função utilitária para analisar dados do sistema de arquivos. Com esta função utilitária, gostaríamos de:
 *
 * Analise cada arquivo markdown e obtenha title, date e o nome do arquivo (que será usado como id para o URL da postagem).
 *
 * Liste os dados na página de índex, classificados por data.
 */

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  //Obter nomes de arquivos em /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    //Remova ".md" do nome do arquivo para obter o id
    const id = fileName.replace(/\.md$/, "");

    //Leia o arquivo markdown como string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //Use gray-matter para analisar a seção de metadados da postagem
    const matterResult = matter(fileContents);

    //Combine os dados com o id
    return {
      id,
      ...matterResult.data,
    };
  });

  //Classificar postagens por data
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * esta function retornar a lista de nomes de arquivos exluindo .md
 *
 * Importante : A lista retornada não é apenas um array de strings — deve ser um array de objetos parecidos com o comentário acima. Cada objeto deve ter a params chave e conter um objeto com a id chave (pois estamos usando [id]no nome do arquivo). Caso contrário, getStaticPaths falhará.
 * @returns
 */
export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

/**
 * retornará os dados da postagem com base em id
 */
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  //Use gray-matter para analisar a seção de metadados da postagem
  const matterResult = matter(fileContents);

  //Use a remark para converter markdown em string HTML
  //buscamos dados de forma assincrona
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  //combina os dados com id and conteudo html
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
