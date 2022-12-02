import styles from './Calculator.module.css'

const Calculator = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>{props.children || 0}</div>
      <div className={styles.container}>
        <button type="button" className={styles.btn}>
          AC
        </button>
        <button type="button" className={styles.btn}>
          +/-
        </button>
        <button type="button" className={styles.btn}>
          %
        </button>
        <button type="button" className={`${styles.btn} ${styles.orange}`}>
          ÷
        </button>
        <button type="button" className={styles.btn}>
          7
        </button>
        <button type="button" className={styles.btn}>
          8
        </button>
        <button type="button" className={styles.btn}>
          9
        </button>
        <button type="button" className={`${styles.btn} ${styles.orange}`}>
          X
        </button>
        <button type="button" className={styles.btn}>
          4
        </button>
        <button type="button" className={styles.btn}>
          5
        </button>
        <button type="button" className={styles.btn}>
          6
        </button>
        <button type="button" className={`${styles.btn} ${styles.orange}`}>
          -
        </button>
        <button type="button" className={styles.btn}>
          1
        </button>
        <button type="button" className={styles.btn}>
          2
        </button>
        <button type="button" className={styles.btn}>
          3
        </button>
        <button type="button" className={`${styles.btn} ${styles.orange}`}>
          +
        </button>
        <button type="button" className={`${styles.btn} ${styles.double}`}>
          0
        </button>
        <button type="button" className={styles.btn}>
          .
        </button>
        <button type="button" className={`${styles.btn} ${styles.orange}`}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
