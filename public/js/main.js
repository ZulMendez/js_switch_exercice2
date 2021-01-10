// - # Exo 1
//   - ## Créer une variable qui recoit un nombre via un prompt.
//   - ## A l'aide d'un switch, affichez si le nombre est paire ou impaire:
//     - ### Ex: 2 est nombre paire.

let nombre = parseInt(prompt('entrez un nombre: '));

switch (nombre % 2 == 0) {
    case true:
        alert(`le nombre ${nombre} est pair`);
        break;
    case false:
        alert(`le nombre ${nombre} est impair`);
        break;
} 

// - # Exo 2 
//   - ## Créer une variable qui recoit un nombre entre 1 et 12 via un prompt.
//   - ## A l'aide d'un switch, affichez le mois qui correspond au nombre choisi.
//     - ## exemple: mois 1 => "Vous etes en Janvier"

// let mois = ('janvier', 'février', 'mars', 'avril');
let mois = prompt('entrez un nombre entre 1 et 12');

switch (mois) {
    case 1:
        console.log('vous êtes en janvier');
        break;
    case 2:
        console.log('vous êtes en février');
        break;
    case 3:
        console.log('vous êtes en mars');
        break;
    case 4:
        console.log('vous êtes en avril');
        break;
    default:
        console.log('inconnu');
        break;
}