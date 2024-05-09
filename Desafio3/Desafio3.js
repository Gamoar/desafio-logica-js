
class heroi{
    constructor(nomeHeroi,idadeHeroi,tipoHeroi){
        this.nome= nomeHeroi;
        this.idade= idadeHeroi;
        this.tipo= tipoHeroi;
    }
    atacar(){
        if(this.tipo=="Mago"){  
            console.log(`O ${this.tipo} atacou usando Magia!`);
        }
        else if (this.tipo=="Guerreiro"){
            console.log(`O ${this.tipo} atacou usando Espada!`);
        }
        else if(this.tipo=="Monge"){  
            console.log(`O ${this.tipo} atacou usando Artes marciais!`);
        }else{
            console.log(`O ${this.tipo} atacou usando Shuriken!`);    
        }
    }
}
const himmel = new heroi("Himmel",22,"Monge");
himmel.atacar()