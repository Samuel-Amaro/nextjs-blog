import fs from "fs"; //modulo node.js que permite ler arquivos do file system
import path from "path"; //modulo node.js que permite manipular caminhos de arquivos
import matter from "gray-matter"; //lib que permite analisar os metadados em cada arquivo markdown

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
