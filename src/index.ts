// let montantEnChiffreOuTouteLettre : string | number;

// montantEnChiffreOuTouteLettre = "Cinquante";

// console.log(montantEnChiffreOuTouteLettre);

// montantEnChiffreOuTouteLettre = 50;

// console.log(montantEnChiffreOuTouteLettre);



// TABLEAU

// let nombres : number[] = [];

// nombres.push(12)


// console.log(nombres);


// OBJECT

// let personne: { nom: string; age: string };

// let personne2: object

// personne = {
//     nom: "Kevin",
//     age: "12"
// }

// console.log(personne);

// let personne3: { nom: string; age: string }[];

// personne3 = [
//     {
//         nom: "Kevin",
//         age: "12"
//     },
//     {
//         nom: "Nash",
//         age: "21"
//     }
// ]

// console.log(personne3);

// let personne4: { nom: string; age: string; compétences?: string[] };

// personne4 = {
//     nom: "Kevin",
//     age: "12",
//     compétences: ["JS", "TypeScript"]
// }


// console.log(personne4);



// FONCTION

// function sommeDe2Nombres(nbre1: number, nbre2: number) {
//     console.log(`La somme est ${nbre1 + nbre2}`);
// }

// sommeDe2Nombres(5, 4)

// const sommeDe2Nombres2 = (nbre1: number, nbre2: number) => {
//     return nbre1 + nbre2;
// }

// console.log(sommeDe2Nombres2(5, 8)) 

// CLASSE

// class DrcMindMember {
//     constructor(public nom: string, public postNom: string, readonly age: number) { }

//     afficherMembreAvecCours = (cours: string) => {
//         return `${this.nom} ${this.postNom} suit le cours de ${cours} et a ${this.age}ans`
//     }
// }

// const membre = new DrcMindMember("Kevin", "Massongo", 23);
// const membre1 = new DrcMindMember("Amani", "Bisimwa", 21);

// console.log(membre.afficherMembreAvecCours("TypeScript"));
// console.log(membre1.afficherMembreAvecCours("React"));
// console.log(membre1.nom);


// // CLASS en mode HERITAGE

// class DrcMindAdmin extends DrcMindMember {
//     constructor(nom: string, postNom: string, age: number) {
//         super(nom, postNom, age) /* Permettant d'initialiser le constructeur de DrcMindMembre */
//     }

//     creerUnCours = (cours: string) => `Il (elle) bosse sur ${cours}`
// }

// const admin = new DrcMindAdmin("Kevin", "Nash", 100)

// console.log(admin.creerUnCours("Node"));

// interface Personne {
//     nom : string;
//     postNom : string;
//     age ?: number;
// }

// PREMIERE FACON

// class DrcMindAdmin implements Personne {
//     constructor(public nom: string, public postNom: string, public age: number) {}

//     marcher(): string {
//         return 'Bonjour le monde'
//     }

//     creerUnCours = (cours: string) => `Il (elle) bosse sur ${cours}`
// }

// const admin = new DrcMindAdmin("Kevin", "Nash", 80)

// console.log(admin.marcher());

// DEUXIEME FACON

// const personne : Personne = {
//     nom : "Kevin",
//     postNom : "Nash",
//     age : 20,
// }

// console.log(personne);

// TYPE avec Enum

// type Personne = {
//     nom : string;
//     postnom : string;
//     age?: number;
//     role : RoleUtilisateur
// }

// enum RoleUtilisateur {
//     EDITOR, 
//     ADMIN, 
//     USER, 
//     VIEWER
// }

// const personne : Personne = {
//     nom : "Kevin",
//     postnom : "Nash",
//     age : 22,
//     role : RoleUtilisateur.ADMIN
// }

// console.log(personne);

// TUPLE

// let nombresEtChaineDeCaractere : [number, string] = [12, 'Hello world']

// console.log(nombresEtChaineDeCaractere);


// GENERIQUES

interface Utilisateur<T> {
    nom: string;
    age: number;
    competences: T
}

const utilisateur: Utilisateur<Array<string>> = {
    nom: "Kevin",
    age: 20,
    competences: ["TypeScript", "JavaScript"]
}

const utilisateur2: Utilisateur<object> = {
    nom: "Massongo",
    age: 22,
    competences: {
        experience: "3 ans",
        domaine: "Batiment"
    }
}

const utilisateur3: Utilisateur<string> = {
    nom: "Nash",
    age: 12,
    competences: "React JS"
}

const utilisateur4: Utilisateur<Array<number>> = {
    nom: "Keren",
    age: 20,
    competences: [1, 2]
}

const utilisateur5: Utilisateur<Array<object>> = {
    nom: "Ekbobu",
    age: 200,
    competences: [{
        experience: '3 ans',
        domaine: 'JavaScript'
    },
    {
        experience: '5 ans',
        domaine: 'React JS'
    }]
}

console.log(utilisateur, utilisateur2, utilisateur3, utilisateur4, utilisateur5);
