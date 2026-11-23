import { useEffect } from "react";

export default function Exemplo01({ voltar }) {

    /*
     * Passar um vetor vazio [] como segundo argumento do useEffect 
     * faz com que o código dentro dele rode apenas uma única vez, 
     * logo após o componente aparecer na tela (montagem).
     */
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(resposta => resposta.json())
            .then(dados => console.log(dados));
    }, []);

    return (
        <div>
            <h1>Exemplo 01</h1>

            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>

            <h2>OBS:</h2>
            <h3>Lista de Produtos no Console do Navegador</h3>
        </div>
    );

}