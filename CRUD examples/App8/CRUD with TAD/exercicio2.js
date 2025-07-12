class Professor {
    constructor(cpf, nome, aulaSemana, valorAula) {
        this.cpf = cpf
        this.nome = nome
        this.aulaSemana = aulaSemana
        this.valorAula = valorAula
  }
  calcularSalario() {
        let SB = this.aulaSemana * 4.5 * this.valorAula
        let HA = 0.05 * SB
        let dsr = (SB + HA) / 6
        let salarioMensal = SB + HA + dsr
        return salarioMensal
    }
    
    retornaDados() {
        let salarioMensal = this.calcularSalario()
        return `${this.nome}` + ` | CPF: ${this.cpf}` + ` | Salário: ${salarioMensal}`
    }
}

// Form Dados professor
let formProfessor = document.getElementById('formProfessor')
let listaProfessores = document.getElementById('listaProfessores')
let professores = new Array()

formProfessor.addEventListener('submit', function(event) {
  event.preventDefault()

  let cpf = document.getElementById('cpf').value
  let nome = document.getElementById('nome').value
  let aulaSemana = parseInt(document.getElementById('aulaSemana').value)
  let valorAula = parseFloat(document.getElementById('valorAula').value)

  if (cpfCadastro(cpf)) {
    alert('CPF já cadastrado. Insira um CPF válido.');
    return
  }
  alert("Professor cadastrado com sucesso :)")

  let professor = new Professor(cpf, nome, aulaSemana, valorAula);
  professores.push(professor)

  formProfessor.reset()
  atualizarListaProfessores()
})

//Função verifica CPF 
function cpfCadastro(cpf) {
    for (let i = 0; i < professores.length; i++) {
        if (professores[i].cpf === cpf) {
            return true
        }
    }
}

// Form Consulta
let formConsulta = document.getElementById('formConsulta')
let resultadoConsulta = document.getElementById('resultadoConsulta')

formConsulta.addEventListener('submit', function(event) {
    event.preventDefault()
    let consultaCPF = document.getElementById('consultaCPF').value

    let professorEncontrado = procurarProfessorPorCPF(consultaCPF)

    if (professorEncontrado) {
        //resultadoConsulta.textContent = `Nome: ${professorEncontrado.nome} - CPF: ${professorEncontrado.cpf}`
        resultadoConsulta.textContent = `${professorEncontrado.retornaDados()}`
    } else {
        resultadoConsulta.textContent = 'Professor não encontrado.'
    }
    formConsulta.reset()
})

// Função consulta 
function procurarProfessorPorCPF(cpf) {
    for (let i = 0; i < professores.length; i++) {
        if (professores[i].cpf === cpf) {
            return professores[i]
        }
    }
}

// Form Exclusao por CPF
formExclusao.addEventListener('submit', function(event) {
    event.preventDefault()
    let exclusaoCPF = document.getElementById('exclusaoCPF').value
    atualizarListaProfessores()
    excluirProfessor(exclusaoCPF)
    
    
    formExclusao.reset()
})

// Função Exclusao CPF
function excluirProfessor(cpf) {
    let novaListaProfessores = new Array()
    let professorEncontrado = false

    for (let i = 0; i < professores.length; i++) {
        if (professores[i].cpf === cpf) {
            professorEncontrado = true
        } else {
            novaListaProfessores.push(professores[i])
        }
    }

    if (professorEncontrado) {
        professores = novaListaProfessores;
        alert("Professor removido com sucesso!")
        atualizarListaProfessores();
    } else {
        alert("Professor não encontrado.")
    }
}

// Form alteração

let formAlteracao = document.getElementById('formAlteracao')
formAlteracao.addEventListener('submit', function(event) {
    event.preventDefault();
    let cpf = document.getElementById('alteracaoCPF').value
    let novoNome = document.getElementById('alteracaoNome').value
    let novasAulasSemanais = parseInt(document.getElementById('alteracaoAulasSemanais').value)
    let novoValorHoraAula = parseFloat(document.getElementById('alteracaoValorHoraAula').value)

    let professorEncontrado = procurarProfessorPorCPF(cpf)
    if (professorEncontrado) {
        if (novoNome !== '') {
            professorEncontrado.nome = novoNome;
        }
        if (!isNaN(novasAulasSemanais)) {
            professorEncontrado.aulaSemana = novasAulasSemanais
        }
        if (!isNaN(novoValorHoraAula)) {
            professorEncontrado.valorAula = novoValorHoraAula
        }
        atualizarListaProfessores()
        alert('Dados do professor alterados com sucesso!')
    } else {
        alert('CPF do professor não encontrado.')
    }
    formAlteracao.reset()
})

// Função procura CPF professor
function procurarProfessorPorCPF(cpf) {
for (let i = 0; i < professores.length; i++) {
    if (professores[i].cpf === cpf) {
    return professores[i]
    }
}
}

// Funçao que atualiza lista dados Professores
function atualizarListaProfessores() {
    let listaProfessores = document.getElementById('listaProfessores')
    listaProfessores.innerHTML = ''
    
    professores.forEach(function(professor) {
        let itemLista = document.createElement('li')
        //itemLista.textContent = `${professor.nome} - CPF: ${professor.cpf} - Salário: ${professor.calcularSalario()}`
        itemLista.textContent = `${professor.retornaDados()}`
        listaProfessores.appendChild(itemLista)
    })
}