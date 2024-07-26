## Etapes exercice Typescript

- Définir et utiliser des interfaces pour modéliser les données (Book).​
- Créer des classes pour encapsuler la logique et gérer les données (LibraryService).​
- Manipuler des données avec des méthodes dans les classes (ajouter, supprimer, et récupérer des livres).​
- Utiliser les modules TypeScript pour organiser le code.​
- Configurer et exécuter un projet TypeScript.

## Configuration projet 

**Créer un nouveau répertoire pour le projet et y naviguer​**
mkdir library-management​
cd library-management​
​
**Initialiser un projet Node.js (pour gérer les dépendances)​**
npm init –y​
Cette commande crée un fichier package.json avec les paramètres par défaut.​
​
**Installer TypeScript en tant que dépendance de developpement​**
npm install typescript --save-dev

## Créer un modèle de données

**Créer un fichier de configuration TypeScript**​
npx tsc –init​
Cela crée un fichier tsconfig.json avec les configurations par défaut.​
​
**Créer un dossier src pour les fichiers TypeScript** ​
mkdir src

**Créer un fichier book.model.ts dans le dossier src​**
Le fichier book.model.ts sert à définir le modèle de données pour représenter un livre dans votre application. ​
En TypeScript, cela se fait généralement en utilisant une interface ou une classe.​
​
Créer une interface en utilisant « export interface Book » et définir les attributs du livre (penser à y intégrer un identifiant)​

**Utilisation de book.model.ts dans votre Application​**
Le modèle Book sera utilisé dans d'autres parties de votre application pour s'assurer que les objets livres sont toujours conformes à cette structure. ​

## Créer le Service de Bibliothèque

Créer un fichier library.service.ts dans le dossier src​
​
Nous allons créer une classe LibraryService pour gérer les livres.​
​
Faire un import de votre interface Book.​
Créer une classe LibraryService qui:​
- Contiendra un tableau pour stocker les livres.​
- Attribuera des identifiants uniques aux livres​
- Contiendra une méthode addbook pour ajouter des livres, removebook pour supprimer des livres et getbooks pour avoir les listes des livres

## Créer le programme principal

Créer un fichier main.ts dans le dossier src​
​
Nous allons écrire le programme principal pour tester notre service de bibliothèque.​
​
Les étapes:​
- Importer la classe LibraryService​
- Créer une instance de LibraryService​
- Ajouter des livres et  vérifier la liste des livres dans la console​
- Supprimer un livre et vérifier la liste des livres dans la console​


​## Compiler et exécuter le code

Ajouter un script de compilation dans le package.json​
Ouvrir le fichier package.json et ajouter les scripts suivants​
"scripts": {​
  "build": "tsc",​
  "start": "tsc && node dist/main.js"​
}​
​
"build": "tsc" : Ce script exécute le compilateur TypeScript (tsc) pour convertir les fichiers TypeScript en fichiers JavaScript.​
​
"start": "tsc && node dist/main.js" : Ce script compile le code TypeScript et exécute le fichier JavaScript résultant (main.js) dans le dossier dist.​
​
**Compiler le code TypeScript​**
npm run build​
​
Cela génère les fichiers JavaScript dans un dossier dist.​
​
Si jamais le dossier dist ne s’est pas créé alors vérifier le fichier de configuration typeScript: tsconfig.json​
On devrait avoir à la fin du fichier​
    "skipLibCheck": true,                            
    /* Skip type checking all .d.ts files. */​
    "rootDir": "./src",​
    "outDir": "./dist"​
  },​
  "include": ["src/**/*"]​
}​
​
**​Exécuter le projet​**
npm start​
​
Affichage dans la console des log d’ajout… de livres​


 ​
​
​
​
​

