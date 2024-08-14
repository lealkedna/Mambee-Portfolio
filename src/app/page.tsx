import Image from "next/image";
import Header from "@/components/header";
import Button from "@/components/button";
export default function Home() {
  return (
    <main >
      <Header/>
      <div className="descrition">
        <div className="conteudo">
        <h2 className="title"> Transformando ideias em soluções</h2>
        <p className="text">Fábrica Escola de Software</p>
        <p className="descrition-title">Ambiente Pratico e inovador para preparar estudantes para o mercado de Software por meio de projetos reais </p>
        <Button/>
        </div>
        <div className="container">
      <Image
      src="/mambee.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />

        </div>
      </div>
    </main>
  );
}
