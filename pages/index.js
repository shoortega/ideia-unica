import Link from "next/link";

function Home() {
    return (<div>
        <h1>Site em construção!</h1>
        
        <Link href="/sobre">
            <a> Acessar página Sobre </a>        
        </Link>
    </div>)
}

//exportando por padrão qual componente eu quero que seja reinderizado como página
export default Home