# part1 - unicafe

Exercice extrait du site : [fullstackopen.com](fullstackopen.com/fr/)

## 1.6 : unicafé, étape1
Comme la plupart des entreprises, Unicafe recueille les commentaires de ses clients. Votre tâche consiste à mettre en place une application Web pour recueillir les commentaires des clients. Il n'y a que trois options pour les commentaires : bon, neutre et mauvais.

L'application doit afficher le nombre total de commentaires recueillis pour chaque catégorie. Votre application finale pourrait ressembler à ceci :

![fullstack content](https://fullstackopen.com/static/d4fe767d6d8eb46f1dd21334f5f9e46e/5a190/13e.png)

Notez que votre application ne doit fonctionner que pendant une seule session de navigateur. Une fois que vous avez actualisé la page, les commentaires recueillis sont autorisés à disparaître.

Il est conseillé d'utiliser la même structure que celle utilisée dans le matériel et l'exercice précédent. Le fichier index.js est le suivant :

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

Vous pouvez utiliser le code ci-dessous comme point de départ pour le fichier App.js :

```typescript
import { useState } from 'react'

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

export default App
```

## 1.7 : unicafé, étape2
Développez votre application pour qu'elle affiche plus de statistiques sur les retours collectés : le nombre total de retours collectés, le score moyen (bon : 1, neutre : 0, mauvais : -1) et le pourcentage de retours positifs.

![fullstack content](https://fullstackopen.com/static/0a5d15ae9f055a15cb469b9c9223df41/5a190/14e.png)

## 1.8 : unicafé, étape3
Refactorisez votre application afin que l'affichage des statistiques soit extrait dans son propre composant Statistiques. L'état de l'application doit rester dans le composant racine App.

N'oubliez pas que les composants ne doivent pas être définis à l'intérieur d'autres composants :

// un endroit approprié pour définir un composant

```typescript
const Statistics = (props) => {
  // ...
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // ne pas définir un composant dans un autre composant
  const Statistics = (props) => {
    // ...
  }

  return (
    // ...
  )
}
```

## 1.9 : unicafé, étape4
Modifiez votre application pour n'afficher les statistiques qu'une fois les commentaires recueillis.

![fullstack content](https://fullstackopen.com/static/b453d7533ae85dcaf3eccf342a353c58/5a190/15e.png)

## 1.10 : unicafé, étape5
Continuons à refactoriser l'application. Extrayez les deux composants suivants :

Bouton pour définir les boutons utilisés pour soumettre des commentaires
StatisticLine pour afficher une seule statistique, par ex. la note moyenne.
Pour être clair : le composant StatisticLine affiche toujours une seule statistique, ce qui signifie que l'application utilise plusieurs composants pour afficher toutes les statistiques :

```typescript
const Statistics = (props) => {
  /// ...
  return(
    <div>
      <StatisticLine text="good" value ={...} />
      <StatisticLine text="neutral" value ={...} />
      <StatisticLine text="bad" value ={...} />
      // ...
    </div>
  )
}
```

L'état de l'application doit toujours être conservé dans le composant racine App.

## 1.11* : unicafé, étape6
Affichez les statistiques dans un tableau HTML, afin que votre application ressemble à peu près à ceci :

![fullstack content](https://fullstackopen.com/static/a74acccc17aafb02b3801ffa1fcc0fdc/5a190/16e.png)

N'oubliez pas de garder votre console ouverte en tout temps. Si vous voyez cet avertissement dans votre console :

![fullstack content](https://fullstackopen.com/static/d6f948307449c2673f28f1077ef4d789/5a190/17a.png)

Effectuez ensuite les actions nécessaires pour faire disparaître l'avertissement. Essayez de coller le message d'erreur dans un moteur de recherche si vous êtes bloqué.

Source typique d'une erreur Unchecked runtime.lastError : Impossible d'établir la connexion. La fin de réception n'existe pas. est l'extension Chrome. Essayez d'aller sur chrome://extensions/ et essayez de les désactiver un par un et d'actualiser la page de l'application React ; l'erreur devrait éventuellement disparaître.

Assurez-vous qu'à partir de maintenant, vous ne voyez plus aucun avertissement dans votre console !