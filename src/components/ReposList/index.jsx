import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = nomeUsuario => {
  const [repos, setRepos] = useState([]);
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setIMC] = useState(null);

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));
  };

  return (
    <div className={styles.container}>
      <>
        <div>
          <h2 className={styles.heading}>Calculadora de IMC</h2>
          <label className={styles.label}>Peso (kg): </label>
          <input className={styles.input} type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
          <br />
          <label className={styles.label}>Altura (cm): </label>
          <input className={styles.input} type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
          <br />
          <button className={styles.button} onClick={calcularIMC}>Calcular IMC</button>
          {imc && <p className={styles.result}>Seu IMC é: {imc}</p>}
        </div>
      </>
    </div>
  )
}

export default ReposList;
