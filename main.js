let player1 = new inventaire('bob');

console.log(player1.pseudo);
let Map1 = new Map(20,20,player1);

let testTerre = new ParceTerre();
//Map.placerParcelle(1,1,testTerre); // Place une parcelle de terre en (1,1)
testTerre.launchPousse(player1.carotte, testTerre);


/*
console.log("nb blé : " + player.blé.nb_poss);
console.log(player.get_Solde());

player.Achat(player.blé.name, 2, player.blé.prix);
console.log("nb blé : " + player.blé.nb_poss);
console.log(player.get_Solde());

player.Supp_Obj(player.blé.name, 1, 0);
console.log("nb blé : " + player.blé.nb_poss);
console.log(player.get_Solde());

player.Supp_Obj(player.blé.name, 1, 1);
console.log("nb blé : " + player.blé.nb_poss);
console.log(player.get_Solde());

player.Supp_Obj(player.blé.name, 1, 1);
console.log("nb blé : " + player.blé.nb_poss);
console.log(player.get_Solde());*/
