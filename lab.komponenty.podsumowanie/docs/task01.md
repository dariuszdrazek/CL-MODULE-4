### Zadanie 1 - `js/task01.js`
Stwórzcie komponent o nazwie `Receipt`. Niech przyjmuje on w props tablicę obiektów z elementami rachunku (`items`).

Obiekty mają być w takiej formie:
```js
{
 price: cena,
 count: ilosc,
 name: 'nazwa przedmiotu'
}
```

Wyświetlcie całość w formie takiej tabelki:

Nazwa | Cena | Ilość | Łączna cena
--- | --- | --- | ---
Masło | 4.00 zł| 1 | 4.00 zł
Chleb | 3.50 zł| 2 | 7.00 zł  
Jabłka | 2.99 zł | 1.5 | 4.49 zł
RAZEM | - | - | 15.49 zł

Pamiętajcie o odpowiednich obliczeniach. Na końcu wyświetlcie całkowitą sumę rachunku.

W pliku `js/data/products.js` znajduje się tablica z obiektami przykładowych zakupów. Zaimportujcie go do pliku `js/task01.js`.

Wyrenderuj swój komponent rachunku z tymi zaimportowanymi danymi.

Pamiętajcie, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderujcie na stronie główny komponent `App`.

Zadanie wykonaj z komponentami w wersji zbudowanej z **klas ES6**.