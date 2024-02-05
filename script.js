// while (true) {
//     const menu = Number(prompt("Escolha uma opção de figura geometrica para que eu calcule a sua área: \n1-Triângulo \n2-Retângulo \n0-Sair"))

//     if (menu === 1) {
//         const altura_tri = Number(prompt("Diga-me a altura do triângulo em centimetros:"))
//         const base_tri = Number(prompt("Diga-me a base do triângulo em centimetros:"))
//         console.log(`A área do seu triângulo é igual a: ${base_tri*altura_tri/2} cm.`);
//         break
//     }else if (menu === 2) {
//         const altura_ret = Number(prompt("Diga-me a altura do retâgulo em centimetros:"))
//         const base_ret = Number(prompt("Diga-me a base do retângulo em centimetros:"))
//         console.log(`A área do seu retângulo é igual a: ${base_ret*altura_ret} cm.`);
//         break
//     } else if(menu === 0){
//         console.log("Até a próxima!");
//         break
//     }else{
//         alert("Opção Inválida! \nDigite novamente:");
//     }
// }

const nome = prompt("Digite seu nome:")
let saldo_atual = 1000

while (true) {
    const menu = Number(prompt(`Bem-vindo, Sr. ${nome}! \nDigite um dos números a seguir para realizar a movimentação desejada em seu banco: '\n1-Saldo Atual \n2-Saque \n3-Depósito \n0-Sair`))

    if (menu === 1) {
        alert(`O seu saldo atual é de R$ ${saldo_atual}`)
    }
    else if(menu === 2){
        let saque = Number(prompt("Quanto deseja sacar?"))

        if (saque > 0 && saque <= saldo_atual) {
         saldo_atual = saldo_atual - saque         
         alert(`Saque no valor de R$ ${saque} realizado com sucesso!`)

        } else{
            alert("Valor inválido. Por favor, digite novamente!");
        }     
    }else if (menu === 3) {
        let deposito = Number(prompt("Quanto deseja depositar?"))
        if (deposito > 0) {
            saldo_atual = saldo_atual + deposito
            alert(`Valor de R$ ${deposito} depositado`);
        } else{
            alert("Valor inválido. Por favor, digite novamente!");
        }
    }else if(menu === 0){
        alert("Até a próxima!")
        break
    } else{
        alert("Opção Inválida. Por favor, digite novamente!")
    }
} 