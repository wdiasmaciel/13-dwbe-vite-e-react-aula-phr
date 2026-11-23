import { useEffect, useState } from "react";
import CardProduto from "./CardProduto";
import carregarProdutos from "../../services/produtoService";
import '../../styles/estilo.css';

export default function Exemplo08({ voltar }) {
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    function processar(ativo) {
        carregarProdutos()
            .then(dados => {
                if (ativo) {
                    setProdutos(dados);
                }
            })
            .catch(erro => {
                console.error(erro);
                if (ativo) {
                    setErro("Erro ao acessar servidor.");
                }
            })
            .finally(() => {
                if (ativo) {
                    setCarregando(false);
                }
            });
    }

    /*
     * Passar um vetor vazio [] como segundo argumento do useEffect 
     * faz com que o código dentro dele rode apenas uma única vez, 
     * logo após o componente aparecer na tela (montagem).
     */
    useEffect(() => {
        let ativo = true;
        processar(ativo);

        /*
         * Executado ao desmontar: impede atualizações de estado após a saída.
         * A função retornada no return desativa atualizações de estado quando 
         * o componente é desmontado:
         */
        return () => {
            ativo = false;
        };
    }, []);

    return (
        <div>
            <h1>Exemplo 08</h1>

            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>

            <h2>Lista de Produtos</h2>

            <div className="painel">
                {erro ? (
                    <h2 className="alerta">{erro}</h2>
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