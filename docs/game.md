# Class

## class Card

La class card est la classe principale contenant toutes les fonctions necessaires aux effets.

```js
class Card {
  id; // id de la carte dans la base de donnee

  // pour chaque ressource/valeur des utilisateurs
  changeUpdate(player, n) {
    if (player typeof Player) {
      player['update'] += n;
    } else {
      throw new Error('Typeof player is not Player')
    }
  }
}
```

## extends Card

Les cartes sont des class baser sur la class Card contenant uniquement l'id et l'effet de la carte.

```js
class NomDeLaCarte extends Card {
  id = 1;

  effect(from, to) {
    // Ici la function gerant l'effet
  }
}
```

## Player

L'utilisateur et l'IA seront baser sur la class Player. Elle comprend la main, les ressources et toutes les actions que peut faire les joueurs.

```js
class Player {
  // exemple des resources
  software;
  update;
  hand = [];

  constructor(startingResources) {
    this.software = startingResources.software;
    this.update = startingResources.update;
  }

  // rajoute juste une carte dans la main en passant une carte de type Card
  draw(card) {
    if (card typeof Card) {
      this.hand.push(card);
    } else {
      throw new Error('Typeof card is not Card');
    }
  }

  // card = index de la carte dans la main
  play(card, player) {
    // execute la fonction de la carte
    this.hand[card].effect(this, player);
    // retire la carte de la main
    this.hand.splice(card, 1);
  }
}
```
