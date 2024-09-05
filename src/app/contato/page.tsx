import Image from "next/image";
import Header from "@/components/header";
import style from "@/styles/Contato.module.css";

import { MdEmail } from "react-icons/md";
import InputField from "@/components/InputField";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import ButtonSubmit from "@/components/ButtonSubmit";
import Footer from "@/components/Footer";

export default function Contato() {
    return (
        <>
            <Header />
            <div className={style.section_contato}>
                <Image className={style.favo_cima}
                    src="/favoMel.png"
                    width={160}
                    height={165}
                    alt="Favo de mel"
                />
                <div className={style.container}>
                    <h1 >Fale Com Nosso Cordenador</h1>
                    <div className={style.info_contato}>
                        <a href="mailto:mambee.fabrica@gmail.com">
                            <MdEmail color="#a0ceda" />
                            <div>mambee.fabrica@gmail.com</div>
                        </a>
                    </div>
                <Image className={style.favo_baixo}
                    src="/favoMel.png"
                    width={160}
                    height={165}
                    alt="Favo de mel"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                />
                </div>

                <form>
                    <InputField label="Nome" type="text" name="name" />
                    <InputField label="Email" type="email" name="email"/>
                    <Select/>
                    <Textarea/>
                    <ButtonSubmit/>
                </form>
            </div>
            {/*<Footer/>*/}
        </>
    );
}
