### Zadanie 0b - `js/task0b.js`

Stwórzcie komponent `TextTyper`. Przyjmuje on przez props wartość `text`.

Komponent ma wyrenderować pierwszą literę tego napisu w elemencie `h1`. Pamiętajcie, aby do przechowywania znaków, które mają być wyświetlone skorzystać ze `state`.

Dodajcie **interval do swojego komponentu**, który sprawi, że co 1 sekundę pojawi się w elemencie `h1` coraz więcej liter (co sekundę 1 = kolejny znak). Pamiętajcie, aby zrobić to w odpowiedniej metodzie cyklu życia a także aby zwolnić zasoby.

Efekt po kolei może wyglądać tak dla text ustawionego na "Witaj!":

- 0s.: W
- 1s.: Wi
- 2s.: Wit
- 3s.: Wita
- 4s.: Witaj
- 5s.: Witaj!

Zajrzyjcie do narzędzi deweloperskich React. Kliknijcie na swój komponent - zobaczycie jego `props`, aktualne `state` oraz podświetlenia aktualizacji.

Pamiętajcie, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderujcie na stronie główny komponent `App`.