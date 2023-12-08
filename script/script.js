//Tela de Cadastro
var botaoCadastrar = document.getElementById('btn-cadastrar');
var telaCadastro = document.getElementById('tela-cadastro');
var botaoSalvar = document.getElementById('btn-salvar-produto');
var imgCaixa = document.getElementById('img-caixa');
var textoMenu = document.getElementById('texto-cadastro');

//Tela de Produtos
var botaoVerProdutos = document.getElementById('btn-ver-produtos');
var telaProdutos = document.getElementById('tela-produto');
var tabelaProdutos = document.getElementById('cabecalho-tabela-produtos');
var textoProdutos = document.getElementById('texto-produtos');
var imgPrancheta = document.getElementById('img-prancheta');

//Tela de Relatórios
var botaoRelatorio = document.getElementById('btn-relatorios');
var imgRelatorio = document.getElementById('img-relatorio');
var textoRelatorio = document.getElementById('texto-relatorio');

//Tela de Configuração
var botaoConfiguracoes = document.getElementById('btn-configuracoes');
var textoConfig = document.getElementById('texto-config');
var imgConfig = document.getElementById('img-config');

//Outras Variaveis
let controle = false;
let editar = false;
var botaoMenu = document.getElementById('btn-recolher-menu');
var menuLateral = document.getElementById('menu-lateral');
var barraTitulo = document.getElementById('barra-titulo');

function mudarCores(argument) {
	argument.style.color = '#5585b5';
	argument.style.backgroundColor = 'white';
}

function resetarCores(argument){
	argument.style.color = 'white';
	argument.style.backgroundColor = '#5585b5';
}

telaCadastro.style.display = 'none';
telaProdutos.style.display = 'none';

botaoMenu.addEventListener('click', () =>{
	controle = !controle;
	const tamanhoMargemGrande = '200px';
	const tamanhoMargemPequeno = '60px';
	if(controle){
		textoMenu.style.visibility = 'hidden';
		textoMenu.style.opacity = '0';
		textoProdutos.style.visibility = 'hidden';
		textoProdutos.style.opacity = '0';
		textoConfig.style.visibility = 'hidden';
		textoConfig.style.opacity = '0';
		textoRelatorio.style.visibility = 'hidden';
		textoRelatorio.style.opacity = '0';
		telaCadastro.style.marginLeft = tamanhoMargemPequeno;
		telaProdutos.style.marginLeft = tamanhoMargemPequeno;
		menuLateral.style.width = tamanhoMargemPequeno;
		barraTitulo.style.marginLeft = tamanhoMargemPequeno;
		botaoCadastrar.style.width = tamanhoMargemPequeno;
		botaoVerProdutos.style.width = tamanhoMargemPequeno;
		botaoRelatorio.style.width = tamanhoMargemPequeno;
		botaoConfiguracoes.style.width = tamanhoMargemPequeno;
	} else {
		textoMenu.style.visibility = 'visible';
		textoMenu.style.opacity = '1';
		textoProdutos.style.visibility = 'visible';
		textoProdutos.style.opacity = '1';
		textoRelatorio.style.visibility = 'visible';
		textoRelatorio.style.opacity = '1';
		textoConfig.style.visibility = 'visible';
		textoConfig.style.opacity = '1';
		telaCadastro.style.marginLeft = tamanhoMargemGrande;
		telaProdutos.style.marginLeft = tamanhoMargemGrande;
		barraTitulo.style.marginLeft = tamanhoMargemGrande;
		menuLateral.style.width = tamanhoMargemGrande;
		botaoCadastrar.style.width = tamanhoMargemGrande;
		botaoVerProdutos.style.width = tamanhoMargemGrande;
		botaoRelatorio.style.width = tamanhoMargemGrande;
		botaoConfiguracoes.style.width = tamanhoMargemGrande;
	}
	
})

