### Zadanie 1 - `js/task01.js`
Stwórzcie komponent `AccountData`. Niech przechowuje w stanie wewnętrznym pod nazwą `data` wartość `false`.

W pliku `js/data/fakeAPI.js` znajduje się obiekt pozwalający udawać zapytanie do zewnętrznego API. Zaimportujcie go do pliku `js/task01.js`.

Jego użycie wygląda następująco:
```js
fakeAPI.load().then( callback );
```

Wywołanie to potrwa kilka sekund, następnie zostanie wywołana funkcja `callback` przekazana jako parametr do metody `then()`. Jako argument zostanie do callback przekazana tablica z danymi. Sprawdźcie w konsoli w jaki sposób wyglądają te dane, żeby wiedzieć jak je później zrenderować.

Zaraz po zamontowaniu komponentu wywołajcie `fakeAPI.load().then( callback )`. W callbacku dajcie funkcję, która zmieni stan wewnętrzny data na dane otrzymane z API.

Dopóki w data jest `false` **zablokujcie renderowanie komponentu**.

Jeżeli posiadacie dane to wygenerujcie je w formie tabeli 3 kolumny na 12 wierszy.