var americaMG = {
  time: "AméricaMG",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var athleticoPR = {
  time: "AthleticoPR",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var atleticoGO = {
  time: "AtleticoGO",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var atleticoMG = {
  time: "AtleticoMG",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var avai = { time: "Avaí", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var botafogo = {
  time: "Botafogo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var bragantino = {
  time: "Fortaleza",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var cearaSC = {
  time: "CearáSC",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var corinthians = {
  time: "Corinthians",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var coritiba = {
  time: "Coritiba",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var cuiaba = {
  time: "Cuiabá",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var flamengo = {
  time: "Flamengo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var fluminense = {
  time: "Fluminense",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var fortaleza = {
  time: "Fortaleza",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var goias = { time: "Goiás", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var internacional = {
  time: "Internacional",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var juventude = {
  time: "Juventude",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var palmeiras = {
  time: "Palmeiras",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var santos = {
  time: "Santos",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var saoPaulo = {
  time: "São Paulo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

//--------------------------------ANTES---------------------------------
//console.log(rafa);
//console.log(paulo);
//--------------------------------ANTES---------------------------------

americaMG.pontos = calculaPontos(americaMG);
athleticoPR.pontos = calculaPontos(athleticoPR);
atleticoGO.pontos = calculaPontos(atleticoGO);
atleticoMG.pontos = calculaPontos(atleticoMG);
avai.pontos = calculaPontos(avai);
botafogo.pontos = calculaPontos(botafogo);
bragantino.pontos = calculaPontos(bragantino);
cearaSC.pontos = calculaPontos(cearaSC);
corinthians.pontos = calculaPontos(corinthians);
coritiba.pontos = calculaPontos(coritiba);
cuiaba.pontos = calculaPontos(cuiaba);
flamengo.pontos = calculaPontos(flamengo);
fluminense.pontos = calculaPontos(fluminense);
fortaleza.pontos = calculaPontos(fortaleza);
goias.pontos = calculaPontos(goias);
internacional.pontos = calculaPontos(internacional);
juventude.pontos = calculaPontos(juventude);
palmeiras.pontos = calculaPontos(palmeiras);
santos.pontos = calculaPontos(santos);
saoPaulo.pontos = calculaPontos(saoPaulo);

function calculaPontos(time) {
  var pontos = time.vitorias * 3 + time.empates;
  return pontos; // quando chama função ela não vai ser executa, vai retornar um valor
}

//--------------------------------DEPOIS---------------------------------
//console.log(rafa);
//console.log(paulo);
//--------------------------------DEPOIS---------------------------------

var times = [
  americaMG,
  athleticoPR,
  atleticoGO,
  atleticoMG,
  avai,
  botafogo,
  bragantino,
  cearaSC,
  corinthians,
  coritiba,
  cuiaba,
  flamengo,
  fluminense,
  fortaleza,
  goias,
  internacional,
  juventude,
  palmeiras,
  santos,
  saoPaulo
];

//console.log(jogadores);

function exibeTimesNaTela(times) {
  var elemento = "";
  for (var i = 0; i < times.length; i++) {
    elemento += "<tr><td>" + times[i].time + "</td>";
    elemento += "<td>" + times[i].vitorias + "</td>";
    elemento += "<td>" + times[i].empates + "</td>";
    elemento += "<td>" + times[i].derrotas + "</td>";
    elemento += "<td>" + times[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaTimes = document.getElementById("tabelaTimes");
  tabelaTimes.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var time = times[i];
  time.vitorias++;
  time.pontos = calculaPontos(time);
  exibeTimesNaTela(times);
}

function adicionarEmpate(i) {
  var time = times[i];
  time.empates++;
  time.pontos = calculaPontos(time);
  exibeTimesNaTela(times);
}

function adicionarDerrota(i) {
  var time = times[i];
  time.derrotas++;
  exibeTimesNaTela(times);
}

//--------------------------------------------------------JOGOS-----------------------------------------------------------
/*var primeiraRodada = {
  jogo1: "Atlético-MG x Internacional",
  jogo2: "Fluminense x Santos",
  jogo3: "São Paulo x Athletico-PR",
  jogo4: "Palmeiras x Ceará",
  jogo5: "Botafogo x Corinthians",
  jogo6: "Juventude x Bragantino",
  jogo7: "Fortaleza x Cuibá",
  jogo8: "Atlético-GO x Flamengo",
  jogo9: "Avaí x América-MG",
  jogo10: "Curitiba x Goiás"
};*/

var primeiraRodada = [
  "Atlético-MG x Internacional",
  "Fluminense x Santos",
  "São Paulo x Athletico-PR",
  "Palmeiras x Ceará",
  "Botafogo x Corinthians",
  "Juventude x Bragantino",
  "Fortaleza x Cuibá",
  "Atlético-GO x Flamengo",
  "Avaí x América-MG",
  "Curitiba x Goiás"
];

/*var segundaRodada = {
  jogo1: "América-MG x Juventude",
  jogo2: "Flamengo x São Paulo",
  jogo3: "Bragantino x Atlético-GO",
  jogo4: "Corinthians x Avaí",
  jogo5: "Santos x Curitiba",
  jogo6: "Internacional x Fortaleza",
  jogo7: "Ceará x Botafogo",
  jogo8: "Goiás x Palmeiras",
  jogo9: "Cuiabá x Fluminense",
  jogo10: "Athletico-PR x Atlético-MG"
};*/

var segundaRodada = [
  "América-MG x Juventude",
  "Flamengo x São Paulo",
  "Bragantino x Atlético-GO",
  "Corinthians x Avaí",
  "Santos x Curitiba",
  "Internacional x Fortaleza",
  "Ceará x Botafogo",
  "Goiás x Palmeiras",
  "Cuiabá x Fluminense",
  "Athletico-PR x Atlético-MG"
];

/*var terceiraRodada = {
  jogo1: "Atlético-MG x Curitiba",
  jogo2: "Fluminense x Internacional",
  jogo3: "Bragantino x São Paulo",
  jogo4: "Palmeiras x Corinthians",
  jogo5: "Santos x América-MG",
  jogo6: "Juventude x Cuiabá",
  jogo7: "Fortaleza x Ceará",
  jogo8: "Atlético-GO x Botafogo",
  jogo9: "Avaí x Goiaís",
  jogo10: "Athletico-PR x Flamengo"
};*/

var terceiraRodada = [
  "Atlético-MG x Curitiba",
  "Fluminense x Internacional",
  "Bragantino x São Paulo",
  "Palmeiras x Corinthians",
  "Santos x América-MG",
  "Juventude x Cuiabá",
  "Fortaleza x Ceará",
  "Atlético-GO x Botafogo",
  "Avaí x Goiaís",
  "Athletico-PR x Flamengo"
];

var rodadas = [primeiraRodada, segundaRodada, terceiraRodada];

function rodada1(primeiraRodada) {
  var elemento = "";
  for (var i = 0; i < primeiraRodada.length; i++) {
    elemento += "<li>" + primeiraRodada[i] + "</li>";
    /*elemento += "<li>" + primeiraRodada[i] + "</li>";
    elemento += "<li>" + primeiraRodada[i] + "</li>";
    elemento += "<li>" + primeiraRodada[i] + "</li>";
    elemento += "<li>" + primeiraRodada[i] + "</li>";
    elemento += "<li>" + primeiraRodada[i] + "</li>";
    elemento += "<li>" + primeiraRodada[i] + "</li>";
    elemento += "<li>" + primeiraRodada[i] + "</li>";
    elemento += "<li>" + primeiraRodada[i] + "</li>";
    elemento += "<li>" + primeiraRodada[i] + "</li></ul>";*/
  }
  var listaJogos = document.getElementById("listaJogos");
  listaJogos.innerHTML = elemento;
}

function proximaRodada(i) {
  var elemento = "";
  for (var i = 0; i < segundaRodada.length; i++) {
    elemento += "<li>" + segundaRodada[i] + "</li>";
  }
  var listaJogos = document.getElementById("listaJogos");
  listaJogos.innerHTML = elemento;
}

/*function proximaRodada(i) {
  var elemento = "";
  for (var i = 0; i < terceiraRodada.length; i++) {
    elemento += "<li>" + terceiraRodada[i] + "</li>";
  }
  var listaJogos = document.getElementById("listaJogos");
  listaJogos.innerHTML = elemento;
}*/

exibeTimesNaTela(times); //  chama a function
rodada1(primeiraRodada);
