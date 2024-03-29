let xp = 10000;
let heroi = "Gamoar";
let niveis = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal"];
let Ranks = [1000,2000,5000,7000,8000,9000,10000];
let nivel;

for(let i = 0; i<niveis.length;i++){
    if(xp<=Ranks[i]){
        nivel = niveis[i]
        break
    }
    if(xp>10000){
        nivel = "Radiante"
    }
}
// switch (true) {
//     case xp === 900:
//         nivel = "Ferro";
//         break;
//     case xp <= 2000:
//         nivel = "Bronze";
//         break;
//     case xp <= 5000:
//         nivel = "Prata";
//         break;
//     case xp <= 7000:
//         nivel = "Ouro";
//         break;
//     case xp <= 8000:
//         nivel = "Platina";
//         break;
//     case xp <= 9000:
//         nivel = "Ascendente";
//         break;
//     case xp <= 10000:
//         nivel = "Imortal";
//         break;
//     case xp > 10000:
//         nivel = "Radiante";
//         break;
// }
console.log(`O Herói de nome ${heroi} está no nível de ${nivel}!`);