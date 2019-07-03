### Zadanie 1 - `js/task01.js`
Wykorzystajcie zadanie zrobione z wykładowcą.

Stwórzcie komponent o nazwie `ShopList`. Niech przyjmuje on w `props` tablicę obiektów z elementami koszyka.

Obiekty mają być w takiej formie:
```js
{
  title: "nazwa przedmiotu",
  image: "url_do_obrazu_przedmiotu"
}
```

Powinien on wyświetlać w divie o klasie CSS `shoplist` same komponenty `ShopItemHeader` z odpowiednimi danymi. Wykorzystajcie `map()`.

Wyrenderujcie go na stronie podając w atrybucie do props następujący atrybut `items`:

```js
[
  {
    title: "Mysz komputerowa",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
  },
  {
    title: "Klawiatura",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
  },
  {
    title: "Laptop programisty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
  }
]
```

Pamiętajcie, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderujcie na stronie główny komponent `App`.

Zadanie wykonaj tylko z **komponentami w wersji zbudowanej z klas ES6**.