import styles from "./Calculator.module.css";
import { useState } from "react";
import calculate from "./Logic/Calculate";

const Calculator = (props) => {
  const [state, setState] = useState({
    obj: {
      total: null,
      next: null,
      operation: null,
    },
  });

  const handleClick = (buttonName) => {
    const { obj } = state;
    setState({ obj: calculate(obj, buttonName) });
  };

  const { obj } = state;

  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>{obj.next || obj.total || 0}</div>
      <div className={styles.container}>
        <button
          type="button"
          className={styles.btn}
          onClick={()=>handleClick("AC")}
        >
          AC
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={()=>handleClick("+/-")}
        >
          +/-
        </button>
        <button type="button" className={styles.btn} onClick={()=>handleClick("%")}>
          %
        </button>
        <button
          type="button"
          className={`${styles.btn} ${styles.orange}`}
          onClick={()=>handleClick("÷")}
        >
          ÷
        </button>
        <button type="button" className={styles.btn} onClick={()=>handleClick("7")}>
          7
        </button>
        <button type="button" className={styles.btn} onClick={()=>handleClick("8")}>
          8
        </button>
        <button type="button" className={styles.btn} onClick={()=>handleClick("9")}>
          9
        </button>
        <button
          type="button"
          className={`${styles.btn} ${styles.orange}`}
          onClick={()=>handleClick("x")}
        >
          X
        </button>
        <button type="button" className={styles.btn} onClick={()=>handleClick("4")}>
          4
        </button>
        <button type="button" className={styles.btn} onClick={()=>handleClick("5")}>
          5
        </button>
        <button type="button" className={styles.btn} onClick={()=>handleClick("6")}>
          6
        </button>
        <button
          type="button"
          className={`${styles.btn} ${styles.orange}`}
          onClick={()=>handleClick("-")}
        >
          -
        </button>
        <button type="button" className={styles.btn} onClick={()=>handleClick("1")}>
          1
        </button>
        <button type="button" className={styles.btn} onClick={()=>handleClick("2")}>
          2
        </button>
        <button type="button" className={styles.btn} onClick={()=>handleClick("3")}>
          3
        </button>
        <button
          type="button"
          className={`${styles.btn} ${styles.orange}`}
          onClick={()=>handleClick("+")}
        >
          +
        </button>
        <button
          type="button"
          className={`${styles.btn} ${styles.double}`}
          onClick={()=>handleClick("0")}
        >
          0
        </button>
        <button type="button" className={styles.btn} onClick={()=>handleClick(".")}>
          .
        </button>
        <button
          type="button"
          className={`${styles.btn} ${styles.orange}`}
          onClick={()=>handleClick("=")}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
