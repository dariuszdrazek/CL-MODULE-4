### Zadanie 0a - `js/task0a.js`

Stwórzcie komponent `HelloWorld`, który przechowuje tekst do wyświetlenia jako stan lokalny. Niech napis będzie domyślnie nastawiony na "Hello, World!".

Komponent ma wyrenderować ten napis w elemencie `h1`.

Dodajcie timer do swojego komponentu, który po **5 sekundach** zmieni ten tekst na "Hi, Everyone!". Pamiętajcie, aby zrobić to w odpowiedniej metodzie cyklu życia, a także aby zwolnić zasoby.

Dodajcie `console.log` do każdej metody cyklu życia.

Zajrzyj do konsoli. Które metody cyklu życia zostały wywołane, dlaczego? Widzicie różnicę w porównaniu z wielokrotnym użyciem `ReactDOM.render()`?

Pamiętajcie, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderujcie na stronie główny komponent `App`.
