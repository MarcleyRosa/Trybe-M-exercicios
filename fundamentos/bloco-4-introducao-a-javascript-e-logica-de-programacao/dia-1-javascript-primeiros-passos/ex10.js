const valorDoProduto = 100
const valorDaVenda = 130
let totalDeUnidadesVendidas = 1000

let valorTotalDoProdutoComImposto = ((valorDoProduto * 20) / 100) + valorDoProduto

if (valorDoProduto >= 0 && valorDaVenda >= 0) {
    console.log('Lucro Liquido: ', (valorDaVenda - valorTotalDoProdutoComImposto) * totalDeUnidadesVendidas);
} else {
    console.log('Erro! Valor informado incorreto');
}