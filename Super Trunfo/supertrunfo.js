var carta1 = {
    nome: "Bulbasauro",
    imagem:
      "http://3.bp.blogspot.com/-L-qm9ojavh0/UGTq9iTM-CI/AAAAAAAAc-E/DVhbSMA-PAQ/s1600/Bulbsaur_Razor_Leaf.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var carta2 = {
    nome: "Darth Vader",
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51H--lU9YGL.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2
    }
  };
  
  var carta3 = {
    nome: "Shiryu de Dragão",
    imagem: "https://omaringa.com.br/wp-content/uploads/2021/09/shiryu-1.jpg",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 10
    }
  };
  
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
    //console.log(cartaMaquina);
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
  
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirCartaJogador();
    /*exibirOpcoes();*/
  }
  
  /*function exibirOpcoes() {                       foi tirado porque a função "exibirCartaJogador" está exibindo as opções!!
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo;
      //console.log(atributo);
    }
    opcoes.innerHTML = opcoesTexto;
  }*/
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var resultadoFinal = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    if (valorCartaJogador > valorCartaMaquina) {
      divResultado = "<p class='resultado'>Você venceu!!</p>";
      /*divResultado.innerHTML = "Você venceu!!";*/
    } else if (valorCartaMaquina > valorCartaJogador) {
      divResultado = "<p class='resultado'>Você perdeu!!</p>";
      /*divResultado.innerHTML = "Você perdeu!";*/
    } else {
      divResultado = "<p class='resultado'>Empatou!</p>";
      /*divResultado.innerHTML = "Empatou";*/
    }
    console.log(resultadoFinal);
    resultadoFinal.innerHTML = divResultado;
    console.log(cartaMaquina);
  
    document.getElementById("btnJogar").disabled = true;
  
    exibirCartaMaquina();
  
    //console.log(atributoSelecionado);
    //console.log(cartaJogador.atributos[atributoSelecionado]);
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    //divCartaJogador.style.backgroundImage= " url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    //divCartaJogador.style.backgroundImage= " url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
  
      /*substitui a tag <input> por <p> e o type e troquei o nome "cartaJogador por cartaMaquina"*/
    }
  
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }