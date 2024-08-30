import styles from "@/styles/Processo.module.css";
import Image from "next/image";
export default function Processo() {

    return (
        <div className={styles.containe}>
            <h1 className={styles.textProcess}>Nosso Processo</h1>
            <p className={styles.textParagrafo}>Desenvolvimento Ágil: Inovação, Construção e Avaliação Contínua</p>

            <div className={styles.card}>
                <Image
                    src="/mambee.png"
                    width={450}
                    height={450}
                    alt="teste 1"
                />
                <h3>Inception</h3>
                <p>Fase inicial onde as ideias são formadas</p>
            </div>

            <div className={styles.card}>
                <Image
                    src="/mambee.png"
                    width={450}
                    height={450}
                    alt="teste 1"
                />
                <h3>Projeto</h3>
                <p>Planejamento detalhado</p>
            </div>
            <div className={styles.card}>
                <Image
                    src="/mambee.png"
                    width={450}
                    height={450}
                    alt="teste 1"
                />
                <h3>Implementação</h3>
                <p>Codificar e desenvolver o projeto</p>
            </div>
            <div className={styles.card}>
                <Image
                    src="/mambee.png"
                    width={450}
                    height={450}
                    alt="teste 1"
                />
                <h3>Avaliação</h3>
                <p>Revisão final do trabalho</p>
            </div>

        </div>

    )
}