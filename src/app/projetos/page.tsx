import Header from "@/components/header";

import styles from "@/styles/Projeto.module.css"

export default function projetos() {
  return (
    <div >
      <Header />

      <div className={styles.agrupar} >

        <div className={styles.text}>
          <h2>Mambee Live Cast</h2>
          <p> 
          O Mambee LiveCast foi uma live semanal, transmitida às quintas-feiras, às 19h, no YouTube, criada pela Fábrica Escola de Software Mambee do IFPI Campus Picos. O programa discutia temas sobre Tecnologia e Inovação com entrevistas e interação dos estudantes. A iniciativa surgiu durante a pandemia para manter o engajamento dos alunos e chegou a contar com mais de 15 episódios e 2000 visualizações.  </p>
        </div>

        <div className={styles.video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2YRPs7umqg0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    
    </div>
 
  )
};