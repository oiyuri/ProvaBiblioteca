window.onload = function () {
  tratar_eventos();
};

// Objeto para armazenar os livros alugados por cada usuário
const alugado = {};

function tratar_eventos() {
  const usuarios = [
    {
      aluno: "yuri",
      cpf: "12345678901",
      telefone: "12345678901",
      qtdAlugado: 1,
    },
    {
      aluno: "daniel",
      cpf: "12345678902",
      telefone: "12345678902",
      qtdAlugado: 2,
    },
    {
      aluno: "joao",
      cpf: "12345678903",
      telefone: "12345678903",
      qtdAlugado: 4,
    },
  ];

  document.getElementById("usuario1").onclick = function () {
    if (usuarios[0].qtdAlugado > 3) {
      alert("Usuário já alugou o máximo de livros permitido");
    }
  };

  document.getElementById("usuario2").onclick = function () {
    if (usuarios[1].qtdAlugado > 3) {
      alert("Usuário já alugou o máximo de livros permitido");
    }
  };

  document.getElementById("usuario3").onclick = function () {
    if (usuarios[2].qtdAlugado > 3) {
      alert("Usuário já alugou o máximo de livros permitido");
    }
  };
}
