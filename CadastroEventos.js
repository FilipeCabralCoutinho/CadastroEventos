// ATIVIDADE DE CADASTRO DE EVENTOS

//VERIFICAÇÃO DE DATA DO EVENTO
let dataEvento = new Date('05/24/2022')
let dataHoje = new Date()

if(dataEvento > dataHoje) {
    console.log("Data permitida para cadastro")
    //VERIFICAÇÃO DE IDADE
    let idade = 25

    if (idade >= 18) {
        console.log('Idade permitida, podemos prosseguir com o cadastro.')
        // VERIFICAÇÃO DE QUANTIDADE DE PARTICIPANTES
        // Nome do evento: Palestra sobre como vencer os Illuminatis

    let listaParticipantes = ['Bolsonaro', 'Lula', 'Dilma', 'Temer', 'Ciro Gomes', 'Cabo Daciolo (palestrante)']

        for (let contador = 0; contador < listaParticipantes.length; contador++) {
            console.log(listaParticipantes[contador])    
        }   
        if (listaParticipantes.length < 100) {
            console.log('há vagas para este evento, ainda podemos cadastrar.')
        } else {
            console.log('O limite de participantes já excedeu, não podemos continuar com o cadastro.')
        }
    } else {
        console.log('Idade não permitida para cadastro.')
    }
} else {
    console.log("Data inválida, insira uma data posterior à data atual!")
}


// const dataSplit = dataEvento.split('/')
// const diaEvento = dataSplit[0];
// const mesEvento = dataSplit[1];
// const anoEvento = dataSplit[2];

// let dataAtual = new Date()
// let diaAtual = String(dataAtual.getDate()).padStart(2, '0');
// let mesAtual = String(dataAtual.getMonth() + 1).padStart(2, '0');
// let anoAtual = dataAtual.getFullYear();

// if (anoEvento >= anoAtual) {
//     if (anoEvento > anoAtual) {
//         console.log('Data permitida para cadastro')
//     } else { 
//         if (mesEvento >= mesAtual) {
//             if (mesEvento > mesAtual) {
//                 console.log('Data permitida para cadastro')  
//             } else {
//                 if (diaEvento > diaAtual) {
//                     console.log('Data permitida para cadastro')
//                 } else {
//                     console.log('Data inválida, insira uma data posterior à atual.')
//                 }                
//             }
//         } else {
//             console.log('Data inválida, insira uma data posterior à atual.')  
//         }
//     }
// } else { 
//     console.log('Data inválida, insira uma data posterior à atual.')
// }




