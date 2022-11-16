const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro
    document.getElementById('ibge').value = endereco.ibge
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade
    document.getElementById('estado').value = endereco.uf
}

const limparFormulario = () => {
    document.getElementById('cep').value = ''
    document.getElementById('logradouro').value = ''
    document.getElementById('ibge').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('estado').value = ''
}

const eNumero = (numero) => /^[0-9]+$/.test(numero)
const cepValido = (cep) => cep.length === 8 && eNumero(cep)

pesquisarCep = async () => {
    const cep = document.getElementById('cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`
    if (cepValido(cep)) {
        const dados = await fetch(url)
        const endereco = await dados.json()
        if(endereco.hasOwnProperty('erro')) {
            limparFormulario()
            alert('CEP não encontrado!')
        } else {
            preencherFormulario(endereco);
        }
    } else {
        limparFormulario()
        alert('CEP inválido!')
    }
}

document.getElementById('botao').addEventListener('click', pesquisarCep)