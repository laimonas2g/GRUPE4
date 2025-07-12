let idPessoaEditando;

function abrirModalCriar() {
    document.getElementById("inputNome").value = ""
    document.getElementById("inputEmail").value = ""
    $("#modalCriar").modal("show")

}

async function abrirModalEditar(id) {

    let response = await fetch("https://academico.espm.br/testeapi/obter/" + id)

    if (!response.ok) {
        Swal.fire('Erro!','Pessoa não encontrada','error')
        return;
    }

    let pessoa = await response.json()

    if (!pessoa) {
        Swal.fire('Erro!','Pessoa não encontrada','error')
        return;
    }

     idPessoaEditando = id
    
    document.getElementById("inputNomeEditar").value = pessoa.nome
    document.getElementById("inputEmailEditar").value = pessoa.email
    $("#modalEditar").modal("show")
}

async function editarPessoa() {
    
    let nome = document.getElementById("inputNomeEditar").value
    let email = document.getElementById("inputEmailEditar").value

    let pessoa = {
        "id": idPessoaEditando,
        "nome": nome,
        "email": email


    }

    let response = await fetch("https://academico.espm.br/testeapi/alterar", {
        method: "POST",
        body: JSON.stringify(pessoa),
        headers: {
            "content-type": "application/json"
            
        }
    })

    if (nome === '' || email === '') {
        Swal.fire(
            'Erro no cadastro',
            'Por favor preencha todos os campos',
            'error'
            )
            
    }
    else {
        Swal.fire(
            'Cadastro',
            'Alteração criada com sucesso',
            'success'
            )
            $("#modalEditar").modal("hide")
            buscarDados()

    }
}


async function criarPessoa() {

    let nome = document.getElementById("inputNome").value
    let email = document.getElementById("inputEmail").value

    let pessoa = {
        "nome": nome,
        "email": email


    }

    let response = await fetch("https://academico.espm.br/testeapi/criar", {
        method: "POST",
        body: JSON.stringify(pessoa),
        headers: {
            "content-type": "application/json"
            
        }
    })

    if (nome === '' || email === '') {
        Swal.fire(
            'Erro no cadastro',
            'Por favor preencha todos os campos',
            'error'
            )
            
    }
    else {
        Swal.fire(
            'Cadastro',
            'Pessoa criada com sucesso',
            'success'
            )
            $("#modalCriar").modal("hide")
            buscarDados()

    }
}

async function buscarDados() {

    let response = await fetch("https://academico.espm.br/testeapi/listar")

    let lista = await response.json()

    let html = ""

    let cores = ["", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-light", "bg-dark"]

    let cores_texto = ["", "text-white", "text-white", "text-white", "text-white", "text-white", "", "text-white"]

    for (let i = 0; i < lista.length; i++) {
        let pessoa = lista[i];
        if (i % 3 === 0) {
            html += '<div class="row">'
        }
            

        let cor = cores[i % cores.length]
        let texto = cores_texto[i % cores_texto.length]

        html += `
        <div class="col-sm-4">
            <div class="card ${texto} ${cor} mb-3">
                <div class="card-header">${pessoa.id}</div>
                <div class="card-body">
                    <h5 class="card-title">${pessoa.nome}</h5>
                    <p class="card-text">${pessoa.email}</p>
                    <hr>
                    <p><button type "button" class="btn btn-outline-primary" onclick="abrirModalEditar(${pessoa.id})">Editar</button></p>
                </div>
            </div>
        </div>
    `
    
    if (i % 3 === 2 || i === lista.length - 1) {
        html += '</div>'
     }
    }

    let div = document.getElementById("divPessoas")
    div.innerHTML = html

}

buscarDados()