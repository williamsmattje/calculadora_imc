import styles from './Perfil.module.css';
const perfil = nomeUsuario => {
  return (
    <header className={styles.header}>
      <img className={styles.avatar} src="https://play-lh.googleusercontent.com/ouL1lfSP_CyUgb5OUvI51jG3cevMfulA1GZGtS63r3Xfa8STYiIxq6KiY3PkMc6PcTk=w600-h300-pc0xffffff-pd"/>
      <h1 className={styles.name}>
        Calculadora IMC
      </h1>
    </header>
  )
}

export default perfil