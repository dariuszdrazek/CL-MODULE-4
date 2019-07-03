### Zadanie 2 - `js/task02.js`
Stwórzcie komponent `Shop` oraz komponent `ShopItem`.

`ShopItem` zawiera `div`, a w nim `h1`, którego zawartość jest pobierana z props `title`. W `div` znajduje się też przycisk z napisem "Kup", po jego kliknięciu przesyła się odpowiednią informację do callbacku, który pobiera z props pod nazwą `onBuy`. Nie zapomnijcie sprawdzić czy ten atrybut został odpowiednio przekazany i jest funkcją. Wywołanie callbacku ma się odbyć za argumentem pobieranym z tytułu przekazanego w props (`title`).

Shop ma mieć następującą strukturę:

```html
<div>
  <ShopItem title="skarpetki" />
  <ShopItem title="koszula" />
  <ShopItem title="pończochy" />
  <ul>
    {list}
  </ul>           
</div>        
```
Zamiast `list` ma się pojawić lista elementów `li`, z wymienionymi elementami, na których użytkownik kliknął przycisk "Kup".