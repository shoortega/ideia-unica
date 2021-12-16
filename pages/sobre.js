import Link from 'next/link' ;

function Sobre() {
    return (<div>
        <h1>Sobre</h1>

        <Link href="/">
            <a>Voltar para  Home</a> 
        </Link>
        
    </div>)
}

//exportando por padrão qual componente eu quero que seja reinderizado como página
export default Sobre