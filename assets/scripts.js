function calculadora() {

    const operacao = Number(prompt('Escolha uma opção:\n 1 - Soma (+) \n 2 - Subtração(-) \n 3 - Multiplicação(*) \n 4 - Divisão Inteira(/) \n 5 - Divisão Real(%) \n 6 - Potenciação(**)'));

    if(!operacao || operacao>=7){
        alert('erro: operação inválida');
        calculadora();
    } else{

        let n1 = Number(prompt('Insira o Primeiro valor:'));
        let n2 = Number(prompt('Insira o Segundo valor:'));
        let resultado;        

        if (!n1 || !n2){
         alert(`erro: parâmetros inválidos`);
         calculadora();

        }else {
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoInteira(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoReal(){
                resultado = n1 % n2;
                alert(`${n1} % ${n2} = ${resultado}`);
                novaOperacao();
            }

            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} ** ${n2} = ${resultado}`);
                novaOperacao();
            }

            function novaOperacao(){
                let opcao = prompt(`Deseja fazer uma nova operação? \n 1 - Sim \n 2 - Não`);     1

                if(opcao ==1){
                    calculadora();
                    } else if(opcao ==2){
                        alert(`Até Mais!`);

                    }else{
                        alert(`Digite uma opção válida!`);
                        novaOperacao();
                    }
                }             
        }
    }

        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
    }
}

calculadora();
 