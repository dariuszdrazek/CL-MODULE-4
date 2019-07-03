W pliku `js/data/people.js` znajduje się tablica z obiektami reprezentującymi różne osoby. Zaimportujcie ją do pliku `js/task02.js`.

Zadaniem jest przeiterowanie po całej tablicy obiektów tak aby stworzyć tablicę z gotowymi elementami `JSX`. Każdy element tej nowo utworzonej tablicy powinien mieć strukturę zbliżoną do następującej: 

```html
<div class="person">
    <img src={ avatar } />
    <div class="info">
        <h1>{ tytuł + imię + nazwisko }</h1>
        <p>{ bio }</p>
    </div>
</div>
```

Powyższy kod jest jedynie podglądowy. Pamiętajcie w jaki sposób powinna być przekazywana nazwa klasy `CSS` w tagach `JSX` oraz o odpowiednich zamknięciach znaczników. Nazwy tych właściwości obiektu znajdziecie w importowanym pliku.

Efektem powinny być elementy podobne do tego: 
![](.guides/img/lab.skladnia-jsx.zagniezdzanie.zadanie02.png)

Następnie za pomocą React wyrenderujcie w elemencie o id `app` element `div`, w którym będą się wyświetlały wszystkie wygenerowane elementy `div`.