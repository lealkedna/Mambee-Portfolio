import Button from "@/components/button";
import style from "@/styles/Chamamento.module.css";

export default function Chamamento(){
    return (
        <>
         <div className={style.container}>
            <div className={style.header}>
                <h1>Quer ser nosso Parceiro?</h1>
                <h2>Junte-se a nós e transforme alunos em <br/>profissionais produtivos e protagonistas.</h2>
            </div>
                <div className={style.features}>
                    <div className={style.feature}>
                        {/* imagem 1*/}
                        <p>Ambiente propincio</p>
                    </div>
                    <div  className={style.feature}>
                        {/* imagem 2*/}
                        <p>Pessoas criativas</p>
                    </div>
                    <div  className={style.feature}>
                        {/* imagem 3*/}
                        <p>Processo sistemático e <br/>contínuo de criação</p>
                    </div>
                </div>
                <div className={style.bnt}>
                  <Button/>
                </div>
         </div>
        </>
    )
}