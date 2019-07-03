### Zadanie 01 - `js/task01.js`
Modyfikacja zadania z zegarem - kompozycja: **Przekopiujcie wykonane zadanie z wykładowcą do pliku `js/task01.js` i wykonujcie je w tamtym miejscu.**


Zmodyfikujcie komponenty `ClockTime` i `ClockDate` z zadania z wykładowcą.

Zwiększcie podział tych komponentów na następujące:

- `ClockTimeHour` - wyświetla godzinę za pomocą `Date.getHours()`
- `ClockTimeMinute` - wyświetla minuty za pomocą `Date.getMinutes()`
- `ClockTimeSecond` - wyświetla sekundy za pomocą `Date.getSeconds()`
- `ClockDateYear` - wyświetla rok za pomocą `Date.getFullYear()`
- `ClockDateMonth` - wyświetla miesiąc za pomocą `Date.getMonth()` (uwaga, ta metoda zwraca 0 jako styczeń, 1 jako luty itd. Dodajcie 1, żeby wyświetlić prawidłowo)
- `ClockDateDay` - wyświetla dzień za pomocą `Date.getDate()`

Zmodyfikujcie `ClockTime` i `ClockDate` tak, żeby korzystały z nowych subkomponentów.

