class inventaire extends joueur{
    constructor() {
        super();
    // Graines :
        this.patate = {name : "patate", type : "graine", prix : 50, nb_poss : 2, growTime : 50, nb_recolte : 10};
        this.salade = {name : "salade", type : "graine", prix : 80, nb_poss : 0, growTime : 50, nb_recolte : 10};
        this.carotte = {name : "carotte", type : "graine", prix : 100, nb_poss : 0, growTime : 50, nb_recolte : 10};
        this.pomme = {name : "pomme", type : "graine", prix : 150, nb_poss : 0, growTime : 50, nb_recolte : 10};
        this.tournesol = {name : "tournesol", type : "graine", prix : 200, nb_poss : 0, growTime : 50, nb_recolte : 10};
        this.blé = {name : "blé", type : "graine", prix : 200,  nb_poss : 0, growTime : 50, nb_recolte : 10};

        // Recolte :
        this.patatef = {name : "patate", type : "finie", nb_poss : 0};
        this.saladef = {name : "salade", type : "finie", nb_poss : 0};
        this.carottef = {name : "carotte", type : "finie", nb_poss : 0};
        this.pommef = {name : "pomme", type : "finie", nb_poss : 0};
        this.tournesolf = {name : "tournesol", type : "finie", nb_poss : 0};
        this.bléf = {name : "blé", type : "finie",  nb_poss : 0};

    // Autres :
        this.tracteur_silencieux = {name : "fractor", type : "install", prix : 3000,  nb_poss : 0};
    }

    Ajouter_Obj(nom, nb){
        switch(nom){
            case "patate" :
                this.patate.nb_poss += nb;
                break;
            case "salade" :
                this.salade.nb_poss += nb;
                break;
            case "carotte" :
                this.carotte.nb_poss += nb;
                break;
            case "pomme" :
                this.pomme.nb_poss += nb;
                break;
            case "tournesol" :
                this.tournesol.nb_poss += nb;
                break;
            case "blé" :
                this.blé.nb_poss += nb;
                break;
        }
    }

    Ajouter_Obj_Recolté(nom, nb){
        switch(nom){
            case "patate" :
                this.patatef.nb_poss += nb;
                break;
            case "salade" :
                this.saladef.nb_poss += nb;
                break;
            case "carotte" :
                this.carottef.nb_poss += nb;
                break;
            case "pomme" :
                this.pommef.nb_poss += nb;
                break;
            case "tournesol" :
                this.tournesolf.nb_poss += nb;
                break;
            case "blé" :
                this.bléf.nb_poss += nb;
                break;
        }
    }

    Supp_Obj(nom, nb, vendre){
        switch(nom){
            case "patate" :
                this.patatef.nb_poss -= nb;
                if(vendre)
                    this.set_Solde_up(this.patate.prix/2, nb);
                break;
            case "salade" :
                this.saladef.nb_poss -= nb;
                if(vendre)
                    this.set_Solde_up(this.salade.prix/2, nb);
                break;
            case "carotte" :
                this.carottef.nb_poss -= nb;
                if(vendre)
                    this.set_Solde_up(this.carotte.prix/2, nb);
                break;
            case "pomme" :
                this.pommef.nb_poss -= nb;
                if(vendre)
                    this.set_Solde_up(this.pomme.prix/2, nb);
                break;
            case "tournesol" :
                this.tournesolf.nb_poss -= nb;
                if(vendre)
                    this.set_Solde_up(this.tournesol.prix/2, nb);
                break;
            case "blé" :
                this.bléf.nb_poss -= nb;
                if(vendre)
                    this.set_Solde_up(this.blé.prix/2, nb);
                break;
        }
    }
    Achat(nom, nb, prix){
        if(super.get_Solde() >= prix * nb)
        {
            this.Ajouter_Obj(nom, nb);
            super.set_Solde_down(prix, nb);
        }
        else console.log("Fond insuffisant");
    }
}
