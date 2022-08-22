const carreira = prompt('Você quer seguir na área de Front-End ou Back-End?');

if (carreira === 'Front-End') {
  const frontEnd = prompt('Quer aprender React ou Vue?');
} else if (carreira === 'Back-End') {
  const backEnd = prompt('Quer aprender C# ou Java?');
}

const especializar = prompt('Você deseja seguir se especializando na sua área? Responda S ou N');
if (especializar === 'S') {

  let i = false;
  let tecnologia = '';
  let maisTecnologia = '';

  while (i = false) {
    tecnologia = prompt('Quais tecnologias você deseja se especializar?');
    alert('`${tecnologia}` me parece ser bem legal!');

    maisTecnologia = prompt('Tem mais alguma tecnologia que você quer se especializar?');
    alert('${maisTecnologia} me parece ser bem legal!');

  } if (maisTecnologia === 'N') {
    i = true;
    alert('Muito bem! São todas tecnologias muito boas de se especializar.');
  };

} else if (especializar === 'N') {
  let i = false;

  while (i = false) {
    let conhecerTecnologia = prompt('Quais novas tecnologias deseja conhecer?');
    alert('`${conhecerTecnologia}` me parece ser bem legal!');

    let maisConhecerTecnologia = prompt('Tem mais alguma tecnologia que você gostaria de conhecer?');
    alert('${maisConhecerTecnologia} me parece ser bem legal!');

  } if (maisConhecerTecnologia === 'N') {
    i = true;
    alert('Muito bem! São todas tecnologias muito boas de se conhecer.');
  }
};