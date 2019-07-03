### Zadanie 3 - `js/task03.js`

Zmodyfikujcie komponent `Menu` z poprzedniego działu. Niech przyjmuje on w props tablicę obiektów z pozycjami menu (`menu`).

Obiekty mają być w takiej formie:
```js
{
  url: "adres_odnośnika",
  text: "tekst linku"
}
```

Używając `map()` stwórzcie z tych obiektów elementy `li`, które będą w głównym elemencie `ul`.

Wyrenderujcue go na stronie podając w atrybucie do props następujący atrybut menu:
```js
[
  {
    url: "/",
    text: "Strona główna"
  },
  {
    url: "/blog",
    text: "Blog"
  },
  {
    url: "/cennik",
    text: "Cennik"
  },
  {
    url: "/kontakt",
    text: "Kontakt"
  }
]
```