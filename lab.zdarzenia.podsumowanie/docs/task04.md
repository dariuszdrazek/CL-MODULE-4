### Zadanie 4 - `js/task04.js` (Dodatkowe)

**Gra matematyczna**
To zadanie pozwoli wam stworzyć prostą grę matematyczną. Będzie wam potrzebne kilka rzeczy w celu wykonania zadania. 

- Losowanie dowolnego elementu z tablicy:
```
items[Math.floor(Math.random()*items.length)]
```

- Losowanie losowej liczby całkowitej z przedziału:
```
Math.floor(Math.random() * (max - min) + min )
```

- Funkcja do losowego układania kolejności w tablicy (shuffle):
```
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
```
Użycie: przekazujecie tablicę, zostanie ona zmodyfikowana - elementy będą w losowych miejscach.

--- 

Stwórzcie komponent `MathQuestionGame`.

Na początku wylosujcie jedno z działań: 
- dodawanie, 
- odejmowanie,
- mnożenie.

Wylosujcie również dwie liczby całkowite z przedziału 1-10. Wykonajcie wylosowane działanie matematyczne pomiędzy dwoma wylosowanymi liczbami i przechowajcie wynik.

Wygenerujcie 4 przyciski, w tym 3 z losowymi liczbami innymi niż poprawny wynik (możecie użyć np. pętli while by upewnić się, że wysolowany nie zostanie poprawny wynik) oraz 1 przycisk z poprawną odpowiedzią. Przyciski przechowuj w formie tablicy, którą następnie przetasujecie (zob. wyżej funkcję shuffle) i wyrenderujecie w komponencie.

Gra wyświetlać się ma w takiej strukturze (przykład):
```html
<div>
    <h1>2 * 3 =</h1>
    <div>
        <button>3</button>
        <button>6</button>
        <button>8</button>
        <button>7</button>
    </div>
    <h2>00:08</h2>
</div>
```

Gracz ma mieć 10 sekund na udzielenie prawidłowej odpowiedzi. Uruchomcie timer / interval. Pamiętajcie, aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętajcie aby zwolnić zasoby.

Zasady:

- Po kliknięciu na prawidłowy przycisk, element `h1` zamieni napis na "Gratulacje!";
- Po kliknięciu na nieprawidłowy przycisk, element `h1` zamieni napis na "Błędna odpowiedź :(";
- Po minięciu czasu zanim zostanie kliknięty jakiś przycisk element `h1` zamieni napis na "Czas minął!". Zabezpieczcie też, żeby nie można było klikać przycisków po czasie.

