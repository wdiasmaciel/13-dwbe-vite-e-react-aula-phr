export default async function carregarProdutos() {
    const url = "https://fakestoreapi.com/products";

    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    return resposta.json();
}
