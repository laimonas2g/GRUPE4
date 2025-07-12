// Obter professores do Armazenamento Local
function obterProfessoresDoLocalStorage() {
    let professoresArmazenados = localStorage.getItem('professores');
    if (professoresArmazenados) {
      return JSON.parse(professoresArmazenados);
    }
    return [];
  }
  
  // Salvar professores no Armazenamento Local
  function salvarProfessoresNoLocalStorage(professores) {
    localStorage.setItem('professores', JSON.stringify(professores));
  }
  
  // Função que calcula salário
  function calcularSalario(aulaSemana, valorAula) {
    let SB = aulaSemana * 4.5 * valorAula;
    let HA = 0.05 * SB;
    let dsr = (SB + HA) / 6;
    let salarioMensal = SB + HA + dsr;
    return salarioMensal;
  }
  
  // Form Dados professor
  let formProfessor = document.getElementById('formProfessor');
  let listaProfessores = document.getElementById('listaProfessores');
  let professores = obterProfessoresDoLocalStorage();
  
  formProfessor.addEventListener('submit', function(event) {
    event.preventDefault();
  
    let cpf = document.getElementById('cpf').value;
    let nome = document.getElementById('nome').value;
    let aulaSemana = parseInt(document.getElementById('aulaSemana').value);
    let valorAula = parseFloat(document.getElementById('valorAula').value);
  
    if (cpfCadastro(cpf)) {
      Swal.fire({
        icon: 'error',
        title: 'CPF já cadastrado',
        text: 'Insira um CPF válido.'
      });
      return;
    }
    
    Swal.fire({
      icon: 'success',
      title: 'Professor cadastrado com sucesso',
      text: ':)'
    });
    
  
    let professor = {
      cpf: cpf,
      nome: nome,
      aulaSemana: aulaSemana,
      valorAula: valorAula,
      imagemBackground: null
    };
    professores.push(professor);
  
    salvarProfessoresNoLocalStorage(professores);
    formProfessor.reset();
    atualizarListaProfessores();
    
  });
  
  // Função verifica CPF
  function cpfCadastro(cpf) {
    for (let i = 0; i < professores.length; i++) {
      if (professores[i].cpf === cpf) {
        return true;
      }
    }
    return false;
  }
  
  // Form Consulta
  let formConsulta = document.getElementById('formConsulta');
  let resultadoConsulta = document.getElementById('resultadoConsulta');
  
  formConsulta.addEventListener('submit', function(event) {
    event.preventDefault();
    let consultaCPF = document.getElementById('consultaCPF').value;
  
    let professorEncontrado = procurarProfessorPorCPF(consultaCPF);
  
    if (professorEncontrado) {
      resultadoConsulta.textContent = `${professorEncontrado.nome} | Salário: ${calcularSalario(professorEncontrado.aulaSemana, professorEncontrado.valorAula).toFixed(2)}`;
    } else {
      resultadoConsulta.textContent = 'Professor não encontrado.';
    }
    formConsulta.reset();
  });
  
  // Função consulta
  function procurarProfessorPorCPF(cpf) {
    for (let i = 0; i < professores.length; i++) {
      if (professores[i].cpf === cpf) {
        return professores[i];
      }
    }
    return null;
  }
  
  // Form Exclusao por CPF
  let formExclusao = document.getElementById('formExclusao');
  formExclusao.addEventListener('submit', function(event) {
    event.preventDefault();
    let exclusaoCPF = document.getElementById('exclusaoCPF').value;
    atualizarListaProfessores();
    excluirProfessor(exclusaoCPF);
    formExclusao.reset();
  });
  
  // Função Exclusao CPF
  function excluirProfessor(cpf) {
    let novaListaProfessores = [];
    let professorEncontrado = false;
  
    for (let i = 0; i < professores.length; i++) {
      if (professores[i].cpf === cpf) {
        professorEncontrado = true;
      } else {
        novaListaProfessores.push(professores[i]);
      }
    }
  
    if (professorEncontrado) {
      professores = novaListaProfessores;
      salvarProfessoresNoLocalStorage(professores);
      Swal.fire({
        icon: 'success',
        title: 'Professor removido com sucesso'
      });
      atualizarListaProfessores();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Professor não encontrado'
      });
    }
  }
  
  // Form alteração
  let formAlteracao = document.getElementById('formAlteracao');
  formAlteracao.addEventListener('submit', function(event) {
    event.preventDefault();
    let cpf = document.getElementById('alteracaoCPF').value;
    let novoNome = document.getElementById('alteracaoNome').value;
    let novasAulasSemanais = parseInt(document.getElementById('alteracaoAulasSemanais').value);
    let novoValorHoraAula = parseFloat(document.getElementById('alteracaoValorHoraAula').value);
  
    let professorEncontrado = procurarProfessorPorCPF(cpf);
    if (professorEncontrado) {
      if (novoNome !== '') {
        professorEncontrado.nome = novoNome;
      }
      if (!isNaN(novasAulasSemanais)) {
        professorEncontrado.aulaSemana = novasAulasSemanais;
      }
      if (!isNaN(novoValorHoraAula)) {
        professorEncontrado.valorAula = novoValorHoraAula;
      }
      salvarProfessoresNoLocalStorage(professores);
      atualizarListaProfessores();
      Swal.fire({
        icon: 'success',
        title: 'Dados do professor alterados com sucesso'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'CPF do professor não encontrado'
      });
    }
    formAlteracao.reset();
  });
  
  function atualizarListaProfessores() {
    listaProfessores.innerHTML = '';
  
    let professoresOrdenados = professores.slice();
  
    for (let i = 0; i < professoresOrdenados.length - 1; i++) {
      for (let j = i + 1; j < professoresOrdenados.length; j++) {
        if (professoresOrdenados[i].nome.localeCompare(professoresOrdenados[j].nome) > 0) {
          let temp = professoresOrdenados[i];
          professoresOrdenados[i] = professoresOrdenados[j];
          professoresOrdenados[j] = temp;
        }
      }
    }
  
    // Lista de URLs de imagens
    let imagens = [
      'maia.jpg',
      'pato.jpeg',
      'luciano.jpg',
      'calleri.jpg',
      'beraldo.jpeg'
      // ... adicione mais URLs de imagens aqui
    ];
  
    let html = '';
  
    professoresOrdenados.forEach(function(professor, index) {
      let imagemBackground = professor.imagemBackground;
  
      if (professor.nome.toLowerCase() === 'selmini') {
        imagemBackground = 'selmini.jpg';
      } else if (professor.nome.toLowerCase() === 'flavio') {
        imagemBackground = 'flavio.jpg';
      } else if (professor.nome.toLowerCase() === 'surjan') {
        imagemBackground = 'surjan.jpg';
      } else if (professor.nome.toLowerCase() === 'surian') {
        imagemBackground = 'surian.jpg';
      } else if (professor.nome.toLowerCase() === 'rafa') {
        imagemBackground = 'rafa.jpg';
      } else if (professor.nome.toLowerCase() === 'roberta') {
        imagemBackground = 'robertao.jpg';
      } else {
        // Escolhe uma imagem aleatória da lista
        imagemBackground = imagens[Math.floor(Math.random() * imagens.length)];
      }
  
      // Cria um novo card a cada 3 professores
      if (index % 3 === 0) {
        html += '<div class="row">';
      }
  
      html += `
      <div class="col-md-4">
      <div class="card text-white mb-3" style="background-image: url(${imagemBackground});
      height: 350px;
      background-size: cover;
      background-position: center;">
        <div class="card-body" style="background-color: rgba(0,0,0,0.5);">
          <h5 class="card-title">${professor.nome}</h5>
          <p class="card-text"><strong>Salário: ${calcularSalario(professor.aulaSemana, professor.valorAula).toFixed(2)}</strong></p>
          <p class="card-text">CPF: ${professor.cpf}</p>
          <p class="card-text">Aulas por semana: ${professor.aulaSemana}</p>
          <p class="card-text">Valor da hora/aula: ${professor.valorAula}</p>
        </div>
      </div>
    </div>
      `;
  
      // Fecha a linha a cada 3 professores
      if (index % 3 === 2 || index === professoresOrdenados.length - 1) {
        html += '</div>';
      }
    });
  
    listaProfessores.innerHTML = html;
  }
  
  atualizarListaProfessores();
  