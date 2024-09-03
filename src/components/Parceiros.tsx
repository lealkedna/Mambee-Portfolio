import Image from "next/image";
import styles from "@/styles/Parceiros.module.css";
export default function Parceriros(){
    return (
    <section className={styles.parceiros}>
    <h2 className={styles.title}>Parceiros</h2>
    <div >
      <div className={styles.coluna1}>
        <Image
          src="/images/ifpiPicos.png"
          width={400}
          height={100}
          alt="Parceiro 1"
        />
        <Image
          src="/images/valedomel.png"
          width={400}
          height={100}
          alt="Parceiro 2"
        />
         <Image
          src="/images/ibict.png"
          width={400}
          height={100}
          alt="Parceiro 3"
        />
         <Image
          src="/images/mb.png"
          width={400}
          height={100}
          alt="Parceiro 4"
        />
      </div>
      <div className={styles.coluna2}>
        <Image
          src="/images/mb.png"
          width={200}
          height={80}
          alt="Parceiro 5"
        />
        <Image
          src="/images/virtex.png"
          width={200}
          height={80}
          alt="Parceiro 6"
        />
         <Image
          src="/images/labitec.png"
          width={200}
          height={80}
          alt="Parceiro 6"
        />
        
      </div>
      
    </div>

    </section>
      
     
    );
  }

       

    

