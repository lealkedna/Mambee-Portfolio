import Image from "next/image";
import Header from "@/compoments/header";
import Button from "@/compoments/button";
export default function Home() {
  return (
    <main >
      <Header/>
      <div className="descrition">
        <h2 className="title"> Transformando ideias em soluções</h2>
        <p className="text">Fábrica Escola de Software</p>
        <p className="descrition-title">Ambiente Pratico e inovador para preparar estudantes para o mercado de Software por meio de projetos reais </p>
        <Button/>
      </div>
    </main>
  );
}
