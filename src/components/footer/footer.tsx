import { useAppHook } from '../../hooks/hook';
import styles from './footer.module.scss';

export function Footer() {
  const { userApiCall, coin, fitting } = useAppHook();

  const onClickApi = (coin: string, fitting: string) => {
    userApiCall(coin, fitting);
  };

  return (
    <>
      <main className={styles['main']}>
        <section className={styles['btn-section']}>
          <button className={styles['btn-volver']}>Volver</button>
          <button
            onClick={() => onClickApi(coin, fitting)}
            className={styles['btn-siguiente']}
          >
            Siguiente
          </button>
        </section>
        <div className={styles['divider']}></div>
        <address>
          <span className={styles['text']}>Powered by</span>
          <span>
            <img src="/aitaca.svg" />
          </span>
        </address>
      </main>
    </>
  );
}
