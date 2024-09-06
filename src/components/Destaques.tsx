import CardDestaques from "./CardDestaques";
import styles from "@/styles/Destaques.module.css"
export default function Card(){
    const noticias  = [
        {
            image: '/images/jornal-elpais.jpg',
            desc: 'Las caras del éxito del programa brasileño contra la probreza',
            link: 'https://elpais.com/america/2024-09-01/gracias-a-bolsa-familia-menos-hijos-heredan-la-miseria-en-brasil.html'
        },
        {
            image: '/images/jader.png',
            desc: 'Professor de Picos lança  livro sobre Gameficação no SALIPI',
            link: 'https://www.ifpi.edu.br/picos/noticias/professor-de-picos-lanca-livro-sobre-gameficacao-no-salipi'
        },
        {
            image: '/images/livro.png',
            desc: 'Lançamento do e-book Aprenda Programar com JavaScript',
            link: 'https://medium.com/@jesielviana/aprenda-programar-com-javascript-4316228b695d'
        },
        {
            image: '/images/imagemmam.jpeg',
            desc: 'Do CESAR para Picos: professores desenvolvem laboratório de referência no Piauí',
            link: 'https://www.cesar.school/do-cesar-para-picos-professores-desenvolvem-laboratorio-de-referencia-no-piaui/'
        }
    ];

    

    return (
        <div className={styles.card_style}>
            <h2 className={styles.title}>Destaques</h2>
            <div className={styles.noticia}>
            {
                noticias.map((noticia, index)=>( 
                    <CardDestaques 
                        key={index}
                        image={noticia.image}
                        desc={noticia.desc}
                        link={noticia.link}/>
                ))
            }
            </div>
        </div>

    );
}


