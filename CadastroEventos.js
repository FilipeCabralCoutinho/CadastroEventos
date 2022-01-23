// ATIVIDADE DE CADASTRO DE EVENTOS

//VERIFICAÇÃO DE DATA DO EVENTO
let dataEvento = '24/05/2022'
const dataSplit = dataEvento.split('/')
const diaEvento = dataSplit[0];
const mesEvento = dataSplit[1];
const anoEvento = dataSplit[2];

let dataAtual = new Date()
let diaAtual = String(dataAtual.getDate()).padStart(2, '0');
let mesAtual = String(dataAtual.getMonth() + 1).padStart(2, '0');
let anoAtual = dataAtual.getFullYear();

if (anoEvento >= anoAtual) {
    if (anoEvento > anoAtual) {
        console.log('Data permitida para cadastro')
    } else { 
        if (mesEvento >= mesAtual) {
            if (mesEvento > mesAtual) {
                console.log('Data permitida para cadastro')  
            } else {
                if (diaEvento > diaAtual) {
                    console.log('Data permitida para cadastro')
                } else {
                    console.log('Data inválida, insira uma data posterior à atual.')
                }                
            }
        } else {
            console.log('Data inválida, insira uma data posterior à atual.')  
        }
    }
} else { 
    console.log('Data inválida, insira uma data posterior à atual.')
}

//VERIFICAÇÃO DE IDADE
let idade = 25

if (idade < 18) {
    console.log('Idade não permitida para cadastro.')
} else {
    console.log('Idade permitida, podemos prosseguir com o cadastro')
}

// VERIFICAÇÃO DE QUANTIDADE DE PARTICIPANTES
let quantidadeParticipantes = 80

if (quantidadeParticipantes < 100) {
    console.log('há vagas para este evento, ainda podemos cadastrar.')
} else {
    console.log('O limite de participantes já excedeu, não podemos continuar com o cadastro.')
}
