# Lecteur de fichiers .cast

Un lecteur de fichiers `.cast` (Asciinema) avec une interface simple et des fonctionnalités similaires à un lecteur vidéo classique.

## **Fonctionnalités**
- Lecture de fichiers `.cast` locaux.
- Contrôles de vitesse (x1, x2, x3).
- Sélection de fichier par glisser-déposer ou via un explorateur.
- Interface intuitive et responsive.

## **Prérequis**
- Docker (pour exécuter l'application en conteneur).
- Node.js (pour le développement local).

## **Installation et lancement**
### **Docker**
1. Construire l'image Docker :
    ```bash
        docker build -t lecteur-cast .
    ```

2. Lancer le conteneur :
    ```bash
        docker run -p 3000:3000 lecteur-cast
    ```

3. Ouvrir http://localhost:3000 dans ton navigateur.
### **Local**
1. Installer les dépendances :
    ```bash
        npm install
    ```

2. Lancer l'application :
    ```bash
        npm start
    ```

3. Ouvrir http://localhost:3000 dans ton navigateur.
 
 ## **Structure du projet**
 ```
├── public/              
├── src/                 
│   ├── components/      
│   ├── App.js           # Composant principal
│   └── index.js         # Point d'entrée
├── Dockerfile           # Configuration Docker
├── package.json         # Dépendances et scripts
├── LICENSE
└── README.md            
 ```

 ## **Déploiement**
- L'application est conçue pour être déployée via Docker.
- Tu peux déployer l'image Docker sur n'importe quelle plateforme supportant les conteneurs.

## **Licence**
Ce projet est sous licence [MIT](LICENSE).