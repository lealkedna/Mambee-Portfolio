import Image from "next/image";
import Header from "@/compoments/header";
import style from "@/styles/Contato.module.css";
import { MdEmail } from "react-icons/md";
export default function Contato() {
    return (
        <>
            <Header/>
            <div className={style.section_contato}>
                <div className={style.container}>
                        <h1>Fale Com Nosso Cordenador</h1>
                    <div className={style.info_contato}>
                        <a href="mailto:mambee.fabrica@gmail.com">
                                <MdEmail color="#a0ceda"/>
                            <div>mambee.fabrica@gmail.com</div>
                        </a>
                    </div>
                </div>

                <form>
                    <input type="text" name="name" placeholder="Nome"></input><br/>
                    <input type="email" name="email" placeholder="email"></input><br/>
                </form>            
            </div>
        </>
    );
}
