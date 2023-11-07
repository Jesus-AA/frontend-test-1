import { BsCheckCircleFill, BsCircle } from 'react-icons/bs';
import { useAppHook } from '../../hooks/hook';
import styles from './form.module.scss';

export function Form() {
  const { userRingFittingSelection } = useAppHook();

  const handleFitting = (ringFitting: string) => {
    userRingFittingSelection(ringFitting);
  };

  return (
    <>
      <section className={styles['form-section']}>
        <h3 className={styles['form-section-title']}>
          ¿Cómo te gusta llevar el anillo?
        </h3>
        <button
          type="button"
          className={styles['btn']}
          onClick={() => handleFitting('fitted')}
        >
          <span>Ajustado</span>

          <BsCheckCircleFill className={styles['full']} />

          <BsCircle className={styles['empty']} />
        </button>
        <button
          type="button"
          className={styles['btn']}
          onClick={() => handleFitting('loose')}
        >
          <span>Suelto</span>
          <BsCheckCircleFill className={styles['full']} />
          <BsCircle className={styles['empty']} />
        </button>
      </section>
    </>
  );
}
