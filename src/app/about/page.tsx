
export default async function AboutPage() {
  
  return (
    <div className="container mx-auto p-4 min-">
      <h1 className="text-3xl font-bold mb-6 text-center">Sobre o nosso blog</h1>
      <h2 className="text-3xl font-bold mb-2">Criando uma aplicação Next.js</h2>
      <p>Informações do desafio</p>
      <p>Neste desafio você precisa criar uma aplicação Next.js com uma página que liste os posts do endereço https://jsonplaceholder.typicode.com/posts.</p>
      <p>A estilização precisa ser feita com o TailwindCSS, utilize sua criatividade para listar os posts de maneira elegante. Na listagem deve ter apenas o título do post.</p>
      <p>Ao clicar em um item da listagem precisamos ser redirecionado para uma página que mostre o título e o conteúdo do post escolha.</p>
      <p>Disponibilize a aplicação em um repositório Git que permita-se roda-la em http://localhost:3000/ ao fazer os comandos npm install e npm run dev</p>
    </div>
  );
}