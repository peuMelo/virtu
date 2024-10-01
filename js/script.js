window.addEventListener('load', () => {
  
  window.scrollTo(0, 0);

  
  window.addEventListener('hashchange', () => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));

      
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });

       
        if (history.replaceState) {
          history.replaceState(null, null, window.location.pathname);
        }
      }
    });
  });
});


/* Visualizador***********************************************************/

function preCarregarImagens(miniaturas) {
  miniaturas.forEach(miniatura => {
    const img = new Image();
    img.src = miniatura.getAttribute('data-src');
  });
}



function criaVisualizador() {
  let miniaturas = document.querySelectorAll('.abreVisualizador');
  preCarregarImagens(miniaturas); 

  let body = document.querySelector('body');

  //Percorre toda a NodeList das miniaturas:
  miniaturas.forEach(miniatura => {
    
    miniatura.addEventListener('click', () => {
      //cria a div do visualizador:
     const visualizador = document.createElement('div');
     visualizador.classList.add('visualizador');
  
     //Cria a imagem.
     const imagem = document.createElement('img');
     let dataIndex = Number(miniatura.getAttribute('data-index'));
     imagem.src = miniaturas[dataIndex].getAttribute('data-src');
     
     //Adiciona a imagem ao visualizador:
     visualizador.appendChild(imagem);
  
     //cria o botão "x" para fechar o visualizador:
     const botaoX = document.createElement('span');
     botaoX.classList.add('botaoX');
     botaoX.textContent = "X";
     //Adiciona a função do "botão X":
     botaoX.addEventListener('click', () => {
      visualizador.remove();
     });

     //Adiciona o "botaoX" ao visualizador:
     visualizador.appendChild(botaoX);
   
          /* Navegação ***************************************/

     //função para muadar a imagem:
     function mudaImagem() {
      imagem.classList.add('fade-out');

      setTimeout(() => {
        imagem.src = miniaturas[dataIndex].getAttribute('data-src');
        imagem.classList.remove('fade-out');
        
      }, 500);
     }

     
     //Cria botão de anterior:
     const anterior = document.createElement('button');
     anterior.textContent = '<';
     anterior.classList.add('anterior');
     anterior.addEventListener('click', () => {
      if (dataIndex > 0) {
        dataIndex--;
        mudaImagem();
      } else if ( dataIndex === 0) {
        dataIndex = miniaturas.length - 1;
        mudaImagem();
      }
      
     });

     visualizador.appendChild(anterior);

     //Cria botão de próximo:
     const proximo = document.createElement('button');
     proximo.textContent = '>';
     proximo.classList.add('proximo');
     proximo.addEventListener('click', () => {
      if (dataIndex < miniaturas.length - 1) {
        dataIndex++;
        mudaImagem();
      } else if ( dataIndex === miniaturas.length - 1) {
        dataIndex = 0;
        mudaImagem();
      }
      
     });

     visualizador.appendChild(proximo);

     /* *************************************************/
   
     //adiciona o visualizador ao body:
     body.appendChild(visualizador);
    });
  });
}

criaVisualizador();

/* *************************************************************************/