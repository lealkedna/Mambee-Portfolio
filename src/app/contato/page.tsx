import Image from "next/image";
import Header from "@/compoments/header";
export default function Contato() {
    return (
        <div>
            <Header/>
            <h1>Sobre</h1>
            <Image
                src="/download.jpeg"
                alt="Vercel Logo"
                // className="dark:invert"
                width={100}
                height={24}
                priority
            />
        </div>
    );
}