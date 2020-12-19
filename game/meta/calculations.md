---
pageTitle: Calculations
category: meta
tags:
    - meta
    - game
blurb: Many game actions have chances associated with them. Read the documentation of how calculations are performed.
authors:
    - name: Christian LeVesque
      image: https://www.christianlevesque.io/images/christian.jpeg
      url: https://www.christianlevesque.io
---

This document contains the calculations used in the game.

## Character Calculations

### Determining Attribute Modifiers

Sometimes, you care about the raw value of an attribute a character has. Sometimes, though, you just care about the "modifier" that that value represents. Some species have modifiers for various character attributes (if a species has no modifier on an attribute, its modifier is `0`, not `null`).

```text
Modifier = floor((Character Attribute Value - 8) / 2) + Species Attribute Modifier
```

For example, a Gungan character has a Constitution Modifer of `-1`, so for a Gungan with Constitution 13, the modifier would be:

```text
Modifier = floor((13 - 8) / 2) + (-1)
Modifier = floor(5 / 2) - 1
Modifier = floor(2.5) - 1
Modifier = 2 - 1
Modifier = 1
```

### Determining Skill Modifiers

Skill Modifiers represent how talented a character is in a particular skill. The calculation of the Skill Modifier is different than the calculation for the Attribute Modifier because Skills are meant to be used differently.

### Determining Character Force Level

The Character's Force Level is used for several figures in the game. All characters are created with Force Level 0, and if they are Force sensitive then their first level-up will grant them a Force Level of between `1-4`. Which Force Level is granted is based on a D20 roll. At <=8, the character is granted Force Level 1; at <=14, Force Level 2; at <= 18, Force Level 3; otherwise, the character is granted Force Level 4.

**REMINDER**: Premium accounts reserve the right to select their Force Level, and so their roll would be bypassed.

### Determining the Force Modifier

The Force Modifier is four less than the character's Force Level.

```text
Modifier = Character Force Level - 4
```

So for a Level 45 Jedi with Force Level 5, the Force Modifier would be:

```text
Modifier = 5 - 4
Modifier = 1
```

### Determining Maximum Hit Points

Each species will have a Species HP Coefficient used to determine the base HP for characters of that species. The Human coefficient is 10; other species will have a different coefficient based on whether they are stronger or weaker than Humans. The range of the Species HP Coefficient is `7.5-12.5`, in `.5` increments.

Each character's HP will increase as their level increases. This will be calculated at character creation and at each level-up.

```text
Character HP = (Character Level) * (Species Coefficient + Constitution Modifier)
```

For example, a Gungan character (Species HP Coefficient of 8) of Level 7 with Constitution 13 would have the following HP:

```text
Constitution Modifier = 1 (see Determining Attribute Modifiers)
Character HP = 7 * (8 + 1)
Character HP = 7 * 9
Character HP = 63
```

### Determining Max Force Points

```text
Character FP = (Character Level) * (5 + Wisdom Modifier + Force Modifier)
```

For example, a Level 17 Human Jedi with Force Level 3 and Wisdom 13 will have the following FP:

```text
Force Modifier = -1 (see Determining the Force Modifier)
Wisdom Modifier = 2 (see Determining Attribute Modifiers)
FP = 17 * (5 + 2 + -1)
FP = 17 * 6
FP = 102
```