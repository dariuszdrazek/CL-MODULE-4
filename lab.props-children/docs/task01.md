### Zadanie 1 - `js/task01js`

Stwórzcie komponent `ShowMore`. Działa on tak, że wyświetla link `a` z napisem "Pokaż więcej".

Po kliknięciu na element `a`, znika on (przestańcie go w ogóle renderować), a zamiast niego pojawia się treść. Treścią są dzieci tego komponentu.

Wyrenderujcie i przetestujcie swój komponent, używając takiej konstrukcji:
```js
<ShowMore>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis enim eget iaculis fermentum. Nulla facilisi. Morbi auctor quis leo ut efficitur. Duis a nulla sed nunc vestibulum condimentum ac vitae lorem. Vestibulum at ornare lacus, in euismod diam. Fusce varius, justo convallis varius elementum, quam felis molestie purus, accumsan imperdiet lacus nulla sed nunc. Suspendisse efficitur risus vel ante pharetra cursus.</p>
</ShowMore>
```