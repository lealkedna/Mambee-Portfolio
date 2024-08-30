import Image from "next/image";
import Header from "@/components/header";
import Button from "@/components/button";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="principal">
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
      width={450}
      height={450}
      alt="Picture of the author"
    />

        </div>
      </div>
      <section className="parceiros">
  <h2 className="title">Nossos Parceiros</h2>
  <div className="parceiros-grid">
    <div className="parceiro-item">
      <Image
        src="/virtex.png"
        width={200}
        height={30}
        alt="Parceiro 1"
      />
    </div>
    <div className="parceiro-item">
      <Image
        src="/ibict.png"
        width={300}
        height={100}
        alt="Parceiro 2"
      />
    </div>
    <div className="parceiro-item">
      <Image
        src="/mb ls.jpeg"
        width={200}
        height={100}
        alt="Parceiro 3"
      />
    </div>
    <div className="parceiro-item">
      <Image
        src="/pete.png"
        width={200}
        height={100}
        alt="Parceiro 4"
      />
    </div>
  </div>
</section>
    <footer>
      <Footer/>
    </footer>
    </main> 
   
  );
}