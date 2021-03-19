class Map {
  constructor(longueur, largeur, player){
    this.tabMap = new Array(longueur);

    //Création Map tab 2 dimensions
    for (var i = 0; i < this.tabMap.length; i++) {
      this.tabMap[i] = new Array(largeur);
    }

    //Initialiser toutes les cases en herbe :
    for (var i = 0; i < longueur.length; i++) {
      for (var j = 0; j < largeur.length; j++) {
        this.tabMap[i][j] = new Parcelle(1,1,player); // de base herbe dans le constructor de Parcelle()
      }
      afficherMap();
    }

  }
  placerParcelle(indiceX, indiceY,parcelle){
    this.tabMap[indiceX][indiceY].onclick = parcelle;
  }

  afficherMap(){
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length; j++) {
        //
      }
    }
  }
}



class Parcelle{
  //Attributs d'une parcelle :

  constructor(hauteur,largeur,player){
    this.hauteur = hauteur;
    this.largeur = largeur;
    this.appearance = 'herbe.png';
    this.plantable = false;
    this.player = player;
  }

  afficherParcelle(indiceX, indiceY,map){
    //map.tabMap[indiceX][indiceY]
  }

}

class ParceTerre extends Parcelle {
  constructor(){
    super(1,1);
    this.appearance = 'terre.png';
    this.plantable = true;
  }

  launchPousse(graine, parcelledeterre){
    //graine = new Carotte();
    parcelledeterre = new ParcePousse(graine, parcelledeterre, this.player);

  }
}

function wait(i) {
  setTimeout(function() {
  }, 1000 * i); // fonction delay de 1 seconde
}

class ParcePousse extends Parcelle {


  constructor(graine,parcelle){
    super(1,1);

    this.graineChoisie;
    this.pousseFinie = false;
    this.timerPousse = 0;

    if(parcelle.plantable == true){
      parcelle.appearance = 'pousses.png'
      this.graineChoisie = graine;

      poussePlante(parcelle);
    }

    else {
      console.log("Vous ne pouvez pas planter sur cette case");
    }
  }

  poussePlante(parcellequipousse){
    while (this.timerPousse < this.player.graineChoisie.growTime && this.pousseFinie == false) { // Si le timer est inférieur au temps de pousse
    wait(i); //attendre une seconde
     this.timerPousse++; // timer += 1 seconde
  }
  this.pousseFinie = true;
  recolte(parcellequipousse); // Appel de la fonction qui change l'image de la parcelle et donne les récompenses
}

  recolte(parcellePrete){
    if(this.pousseFinie == true){
      this.appearance = 'poussesFinies.png'

      parcellePrete.onclick = function(){
        this.player.Ajouter_Obj_Recolté(graineChoisie.name,graineChoisie.nb_recolte); // ajoute le produit fini à l'inventaire
        console.log("récolte effectuée, Vous avez gagné  = " + this.player.solde);
      }; // Donne de l'argent et les ressources au joueur (classe Player) au moment du clic sur la parcelle passée en parametre
    }
  }

}
