import Link from "next/link";

function Home() {
    return (<div>
        <h1>Home</h1>
        
        <Link href="/sobre">
            <a> Acessar página Sobre </a>        
        </Link>
    </div>)
}

//exportando por padrão qual componente eu quero que seja reinderizado como página
export default Home