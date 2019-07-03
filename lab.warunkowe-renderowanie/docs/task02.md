### Zadanie 2 - `js/task02.js`
Stwórzcie komponent `NumberRandomInfo`, który co sekunde losuje liczbę od 0 - 5. Do losowania liczby skorzystajcie ze wzoru:
```js
Math.ceil(Math.random() * 5 )
```
W metodzie render zróbcie warunek, który sprawdzi wylosowaną liczbę. Jeżeli jest ona większa od 3 to wyrenderujcie tę liczbę oraz napis: "Większa od 3", w przeciwnym wypadku wyrenderujcie również tę liczbę oraz napis: "Mniejsza od 3".