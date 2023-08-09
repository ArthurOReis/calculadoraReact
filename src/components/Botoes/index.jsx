import styles from './Botoes.module.css';

export default function Botoes() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
        <div className={styles.section}>
            <div className={styles.numeros}>
                {numeros.map((numero) => (
                    <button key={numero} className={"numero"+numero}>{numero}</button>
                ))}
            </div>
            <div className={styles.operadores}>
                <button>+</button>
                <button>-</button>
                <button>x</button>
                <button>÷</button>
            </div>
        </div>
    );
}
