import Link from "next/link";
import styles from "@/styles/Button.module.css"
function Button() {
    return (
        <Link href="/contato"><button type="button" className={styles.btn}>Vamos conversar?</button></Link>
      
    );
}

export default Button;