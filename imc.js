function imc() {
    
        function operation() {
            
            let x = document.querySelector('.div1_imc').value
            let y = document.querySelector('.div2_imc').value

        return x / (y * y)

    }

    function classify() {
        
        if (operation() < 17) {
            return 'Muito Abaixo do Peso';
        } else if(operation() >= 17 && operation() < 18.50 ) {
            return 'Abaixo do Peso';
        } else if(operation() >= 18.50 && operation() < 25) {
            return 'Peso Normal';
        } else if (operation() >= 25 && operation() < 30) {
            return 'Acima do peso';
        } else if (operation() >= 30 && operation() < 35) {
            return 'Obesidade 1';
        } else if (operation() >= 35 && operation() < 40) {
            return 'Obesidade 2 (Severa)';
        } else if (operation() >= 40){
            return 'Obesidade 3 (Mórbida)';
        } else {
            return 'Digite os valores corretos para saber o seu IMC! <br> *coloque ponto, em vez de vírgula*';
        }
        
    }

    let button = document.querySelector('.buttonCalc')

    button.addEventListener('click', () => {
        
        let msgOne = document.querySelector('#outputOne')
        msgOne.innerHTML = '<p><b>Seu IMC é:</b><br>' + parseFloat(operation()).toFixed(2) + '<br><br><b>Classificação:</b><br>' + classify()
        
    })

    document.addEventListener('keyup', (e) => {
        if (e.key === 'Enter' || e.key === 'Tab') {
        
        let msgOne = document.querySelector('#outputOne')
        msgOne.innerHTML = '<p><b>Seu IMC é:</b><br>' + parseFloat(operation()).toFixed(2) + '<br><br><b>Classificação:</b><br>' + classify()
        }
    })

} imc();