class Map{
    constructor(longueur, largeur, player) {
        this.tabMap = new Array(longueur);

        //Création Map tab 2 dimensions
        for (var i = 0; i < this.tabMap.length; i++) {
            this.tabMap[i] = new Array(largeur);
        }

        //Initialiser toutes les cases en herbe :
        for (var i = 0; i < longueur.length; i++) {
            for (var j = 0; j < largeur.length; j++) {
                this.tabMap[i][j] = new Parcelle(1, 1, player); // de base herbe dans le constructor de Parcelle()
                this.tabMap[i][j].addEventListener(click => {
                    this.launchParceterre( this.tabMap[i][j]);
                })
            }
            //afficherMap();
            for (var i = 0; i < array.length; i++) {
                for (var j = 0; j < array.length; j++) {
                    document.write(" X ");
                }
                document.write("<br>")
            }
        }
    }

    placerParcelle(indiceX, indiceY, parcelle) {
        this.tabMap[indiceX][indiceY] = parcelle;
    }

    afficherMap() {
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array.length; j++) {
                switch(this.tabMap[i][j]){
                    case typeof (this.tabMap[i][j]) instanceof Parcelle :
                        document.write();
                        break;
                    case typeof (this.tabMap[i][j]) instanceof ParceTerre :
                        document.write();
                        break;
                    case typeof (this.tabMap[i][j]) instanceof ParcePousse :
                        document.write();
                        break;
                }
            }
        }
    }
}

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

class Parcelle{
    //Attributs d'une parcelle :

    constructor(hauteur, largeur, player) {
        this.hauteur = hauteur;
        this.largeur = largeur;
        this.appearance = 'herbe.png';
        this.plantable = false;
        this.player = player;
    }
    launchParceterre(parcelle){
                                                                                                        /*
                                                                                                           ANIMATION LABOUREUR
                                                                                                         */
        wait(0.5);
        parcelle = new ParceTerre();                    // a la place de cliquer sur la terre et ça launchPousse, il faudrai que sa pop up les graines où nb_poss > 0 et addeventlistener sur tt les graines, qui click=> launchpousse et comme ça la tu recup grainechoisie
        parcelle.addEventListener(click =>{
            this.launchPousse(this.graineChoisie, parcelle);    // Graine choisie correspond ??
        })
    }
    afficherParcelle(indiceX, indiceY, map) {
        //map.tabMap[indiceX][indiceY]
    }
}

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

class ParceTerre extends Parcelle {
    constructor() {
        super();
        this.appearance = 'terre.png';
        this.plantable = true;
    }

    launchPousse(graine, parcelledeterre) {
                                                                                                        /*
                                                                                                            ANIMATION TRACTEUR
                                                                                                         */
        wait(0.5);
        parcelledeterre = new ParcePousse(graine, parcelledeterre, this.player);
        parcelledeterre.addEventListener(click =>{                                  // Il faut arroser avant pousseplante limite clicker sur un arrosoir qui lui addevent pousseplante
            this.poussePlante(parcelledeterre);
        })
    }
}

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

class ParcePousse extends Parcelle {
    constructor(graine, parcelle, player) {
        super(1,1);
        this.graineChoisie = graine;
        this.eau = 100;
        this.pousseFinie = false;
        this.timerPousse = 0;
        this.player = player;

        if (parcelle.plantable == true) {
            switch(this.graineChoisie.name){
                case "patate" :
                    parcelle.appearance = "pousse_patate.png"
                    break;
                case "salade" :
                    parcelle.appearance = "pousse_salade.png"
                    break;
                case "carotte" :
                    parcelle.appearance = "pousse_carotte.png"
                    break;
                case "pomme" :
                    parcelle.appearance = "pousse_pomme.png"
                    break;
                case "tournesol" :
                    parcelle.appearance = "pousse_tournesol.png"
                    break;
                case "blé" :
                    parcelle.appearance = "pousse_blé.png"
                    break;
            }
          }
        else {
            console.log("Vous ne pouvez pas planter sur cette case");
        }
    }

    poussePlante(parcellequipousse) {
        this.timerPousse = new Date();
          console.log("date :" + this.timerPousse);
        while (this.timerPousse < this.timerPousse + this.player.growTime) { // Si le timer est inférieur au temps de pousse

            // à moitié pousse : stopper tant quil a pas mis dengrais
                                                    // puis dès que tu mets l'eau => la t'as le png du plant bien géchar et tu sors direct du while pour recolter



        }
        this.pousseFinie = true;
        recolte(parcellequipousse); // Appel de la fonction qui change l'image de la parcelle et donne les récompenses
    }

    launchRedirt(Parcepouss){
        Parcepouss = new ParceTerre();
    }

    recolte(parcellePrete) {
        if (this.pousseFinie == true) {
            this.appearance = 'poussesFinies.png'

            parcellePrete.onclick = function () {
                this.player.Ajouter_Obj_Recolté(graineChoisie.name, graineChoisie.nb_recolte); // ajoute le produit fini à l'inventaire
                console.log("récolte effectuée, Vous avez gagné  = " + this.player.solde);
                wait(1);
                this.launchRedirt()
            }; // Donne de l'argent et les ressources au joueur (classe Player) au moment du clic sur la parcelle passée en parametre
        }
    }
}

// fonction delay de i seconde
function wait(i) {
    setTimeout(function () {
    }, 1000 * i);
}
