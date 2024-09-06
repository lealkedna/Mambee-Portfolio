import Image from "next/image"
import styles from "@/styles/Destaques.module.css"
interface novoDestaqueProps {
    image: string,
    desc: string,
    link: string
}

export default function CardDestaques({ image, desc, link }: novoDestaqueProps) {
    return (
        <div className={styles.card}>
            <Image className={styles.image_card}
                src={image}
                width={200}
                height={100}
                alt="imagem da noticia"
            />
            <p className={styles.desc}>{desc}</p>
            <a href={link} className={styles.link}>Leia mais</a>
        </div>
    )
}