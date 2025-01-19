/*Algoritme*/
/*class dans lequel on defini le nom , les pv, la puissance d'attaque et la precision de chaque combatant*/
class guerrier {
    constructor (nom,pv,attack,precision) {
        this.nom = nom
        this.pv = pv
        this.attack = attack
        this.precision = precision
    }

   /* cette commande va permettre de randomiser la precision des attack*/
    getprecision(){
        if (this.precision>=Math.random()){
            return true
        }else{
            return false
        }
    }
}

/* les deux combattant sont relier à la classe avec toute leurs info*/
let Lion = new guerrier ("Lion",15,15,0.5)
let Soldat = new guerrier ("Soldat",20,10,0.25)

/*apelle du combat dans la console*/
console.log(combat(Lion,Soldat))

function combat(Lion,Soldat){
  /*algorithme qui fait que si les pv du lion et du soldat ne sont pas à 0 ou en desous, de continuer le combat*/
    while (Lion.pv>=0 && Soldat.pv>=0){
      /*appel à la commande de precision, si l'attaque touche, elle retire le nombre de pv de l'attaque*/
        if (Lion.getprecision()){
            Soldat.pv-=Lion.attack
            console.log("le "+Lion.nom+" attaque, il reussis à toucher ça cible il lui inflige alors "+Lion.attack+" point de dégats, il reste alors "+Soldat.pv+"pv à l'adverser")
          /* si les pv sotn en dessous ou egale à 0 alors la chaine se casse et passe à la suite*/
            if (Soldat.pv<=0){
                break
            }
          /*en cas d'echec de l'attaque, le combat passe à l'autre combattant*/
        }else{
            console.log("le "+Lion.nom+" attaque, il loupe ça cible")
        }
      /*Le combat continue de la meme façon que precedement*/
        if (Soldat.getprecision()){
            Lion.pv-=Soldat.attack
            console.log("le "+Soldat.nom+" attaque, il reussis à toucher ça cible il lui inflige alors "+Soldat.attack+" point de dégats, il reste alors "+Lion.pv+"pv à l'adverser")
            if (Lion.pv<=0){
                break
            }
        }else{
            console.log("le "+Soldat.nom+" attaque, il loupe ça cible")
        }
    }
  /*suit à la fin de la boucle du à un combatant à 0 pv ou en dessous, le gagant (qui à plus de pv) lance l'algoritme qui annonce le gagnant*/
    if (Lion.pv<=0){
        console.log("le " + Soldat.nom + " a gagné, il lui restait "+Soldat.pv+"pv")
    }else{
        console.log("le " + Lion.nom + " a gagné, il lui restait "+Lion.pv+"pv")
    }
}