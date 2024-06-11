"use strict";
// let montantEnChiffreOuTouteLettre : string | number;
const utilisateur = {
    nom: "Kevin",
    age: 20,
    competences: ["TypeScript", "JavaScript"]
};
const utilisateur2 = {
    nom: "Massongo",
    age: 22,
    competences: {
        experience: "3 ans",
        domaine: "Batiment"
    }
};
const utilisateur3 = {
    nom: "Nash",
    age: 12,
    competences: "React JS"
};
const utilisateur4 = {
    nom: "Keren",
    age: 20,
    competences: [1, 2]
};
const utilisateur5 = {
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
};
console.log(utilisateur, utilisateur2, utilisateur3, utilisateur4, utilisateur5);
