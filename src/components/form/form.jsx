import { BsCheckCircleFill, BsCircle } from 'react-icons/bs';
import styles from './form.module.scss';

export function Form() {
  return (
    <>
      <section className={styles['form-section']}>
        <h3 className={styles['form-section-title']}>
          ¿Cómo te gusta llevar el anillo?
        </h3>
        <button className={styles['btn']}>
          <span>Ajustado</span>
          <BsCircle className={styles['empty']} />
          <BsCheckCircleFill className={styles['full']} />
        </button>
        <button className={styles['btn']}>
          <span>Suelto</span> <BsCircle className={styles['empty']} />
          <BsCheckCircleFill className={styles['full']} />
        </button>
      </section>
    </>
  );
}
