import { useEffect } from "react";

export default function Exemplo01({ voltar }) {

    async function carregarProdutos() {
        const resposta = await fetch("https://fakestoreapi.com/products");
        const dados = await resposta.json();
        console.log(dados);
    }

    /*
     * Passar um vetor vazio [] como segundo argumento do useEffect 
     * faz com que o código dentro dele rode apenas uma única vez, 
     * logo após o componente aparecer na tela (montagem).
     */
    useEffect(() => {
        carregarProdutos();
    }, []);

    return (
        <div>
            <h1>Exemplo 02</h1>

            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>

            <h2>OBS:</h2>
            <h3>Lista de Produtos no Console do Navegador</h3>
        </div>
    );
}