botaoCadastrar.addEventListener('click', () =>{
	imgCaixa.src = './images/caixa-azul.png';
	imgPrancheta.src = './images/prancheta-branca.png';
	imgConfig.src = './images/config-branca.png';
	imgRelatorio.src = './images/grafico-branco.png';
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
		var descricaoProduto = document.getElementById('descricao-produto');
		var categoriaProduto = document.getElementById('categoria-produto')
		var modalExcluir = document.getElementById('modal-confirmar-excluir');
		var modalAviso = document.getElementById('modal-aviso');
		var textoModalAviso = document.getElementById('texto-aviso');
		var botaoFecharModal = document.getElementById('botao-fechar-modal');
		var botaoAbrirEditar = document.getElementById('btn-abrir-editar');

		if(nomeProduto.value.trim() == ''){
			textoModalAviso.textContent = 'O campo não pode estar vazio.'
			modalAviso.style.display = 'flex';
		} else {
			var linhaTabelaProdutos = document.createElement('tr');
			var nomeProdutoTabela = document.createElement('td');
			var valorProdutoTabela = document.createElement('td');
			var quantidadeProdutoTabela = document.createElement('td');
			var codigoProdutoTabela = document.createElement('td');
			var descricaoProdutoTabela = document.createElement('td');
			var categoriaProdutoTabela = document.createElement('td');
			var btnOperacoesTabela = document.createElement('td');

			var btnEditar = document.createElement('input');
			var btnExcluir = document.createElement('input');

			btnOperacoesTabela.appendChild(btnEditar);
			btnOperacoesTabela.appendChild(btnExcluir);

			linhaTabelaProdutos.appendChild(nomeProdutoTabela);
			linhaTabelaProdutos.appendChild(valorProdutoTabela);
			linhaTabelaProdutos.appendChild(quantidadeProdutoTabela);
			linhaTabelaProdutos.appendChild(codigoProdutoTabela);
			linhaTabelaProdutos.appendChild(categoriaProdutoTabela);
			linhaTabelaProdutos.appendChild(descricaoProdutoTabela);
			linhaTabelaProdutos.appendChild(btnOperacoesTabela);
			tabelaProdutos.appendChild(linhaTabelaProdutos);

			nomeProdutoTabela.textContent = nomeProduto.value;
			valorProdutoTabela.textContent = valorProduto.value;
			quantidadeProdutoTabela.textContent = quantidadeProduto.value;
			codigoProdutoTabela.textContent = codigoProduto.value;
			categoriaProdutoTabela.textContent = categoriaProduto.options[categoriaProduto.selectedIndex].text
			descricaoProdutoTabela.textContent = descricaoProduto.value;

			nomeProduto.value = '';
			valorProduto.value = '';
			quantidadeProduto.value = '';
			codigoProduto.value = '';
			descricaoProduto.value = '';

			btnEditar.className = 'btn-editar';
			btnEditar.type = 'button';
			btnExcluir.className = 'btn-excluir';
			btnExcluir.type = 'button';
			btnOperacoesTabela.className = 'btn-tabela';

			botaoAbrirEditar.addEventListener('click', () =>{
				editar = !editar;
				if(editar){
					btnOperacoesTabela.style.display = 'flex';
				} else {
					btnOperacoesTabela.style.display = 'none';
				}
			})

		}

		botaoFecharModal.addEventListener('click', () =>{
			modalAviso.style.display = 'none';
		})

		btnExcluir.addEventListener('click', () =>{
			var btnCancelar = document.getElementById('cancelar-exclusao');
			var btnConfirmarExclusao = document.getElementById('confirmar-exclusao');
			modalExcluir.style.display = 'flex';
			
			btnConfirmarExclusao.addEventListener('click', () =>{
				linhaTabelaProdutos.style.display = 'none';
				modalExcluir.style.display = 'none';
			})
			btnCancelar.addEventListener('click', () =>{
				modalExcluir.style.display = 'none';
			})
		})

	})
})

botaoVerProdutos.addEventListener('click', () =>{
	imgPrancheta.src = './images/prancheta-azul.png';
	imgConfig.src = './images/config-branca.png';
	imgCaixa.src = './images/caixa-branca.png';
	imgRelatorio.src = './images/grafico-branco.png';
	telaCadastro.style.display = 'none';
	telaProdutos.style.display = 'flex';
	mudarCores(botaoVerProdutos);
	resetarCores(botaoCadastrar);
	resetarCores(botaoConfiguracoes);
	resetarCores(botaoRelatorio);
})

botaoRelatorio.addEventListener('click', () =>{
	imgRelatorio.src = './images/grafico-azul.png';
	imgPrancheta.src = './images/prancheta-branca.png';
	imgConfig.src = './images/config-branca.png';
	imgCaixa.src = './images/caixa-branca.png';
	telaCadastro.style.display = 'none';
	telaProdutos.style.display = 'none'
	mudarCores(botaoRelatorio);
	resetarCores(botaoCadastrar);
	resetarCores(botaoVerProdutos);
	resetarCores(botaoConfiguracoes);
})

botaoConfiguracoes.addEventListener('click', () =>{
	imgConfig.src = './images/config-azul.png';
	imgCaixa.src = './images/caixa-branca.png';
	imgPrancheta.src = './images/prancheta-branca.png';
	imgRelatorio.src = './images/grafico-branco.png';
	telaCadastro.style.display = 'none';
	telaProdutos.style.display = 'none';
 	mudarCores(botaoConfiguracoes);
	resetarCores(botaoCadastrar);
	resetarCores(botaoVerProdutos);
	resetarCores(botaoRelatorio);
})