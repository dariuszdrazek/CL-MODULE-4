### Zadanie 02 - `js/task02.js`
Stwórzcie komponent `StrobeLight`. Przyjmuje on przez props dwie wartości: kolor światła (`color`) oraz częstotliwość mrugania w ms (`frequency`).

Komponent ma wyrenderować pusty element `div`, z następującymi stylami:

- Szerokość: `500px`,
- Wysokość: `50px`,
- Kolor tła: `white`.

Dodajcie `interval` do komponentu, który sprawi, że co określoną ilość ms (`frequency`) będzie się zmieniać kolor tła naprzemiennie:

Jeżeli wcześniej był kolor biały - na kolor z props,
W przeciwnym wypadku na kolor biały.

Wyrenderujcie komponent kilka razy, z przykładowymi danymi.

Zajrzyjcie do narzędzi deweloperskich React. Kliknijcie na swoje komponenty - zobaczycie ich props, aktualne state oraz podświetlenia aktualizacji.

Pamiętajcie, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.