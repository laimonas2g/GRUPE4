import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <h1>Sąskaitų Redagavimas</h1>
      <p>Jūs galite gauti egzistuojančią sąskaitą(iš API), <br/>redaguoti, išsaugoti ją duomenų bazėje ir ištrinti iš duomenų bazės. </p>
    </div>
  );
}