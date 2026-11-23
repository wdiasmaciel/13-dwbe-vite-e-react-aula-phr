import { useEffect, useState } from "react";
import CardProduto from "./CardProduto";

export default function Exemplo03({ voltar }) {
    const [produtos, setProdutos] = useState([]);

    async function carregarProdutos() {
        const resposta = await fetch("https://fakestoreapi.com/products");
        const dados = await resposta.json();
        setProdutos(dados);
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
            <h1>Exemplo 03</h1>

            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>

            <h2>Lista de Produtos</h2>

            {
                produtos.map(produto => (
                    <CardProduto
                        key={produto.id}
                        nome={produto.title}
                        preco={produto.price}
                        descricao={produto.description}
                        categoria={produto.category}
                        imagem={produto.image}
                    />
                ))
            }
        </div>
    );
}