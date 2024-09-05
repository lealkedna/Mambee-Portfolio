import Image from "next/image"
import styles from "@/styles/Destaques.module.css"
interface novoDestaqueProps {
    image : string,
    desc : string,
    link: string
}

export default function CardDestaques({image, desc, link} : novoDestaqueProps){
    return (
        <div className={styles.card}>
            <Image className={styles.image_card}
                src={image}
                width={200}
                height={100}
                alt="imagem da noticia"
            />
            <div className={styles.card_content}>
                <p><strong>{desc}</strong></p>
                <a href={link}>Leia mais</a>
            </div>
        </div>
    )
}