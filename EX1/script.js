function criarParagrafo() 
        {
            let para = document.createElement('P');
            para.textContent = 'null';
            document.body.appendChild(para);
        }      

        const botoes = document.querySelectorAll('button')
        for(var i = 0; i < botoes.length ; i++)
        {
            botoes[i].addEventListener('click')
        }

