import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

export function Footer() {
  // const { userApiCall, coin, fitting } = useAppHook();

  // const onClickApi = (coin: string, fitting: string) => {
  //   userApiCall(coin, fitting);
  // };

  return (
    <>
      <main className={styles['main']}>
        <section className={styles['btn-section']}>
          <Link to={'/end'} className={styles['btn-volver']}>
            Volver
          </Link>
          <Link to={'/webcam'} className={styles['btn-siguiente']}>
            Siguiente
          </Link>
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
