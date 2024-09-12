import Image from "next/image";
import Header from "@/components/header";
import style from "@/styles/Contato.module.css";
import Footer from "@/components/Footer";

import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

export default function Contato() {
    return (
        <>
            <Header />
            <div className={style.section_contato}>
                <Image className={style.favo_cima}
                    src="/images/favoMel.png"
                    width={150}
                    height={155}
                    alt="Favo de mel"
                />
                <div className={style.container}>
                    <p className={style.paragrafo}>Para mais informações</p>
                    <h1 >Fale Com Nosso Cordenador</h1>
                    <div className={style.info_email}>
                        <a href="mailto:mambee.fabrica@gmail.com">
                            <MdEmail color="#a0ceda" />
                            <div>mambee.fabrica@gmail.com</div>
                        </a>
                    </div>
                    <div className={style.info_instagram}>
                        <a href="https://www.instagram.com/mambeeifpi/"  target="_blank">
                            <FaInstagram color="#a0ceda"/>
                            <div>@mambeeifpi</div>
                        </a>
                    </div>
                    <div className={style.info_endereco}>
                            <IoLocation color="#a0ceda" />
                            <div>IFPI Campus Picos, Sala E5
                                (Mambee),<br/>Pantanal, Picos - PI
                            </div>
                    </div>

                    <Image className={style.favo_baixo}
                        src="/images/favoMel.png"
                        width={160}
                        height={165}
                        alt="Favo de mel"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                    />
                </div>
            </div>
            <Footer/>
        </>
    );
}
