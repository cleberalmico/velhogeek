var elementos = document.querySelectorAll('[type=radio]');

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('change', (trocar)=>{
        let marcado = trocar.target.value;

        if(marcado == "correta"){
            let muda = trocar.target.parentNode;
            muda.style.backgroundColor = 'green';

            let els = muda.parentNode.querySelectorAll('[type=radio]');

            for(var j = 0; j < els.length; j++){
                els[j].disabled = true;
            }
        } else if(marcado == "incorreta"){
            let muda = trocar.target.parentNode;
            muda.style.backgroundColor = 'red';

            let els = muda.parentNode.querySelectorAll('[type=radio]');

            for(var j = 0; j < els.length; j++){
                els[j].disabled = true;
            }

            let correta = muda.parentNode.querySelector('[value=correta]');
            correta.parentNode.style.backgroundColor = 'green';
        }
    })
}