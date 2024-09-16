let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de terror?");
  campoAventura = createCheckbox("Gosta de ação?");
}

function draw() {
  background("lavender");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(255, 100, 100));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Five Night at Freddy's"
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Gremlins";          
        } else{
         return "Jogos Vorazes";
        }
      } else {
        if (gostaDeFantasia) {
          return "Coraline e o Mundo Secreto";
        } else {
          return "A Fera do Mar ";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A Noiva-Cadáver";
    } else {
      return "Minions 2: A Origem de Gru ";
    }
  }
}