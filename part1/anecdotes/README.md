# part1 - anecdotes

Exercice extrait du site : [fullstackopen.com](fullstackopen.com/fr/)

## 1.12* : anecdotes, étape1
Le monde de l'ingénierie logicielle est rempli d'anecdotes qui distillent des vérités intemporelles de notre domaine en de courtes lignes.

Développez l'application suivante en ajoutant un bouton sur lequel cliquer pour afficher une anecdote aléatoire du domaine du génie logiciel :

```typescript
import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)

  return (
    <div>
      {anecdotes[selected]}
    </div>
  )
}

export default App
```

Le contenu du fichier index.js est le même que dans les exercices précédents.

Découvrez comment générer des nombres aléatoires en JavaScript, par exemple. via le moteur de recherche ou sur Mozilla Developer Network. N'oubliez pas que vous pouvez tester la génération de nombres aléatoires, par ex. directement dans la console de votre navigateur.

Votre application terminée pourrait ressembler à ceci :

![fullstack content](https://fullstackopen.com/static/8577fa00fc4d946e2322de9b2707c89c/5a190/18a.png)

ATTENTION create-react-app transformera automatiquement votre projet en un référentiel git à moins que vous ne créiez votre application dans un référentiel git existant. Il est fort probable que vous ne vouliez pas que chacun de vos projets soit un référentiel distinct, il vous suffit donc d'exécuter la commande rm -rf .git à la racine de votre application.

## 1.13* : anecdotes, étape2
Développez votre application afin de pouvoir voter pour l'anecdote affichée.

![fullstack content](https://fullstackopen.com/static/06f95cb43a18bd6429174200a8d17cff/5a190/19a.png)

NB stocker les votes de chaque anecdote dans un tableau ou un objet dans l'état du composant. N'oubliez pas que la bonne façon de mettre à jour l'état stocké dans des structures de données complexes comme des objets et des tableaux est de faire une copie de l'état.

Vous pouvez créer une copie d'un objet comme ceci :

```typescript
const points = { 0: 1, 1: 3, 2: 4, 3: 2 }

const copy = { ...points }
// incrémenter la valeur de la propriété 2 de un
copy[2] += 1
```

OU une copie du tableau comme cela :

```typescript
const points = [1, 4, 6, 3]

const copy = [...points]
// incrémenter la valeur en position 2 de un
copy[2] += 1
```

L'utilisation d'un tableau pourrait être le choix le plus simple dans ce cas. Une recherche sur Internet vous fournira de nombreux conseils sur la façon de créer un tableau rempli de zéros d'une longueur souhaitée.

## 1.14* : anecdotes, étape3
Implémentez maintenant la version finale de l'application qui affiche l'anecdote avec le plus grand nombre de votes :

![fullstack content](https://fullstackopen.com/static/3e8638efbbbbcabac7bb79466ab3a5f6/5a190/20a.png)

Si plusieurs anecdotes sont à égalité pour la première place, il suffit d'en montrer une seule.