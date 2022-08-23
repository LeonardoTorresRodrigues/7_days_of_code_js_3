const carreira = prompt('Você quer seguir na área de Front-End ou Back-End? Digite o nome da área:');
let linguagem = '';

if (carreira === 'Front-End') {
  linguagem = prompt('Quer aprender React ou Vue?');
} else if (carreira === 'Back-End') {
  linguagem = prompt('Quer aprender C# ou Java?');
} else {
  alert('Você não inseriu uma área válida!')
}

const especialidadeOuFullstack = prompt('Você deseja seguir se especializando na sua área ou deseja se tornar Fullstack? Digite "1" para se especializar ou "2" para Fullstack.');

if (especialidadeOuFullstack == 1) {
  alert(`Continue se especializando em ${linguagem} para dominar a área de ${carreira}!`);
} else if (especialidadeOuFullstack == 2) {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tronar Fullstack!`);
} else {
  alert('Você não inseriu um valor válido!');
};

let msg = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite "ok" em caso positivo.');

while (msg === 'ok') {
  let novaTecnologia = prompt('Qual?');
  alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`);
  msg = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite "ok" em caso positivo.');
};