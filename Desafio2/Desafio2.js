
let ranks = ["Ferro","Bronze","Prata","Ouro","Diamante","Lendário"];
let rankedParameters = ["10","20","50","80","90","100"];
let totalWins = rankedCalculation (75,22);
let nivel;

for(let i = 0; i<ranks.length;i++){
        if(totalWins<=rankedParameters[i]){
            nivel = ranks[i]
            break
        }
        if(totalWins>100){
            nivel = "Radiante"
        }
    }
console.log(`O heroi tem de saldo de ${totalWins} está no nível de ${nivel}`);

function rankedCalculation(wins,defeats){
        return wins-defeats;
}