import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Footer.module.css"

import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Image
                            src="/images/mambee_logo_sem_fundo.png"
                            width={165}
                            height={82}
                            alt="Logo da mambee"
                        />
                    </div>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li><Link href="/">Início</Link></li>
                            <li><Link href="/projetos">Projetos</Link></li>
                            <li><Link href="/contato">Contrate-nos</Link></li>
                        </ul>
                    </nav>
                    <div className={styles.address}>
                        <p>Av Pedro Marques de Medeiros, s/n - </p>
                        <p> Parque Industrial,</p>
                        <p>Picos - PI, 64605-500</p>
                    </div>
                </div>
                <div className={styles.foo_fim}>
                    <div className={styles.redes_sociais}>
                        <a href="https://www.instagram.com/mambeeifpi/" target="_blank" rel="noopener noreferrer">
                            <span><FaInstagramSquare color="#a0ceda" />&nbsp;</span>
                        </a>
                        <a href="https://github.com/mambee-ifpi-picos" target="_blank" rel="noopener noreferrer">
                            <span><FaGithub color="#a0ceda" /> &nbsp;</span>
                        </a>
                        <a href="https://www.youtube.com/@Mambee" target="_blank" rel="noopener noreferrer">
                            <span><FaYoutube color="#a0ceda" />&nbsp;</span>
                        </a>
                    </div>
                    <div className={styles.copy}>
                        <p>&copy; Mambee 2024</p>
                    </div>
                </div>
            </div>
        </>
    )
}