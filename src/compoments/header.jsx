import Link from "next/link";
import styles from "@/styles/Header.module.css"
function Header() {
    return (
        <header className={styles.header}>
           <Link  href="/"><h2 className={styles.h2}>Mamb<span className={styles.span}>ee</span></h2></Link>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/projetos">Projetos</Link></li>
                    <li><Link href="/contato">Contato-nos</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;