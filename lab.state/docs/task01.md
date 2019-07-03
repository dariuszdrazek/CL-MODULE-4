### Zadanie 01 - `js/task01.js`
Stwórzcie komponent `Modal`. Przyjmuje on przez props wartość `heading`, np. "Zapisz się do newslettera". Wyświetla on tego propsa w elemencie `h2`. 

Komponent ten, ma wyrenderować tekst który znajduje się w props `heading` dopiero po 10 sekundach. W tym celu, w odpowienim cyklu życia, swtórzcie `timer` który wyczeka 10 sekund, a po tym czasie zaktualizuje **stan wewnętrzny komponentu** (np. wartość `this.state.modalOpen`) z `false` na `true` a tym samym uruchomi ponownie render i wyświetli informację z propsa. 

Ma on być wyrenderowany w komponencie `App`: 

```js
function App() {
  return (
    <div>
      <h1>Test okna modalnego</h1>
      <Modal heading="Zapisz się do newslettera" />
    </div>
  )
}
```

Jeżeli stan wewnętrzny komponentu `Modal` nastawiony jest na `false`, komponent ten powinien renderować `null`.