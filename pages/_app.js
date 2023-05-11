import "../styles/global.css"; //importa o arquivo CSS dentro do pages/_app.js, e um css global afeta todas paginas, esse estilo serão aplicados globalmnete a todas as páginas do aplicativo
//add um css global

/**
 * é um componente React de nível superior que agrupa todas as páginas em seu aplicativo. Você pode usar este componente para manter o estado ao navegar entre as páginas ou para adicionar estilos globais como estamos fazendo aqui.
 *
 * @param {*} param0
 * @returns
 */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
