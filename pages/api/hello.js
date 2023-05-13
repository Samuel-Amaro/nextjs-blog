/**
 * Rotas de API permitem criar um endpoint de API dentro de um aplicativo Next.js. 
 * 
 * Eles podem ser implantados como Serverless Functions (Lambdas)
*/

// req = mensagem de entrada HTTP, res = resposta do servidor HTTP
export default function handle(req, res) {
  res.status(200).json({ text: "Hello" });
}
