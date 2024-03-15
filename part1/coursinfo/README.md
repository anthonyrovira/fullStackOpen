# part1 - coursinfo

Exercice extrait du site : [fullstackopen.com](fullstackopen.com/fr/)

## courseinfo, étape 1

L'application sur laquelle nous allons commencer à travailler dans cet exercice sera développée plus en détail dans quelques-uns des exercices suivants. Dans cette série d'exercices et d'autres à venir dans ce cours, il suffit de soumettre uniquement l'état final de l'application. Si vous le souhaitez, vous pouvez également créer un commit pour chaque exercice de la série, mais cela est facultatif.

Utilisez create-react-app pour initialiser une nouvelle application. Modifiez index.js pour qu'il corresponde à ce qui suit:

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)copy
et App.js pour correspondre à l'élément suivant

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
```

et supprimer les fichiers supplémentaires (App.css, App.test.js, index.css, logo.svg, setupTests.js, reportWebVitals.js).

Malheureusement, toute l'application se trouve dans le même composant. Refactorisez le code afin qu'il se compose de trois nouveaux composants : Header, Content et Total. Toutes les données résident toujours dans le composant App, qui transmet les données nécessaires à chaque composant à l'aide des props. Header se charge de restituer le nom du cours, Content restitue les parties et leur nombre d'exercices et Total restitue le nombre total d'exercices.

Définissez les nouveaux composants dans le fichier App.js.

Le corps du composant App sera approximativement comme suit :

```typescript
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
```

ATTENTION create-react-app transforme automatiquement le projet en référentiel git, sauf si l'application est créée dans un référentiel déjà existant. Très probablement, vous ne voulez pas que le projet devienne un référentiel, alors exécutez la commande rm -rf .git à la racine du projet.

# 1.2 : courseinfo, étape 2
Refactorisez le composant Content afin qu'il n'affiche pas les noms des parties ou leur nombre d'exercices par lui-même. Au lieu de cela, il ne rend que trois composants Part dont chacun rend le nom et le nombre d'exercices d'une partie.

```typescript
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```

Notre application transmet des informations de manière assez primitive pour le moment, car elle est basée sur des variables individuelles. Cette situation va bientôt s'améliorer.

## 1.3 : courseinfo, étape 3
Passons à l'utilisation d'objets dans notre application. Modifiez les définitions des variables du composant App comme suit et refactorisez également l'application pour qu'elle fonctionne toujours :

```typescript
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      ...
    </div>
  )
}
```


## 1.4 : courseinfo, étape 4
Et puis placez les objets dans un tableau. Modifiez les définitions de variable de App sous la forme suivante et modifiez les autres parties de l'application en conséquence :

```typescript
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      ...
    </div>
  )
}
```

NB à ce stade, vous pouvez supposer qu'il y a toujours trois éléments, il n'est donc pas nécessaire de parcourir les tableaux à l'aide de boucles. Nous reviendrons sur le sujet du rendu des composants basés sur des éléments dans des tableaux avec une exploration plus approfondie dans la prochaine partie du cours.

Cependant, ne transmettez pas différents objets en tant que props distincts du composant App aux composants Content et Total. Au lieu de cela, transmettez-les directement sous forme de tableau :

```typescript
const App = () => {
  // const definitions

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
```

## 1.5 : courseinfo, étape 5
Poussons les changements un peu plus loin. Modifiez le cours et ses parties en un seul objet JavaScript. Réparez tout ce qui casse.

```typescript
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      ...
    </div>
  )
}
```