function launchNewGame (){

  let player = new Inventaire('bob');
  let Map1 = new Map(20,20,player);

  let testTerre = new ParceTerre();
  Map1.placerParcelle(1,1,testTerre); // Place une parcelle de terre en (1,1)


  // if clic pour labourer
  let newParceTerre = new ParceTerre();
  //testTerre.launchPousse(player.carotte, testTerre);
}

launchNewGame();

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
