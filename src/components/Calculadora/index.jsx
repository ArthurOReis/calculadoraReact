import Botoes from '../Botoes';
import styles from './Calculadora.module.css'

export default function Calculadora() {
    return (
        <div className={styles.calculadora}>
            <input/>
            <Botoes/>
        </div>
    );
}
