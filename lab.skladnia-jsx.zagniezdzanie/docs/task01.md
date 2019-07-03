W pliku `js/data/person.js` znajduje się obiekt reprezentujący osobę. Zaimportuj go do `js/zadanie01.js`. 
Celem tego zadania jest wyświetlenie wszystkich informacji zawartych w tym obiekcie, na stronie. Struktura tego elementu powinna wyglądać następująco: 

```html
<h1>{ tytuł + imię + nazwisko }</h1>
<span>{ wiek }</span>
```

Bezpośrednim rodzicem elementów `h1` i `span` ma być element o id `app`. Należy tutaj skorzystać z `React.Fragment`.