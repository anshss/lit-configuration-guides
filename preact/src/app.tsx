import './app.css';
import { LitNodeClient } from "@lit-protocol/lit-node-client";
import { LitNetwork } from "@lit-protocol/constants";

export function App() {

  async function instantiateLit() {
    console.log("connection lit..")
    const litNodeClient = new LitNodeClient({
      litNetwork: LitNetwork.DatilDev,
      debug: false
    });

    await litNodeClient.connect();
    console.log("connected!")
  }

  return (
    <div className="App">
      <h1>Lit with Preact</h1>
      <p>Check console</p>
      <button onClick={instantiateLit}>Instantiate Lit</button>
    </div>
  );
}