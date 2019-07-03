### Zadanie 2 - `js/task02.js`
To zadanie pozwoli wam stworzyć własną listę rzeczy do zrobienia.

Stwórzcie komponent `ToDoList`. Przechowuje on w swoim `state` listę rzeczy do zrobienia, jako tablicę obiektów w takiej formie:
```js
[
  {
    name: 'Element do zrobienia',
    done: false
  }
]
```

Oto przykładowa struktura komponentu (przykład, HTML):
```html
<div class="toDoList">
  <div class="header">
    <h2>Lista rzeczy do zrobienia</h2>
    <input type="text">
    <button class="addBtn">Dodaj</button>
  </div>

  <ul>
    <li>Kupić mleko</li>
    <li class="done">Zrobić prezentację</li>
  </ul>
</div>
```

Po wpisaniu do elementu input dowolnego tekstu i kliknięciu na przycisk "Dodaj", powinna się zaktualizować wewnętrzna tablica z rzeczami do zrobienia. Wstawcie wtedy nowy obiekt na jej końcu, ustawiając `done` na `false`. W praktyce wymaga to pobrania tablicy ze `state`, **stworzenia jej kopii**, tam dodania obiektu i zaktualizowania state z całą **nową tablicą**. Po dodaniu, wyczyśćcie `input` (po prostu ręcznie ustawiając stan powiązany z `input` na pusty string).

Pamiętajcie, żeby input był komponentem kontrolowanym.

Po kliknięciu na dowolny element `li` z listy, należy przeszukać tablicę i znaleźć ten element, a następnie zmienić mu done na odwrotny. Jeżeli element był oznaczony jako skończony, to ma nie być skończony, a jeżeli był nieskończony, to ma być skończony.

Podczas renderowania nadawajcie klasę CSS `done` elementom `li`, które są oznaczone jako zakończone. Pamiętajcie o odpowiednich kluczach dla elementów listy.