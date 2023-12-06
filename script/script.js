//Tela de Cadastro
var botaoCadastrar = document.getElementById('btn-cadastrar');
var telaCadastro = document.getElementById('tela-cadastro');
var botaoSalvar = document.getElementById('btn-salvar-produto');

//Tela de Produtos
var botaoVerProdutos = document.getElementById('btn-ver-produtos');
var telaProdutos = document.getElementById('tela-produto');

var tabelaProdutos = document.getElementById('cabecalho-tabela-produtos');

//Tela de Relatórios
var botaoRelatorio = document.getElementById('btn-relatorios');

//Tela de Configuração
var botaoConfiguracoes = document.getElementById('btn-configuracoes');

//Outras Variaveis
var controle = false;

function mudarCores(argument) {
	argument.style.color = '#555';
	argument.style.backgroundColor = 'white';
}

function resetarCores(argument){
	argument.style.color = 'white';
	argument.style.backgroundColor = '#333';
}

telaCadastro.style.display = 'none';
telaProdutos.style.display = 'none';

botaoCadastrar.addEventListener('click', () =>{
	telaCadastro.style.display = 'flex';
	telaProdutos.style.display = 'none';
	mudarCores(botaoCadastrar);
	resetarCores(botaoVerProdutos);
	resetarCores(botaoRelatorio);
	resetarCores(botaoConfiguracoes);

	botaoSalvar.addEventListener('click', () =>{
		var nomeProduto = document.getElementById('nome-produto');
		var valorProduto = document.getElementById('valor-produto');
		var quantidadeProduto = document.getElementById('quantidade-produto');
		var codigoProduto = document.getElementById('codigo-produto');

		var linhaTabelaProdutos = document.createElement('tr');
		var nomeProdutoTabela = document.createElement('td');
		var valorProdutoTabela = document.createElement('td');
		var quantidadeProdutoTabela = document.createElement('td');
		var codigoProdutoTabela = document.createElement('td');
		var btnOperacoesTabela = document.createElement('td');

		var btnEditar = document.createElement('input');
		var btnExcluir = document.createElement('input');

		btnOperacoesTabela.appendChild(btnEditar);
		btnOperacoesTabela.appendChild(btnExcluir);

		linhaTabelaProdutos.appendChild(nomeProdutoTabela);
		linhaTabelaProdutos.appendChild(valorProdutoTabela);
		linhaTabelaProdutos.appendChild(quantidadeProdutoTabela);
		linhaTabelaProdutos.appendChild(codigoProdutoTabela);
		linhaTabelaProdutos.appendChild(btnOperacoesTabela);
		tabelaProdutos.appendChild(linhaTabelaProdutos);

		nomeProdutoTabela.textContent = nomeProduto.value;
		valorProdutoTabela.textContent = valorProduto.value;
		quantidadeProdutoTabela.textContent = quantidadeProduto.value;
		codigoProdutoTabela.textContent = codigoProduto.value;

		nomeProduto.value = '';
		valorProduto.value = '';
		quantidadeProduto.value = '';
		codigoProduto.value = '';

		btnEditar.className = 'btn-editar';
		btnEditar.type = 'button';
		btnEditar.value = 'Editar';
		btnExcluir.className = 'btn-excluir';
		btnExcluir.type = 'button';
		btnExcluir.value = 'Excluir';
		btnOperacoesTabela.className = 'btn-tabela';
	})
})

botaoVerProdutos.addEventListener('click', () =>{
	telaCadastro.style.display = 'none';
	telaProdutos.style.display = 'flex';
	mudarCores(botaoVerProdutos);
	resetarCores(botaoCadastrar);
	resetarCores(botaoConfiguracoes);
	resetarCores(botaoRelatorio);
})

botaoRelatorio.addEventListener('click', () =>{
	telaCadastro.style.display = 'none';
	telaProdutos.style.display = 'none'
	mudarCores(botaoRelatorio);
	resetarCores(botaoCadastrar);
	resetarCores(botaoVerProdutos);
	resetarCores(botaoConfiguracoes);
})

botaoConfiguracoes.addEventListener('click', () =>{
	telaCadastro.style.display = 'none';
	telaProdutos.style.display = 'none';
 	mudarCores(botaoConfiguracoes);
	resetarCores(botaoCadastrar);
	resetarCores(botaoVerProdutos);
	resetarCores(botaoRelatorio);
})