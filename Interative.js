function ValidaCPF() {
    //Tags do HTML passadas para variáveis
    this.inputCpf = document.querySelector('.input-cpf');
    this.btnValida = document.querySelector('.btn-validador');
    this.btnClear = document.querySelector('.btn-clear');
    this.cpfValido = document.querySelector('.valido');
    this.cpfInvalido = document.querySelector('.invalido')

    this.btnValida.addEventListener('click', () => {
        //Conversão do valor do input de string para array
        this.cpf = this.inputCpf.value
        this.cpfArray = Array.from(this.cpf);
        this.cpfFatiado1 = this.cpfArray.slice(0, -2); 
        this.cpfFatiado2 = this.cpfArray.slice(0, -1);

        //Função para obter o decimo dígito do cpfCópia
        function digito1(valor) {   
            this.contador = 10;
            this.somaDigito1 = valor.reduce((ac, valor) => {
                ac += this.contador * valor;
                --this.contador;
                return ac;
            },0)
            this.resultadoDigito1 = 11 - (this.somaDigito1 % 11)
            return this.resultadoDigito1;
        }

        //Função para obter o decimo primeiro dígito do cpfCópia
        function digito2(valor) {
            this.contador = 11;
            this.somaDigito2 = valor.reduce((ac, valor) => {
                ac += this.contador * valor;
                --this.contador;
                return ac;
            },0)
            this.resultadoDigito2 = 11 - (this.somaDigito2 % 11)
            return this.resultadoDigito2;
        }

        // Função para adicionar os digitos no cpf que foi fatiado 
        function adicaoDigito(digito1, digito2, array) {
            this.arrayBrutoCPF = [...array];
            if(digito1 > 9) {
                this.arrayBrutoCPF.push(0)
            } else {
                this.arrayBrutoCPF.push(digito1)
            }

            if(digito2 > 9) {
                this.arrayBrutoCPF.push(0)
            } else {
                this.arrayBrutoCPF.push(digito2)
            }
            this.stringArray = this.arrayBrutoCPF.join('');
            return this.stringArray;
        }

        //Validação de 11 digitos e a copia estando igual a original
        function validacao(cpfCopia, cpfOriginal, cpfValido, cpfInvalido) {
            if(cpfOriginal.length !== 11) return alert('Números de caracteres inválido!');
            if(cpfCopia === cpfOriginal) {
                cpfValido.classList.add('ativo');
            } else {
                cpfInvalido.classList.add('ativo');
            }
        }

        //Inicialização das funções
        this.valorDigito1 = digito1(this.cpfFatiado1);
        this.valorDigito2 = digito2(this.cpfFatiado2);
        this.arrayCopia = adicaoDigito(this.valorDigito1, this.valorDigito2, this.cpfFatiado1)
        validacao(this.arrayCopia, this.cpf, this.cpfValido, this.cpfInvalido, )
    })
    //Botão de clear
    this.btnClear.addEventListener('click', () => {
        this.inputCpf.value = '';
        this.cpfValido.classList.remove('ativo');
        this.cpfInvalido.classList.remove('ativo');
    })
}

const cpf = new ValidaCPF()
