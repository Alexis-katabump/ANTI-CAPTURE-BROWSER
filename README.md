# Anti-Capture Browser

Navigateur web avec protection anti-capture d'écran intégrée, basé sur Electron et Brave Search.

## Fonctionnalités

- **Protection anti-capture d'écran** - Le contenu apparaît noir sur les screenshots et enregistrements
- **Anti-screen share** - Protection contre le partage d'écran (Discord, Teams, etc.)
- **Brave Search** - Moteur de recherche respectueux de la vie privée par défaut
- **Léger** - Code minimal, démarrage rapide

## Comment ça marche

L'application utilise l'API native `setContentProtection(true)` d'Electron qui active :
- **Windows** : `SetWindowDisplayAffinity(WDA_EXCLUDEFROMCAPTURE)`
- **macOS** : `NSWindow.sharingType = .none`

Le contenu de la fenêtre est exclu de toutes les captures système.

## Installation

```bash
# Cloner le repo
git clone https://github.com/Alexis-katabump/ANTI-CAPTURE-BROWSER.git
cd anti-capture-browser

# Installer les dépendances
npm install

# Lancer l'application
npm start
```

## Prérequis

- Node.js 18+
- npm ou yarn

## Structure du projet

```
anti-capture-browser/
├── index.js          # Point d'entrée Electron
├── preload.js        # Script preload (sandbox)
├── package.json
└── README.md
```

## Utilisation

1. Lancez l'application avec `npm start` ou `npx electron .`
2. Naviguez normalement avec Brave Search
3. Tout le contenu est protégé contre les captures

## Limitations

- La protection fonctionne uniquement sur Windows et macOS
- Linux n'a pas d'API équivalente au niveau OS
- Ne protège pas contre les photos d'écran physiques

## Licence

MIT License - Libre d'utilisation, modification et distribution.

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

---

Fait avec Electron
