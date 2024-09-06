import Image from "next/image";
import Header from "@/components/header";
import Processo from "@/components/Processo";
import Button from "@/components/button";
import Footer from "@/components/Footer";
import Parceiros from "@/components/Parceiros";
import Chamamento from "@/components/chamamento";
import Destaques from "@/components/Destaques";
export default function Home() {
  return (
    <main className="principal">
      <Header />
      <div className="descrition">
        <div className="conteudo">
          <h2 className="title"> Transformando ideias em soluções</h2>
          <p className="text">Fábrica Escola de Software</p>
          <p className="descrition-title">Ambiente Pratico e inovador para preparar estudantes para o mercado de Software por meio de projetos reais </p>
          <Button />
        </div>
        <div className="container">
          <Image
            src="/mambee.png"
            width={450}
            height={450}
            alt="Picture of the author"
          />

        </div>
      </div>
      <Processo/>
      <Chamamento/>
      <Parceiros/>
      <Destaques/>
    <footer>
      <Footer/>
    </footer>
    </main> 
  );
}