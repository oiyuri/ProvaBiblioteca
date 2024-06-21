window.onload = function () {
  tratar_eventos();
};

function tratar_eventos() {
  document.getElementById("btnCadastrarAluno").onclick = function () {
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var matricula = document.getElementById("matricula").value;

    if (nome == "" || matricula == "") {
      alert("Preencha todos os campos.");
      return;
    }

    var usuario = {
      nome: nome,
      matricula: matricula,
    };

    var usuarios = localStorage.getItem("usuarios");
    if (usuarios == null) {
      usuarios = [];
    } else {
      usuarios = JSON.parse(usuarios);
    }

    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuário cadastrado com sucesso.");
    window.location.href = "livro.html";
  };

  document.getElementById("btnCadastrarLivro").onclick = function (event) {
    event.preventDefault();

    var titulo = document.getElementById("titulo").value;
    var autor = document.getElementById("autor").value;

    if (titulo == "" || autor == "") {
      alert("Preencha todos os campos.");
      return;
    }

    var livro = {
      titulo: titulo,
      autor: autor,
    };

    var livros = localStorage.getItem("livros");
    if (livros == null) {
      livros = [];
    } else {
      livros = JSON.parse(livros);
    }

    livros.push(livro);
    localStorage.setItem("livros", JSON.stringify(livros));
    alert("Livro cadastrado com sucesso.");
  };
}
