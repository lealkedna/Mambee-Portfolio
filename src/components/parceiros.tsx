import Image from "next/image";
import styles from "@/styles/parceiros.module.css";
export default function parceriros(){
    return (
    <section className="parceiros">
    <h2 className={styles.parceiros}>Nossos Parceiros</h2>
    <div className={styles.parceiros}>
      <div className={styles.parceiro_item}>
        <Image
          src="/virtex.png"
          width={200}
          height={30}
          alt="Parceiro 1"
        />
      </div>
      <div className={styles.parceiro_item}>
        <Image
          src="/ibict.png"
          width={300}
          height={100}
          alt="Parceiro 2"
        />
      </div>
      <div className={styles.parceiro_item}>
        <Image
          src="/"
          width={200}
          height={100}
          alt="Parceiro 3"
        />
      </div>
      <div className={styles.parceiro_item}>
        <Image
          src="/.png"
          width={200}
          height={100}
          alt="Parceiro 4"
        />
      </div>
    </div>
  </section>
      
     
    );
  }

       

    

