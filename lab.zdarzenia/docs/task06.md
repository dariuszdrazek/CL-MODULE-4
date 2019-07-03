### Zadanie 6 - `js/task06.js`
Stwórzcie komponent `MobileMenu`.

Komponent ma mieć następującą strukturę:

```html
<header>
    <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="Otwórz menu" />
    </div>
  
    <nav>
        <ul>
            <li>Menu 1...</li>
            <li>Menu 2...</li>
            <li>Menu 3...</li>
            <li>Menu 4...</li>
        </ul>
        <button>Schowaj menu</button>
    </nav>
</header>
```
Na początku powinien być widoczny tylko `div`, a `nav` ma być schowany.

Po kliknięciu na ikonę menu, powinien się **schować div**, a **pokazać `nav`**.

Po kliknięciu na **"Schowaj menu"** znów powinien być widoczny tylko `div`, a `nav` ma się schować.