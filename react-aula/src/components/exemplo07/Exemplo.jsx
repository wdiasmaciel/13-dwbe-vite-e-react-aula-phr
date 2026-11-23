import { useEffect, useState } from "react";
import CardProduto from "./CardProduto";
import '../../styles/estilo.css';

export default function Exemplo07({ voltar }) {
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    async function carregarProdutos() {
        try {
            const resposta = await fetch("https://fakestoreapi.com/products");

            if (!resposta.ok) {
                throw new Error(`Erro HTTP: ${resposta.status}`);
            }

            const dados = await resposta.json();
            setProdutos(dados);
        } catch (erro) {
            console.error(erro.message);
            setErro("Erro ao acessar servidor.");
        } finally {
            setCarregando(false);
        }
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
            <h1>Exemplo 07</h1>

            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>

            <h2>Lista de Produtos</h2>

            <div className="painel">
                {erro ? (
                    <p role="alert">{erro}</p>
                ) : carregando ? (
                    <h2 className="carregamento">Carregando Produtos...</h2>
                ) : (
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
                )}
            </div>
        </div>
    );
}