// Implementa un componente UncontrolledLogin che implementa tutte le operazioni del componente Login, ma utilizzando componenti non controllati.
// Accedi ai valori del modulo utilizzando l'API FormData. Stampa i valori del modulo nella console quando il pulsante "login" viene cliccato.

import { type BaseSyntheticEvent } from "react";

export function UncontrolledLogin() {
  function handleFormSubmit(event: BaseSyntheticEvent) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ email, password });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email"></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password"></input>
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

// Consigli Soluzione

// L’implementazione rispetta correttamente la richiesta di usare un componente non controllato per il login, accedendo ai valori tramite FormData e stampando in console al submit.

// Miglioramento della tipizzazione dell’evento: Si consiglia di tipizzare il parametro di handleFormSubmit come React.FormEvent<HTMLFormElement>, più preciso rispetto a BaseSyntheticEvent. Esempio:

// function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {

// Miglioramento della tipizzazione dei valori estratti: FormData.get() può restituire string | File | null. Per allinearsi alla richiesta e prevenire errori di tipo, puoi eseguire un type assertion a string, dato il contesto:

// const email = formData.get("email") as string; const password = formData.get("password") as string;

// In alternativa, considera anche la gestione del valore null per maggiore robustezza.

// Accessibilità e requisiti dei campi: Per migliorare l’usabilità e l’accessibilità, aggiungi l’attributo required agli input per email e password:

// <input ... required />

// Codice e leggibilità: La funzione handleFormSubmit potrebbe essere definita all’esterno del componente solo se non fa uso di variabili/props interne; ciò può essere valutato a seconda della complessità futura, ma qui non è strettamente necessario.

// Riferimenti: Il link alla documentazione React è corretto e pertinente. Si consiglia invece, per approfondire il typing dei dati di FormData in React, questa risorsa ufficiale: https://developer.mozilla.org/docs/Web/API/FormData/FormData
