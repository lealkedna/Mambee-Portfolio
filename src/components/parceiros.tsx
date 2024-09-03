import Image from "next/image";
import styles from "@/styles/Parceiros.module.css";
export default function parceriros(){
    return (
    <section className="parceiros">
    <h2 className={styles.title}>Nossos Parceiros</h2>
    <div>
      <div className={styles.parceiroItem}>
        <Image
          src="/ifpiPicos.png"
          width={250}
          height={85}
          alt="Parceiro 1"
        />
      </div>
      <div className={styles.parceiroItem}>
        <Image
          src="/valedomel.png"
          width={500}
          height={500}
          alt="Parceiro 2"
        />
      </div>
      <div className={styles.parceiroItem}>
        <Image
          src="/ibict.png"
          width={200}
          height={100}
          alt="Parceiro 3"
        />
      </div>
      <div className={styles.parceiroItem}>
        <Image
          src="/mb.png"
          width={250}
          height={100}
          alt="Parceiro 4"
        />
      </div>
      <div className={styles.parceiroItem}>
        <Image
          src="\mb.png"
          width={20}
          height={150}
          alt="Parceiro 5"
        />
      </div>
      <div className={styles.parceiroItem}>
        <Image
          src="\virtex.png"
          width={200}
          height={80}
          alt="Parceiro 6"
        />
      </div> 
      <div className={styles.parceiro_item}>
        <Image
          src="/labitec.png"
          width={300}
          height={100}
          alt="Parceiro 7"
        />
      </div>
    </div>
  </section>
      
     
    );
  }

       

    

