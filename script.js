const seccaoFotosLink = document.querySelector('#seccaoFotos-link');
  const picture = document.querySelector('.fundo img');

  seccaoFotosLink.addEventListener('mouseover', () => {
    picture.style.height = '400px';
  });

  seccaoFotosLink.addEventListener('mouseout', () => {
    picture.style.height = '0';
  });