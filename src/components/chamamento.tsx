import Image from "next/image";
import Button from "@/components/button";
import style from "@/styles/Chamamento.module.css";

export default function Chamamento() {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>Quer ser nosso Parceiro?</h1>
                <h2>Junte-se a nós e transforme alunos em <br />profissionais produtivos e protagonistas.</h2>
            </div>
            <div className={style.features}>
                <div className={style.feature}>
                    <Image
                        src="/images/um.png"
                        width={34}
                        height={34}
                        alt="icon 1"
                    />
                    <p><strong>Ambiente propício</strong></p>
                </div>
                <div className={style.feature}>
                    <Image
                        src="/images/dois.png"
                        width={34}
                        height={34}
                        alt="icon 2"
                    />
                    <p><strong>Pessoas criativas</strong></p>
                </div>
                <div className={style.feature}>
                    <Image
                        src="/images/tres.png"
                        width={34}
                        height={34}
                        alt="icon 3"
                    />
                    <p><strong>Processo sistemático e <br />contínuo de criação</strong></p>
                </div>
            <div className={style.bnt}>
                <Button />
            </div>
            </div>
        </div>
    )
}