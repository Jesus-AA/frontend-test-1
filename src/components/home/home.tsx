import { useAppHook } from '../../hooks/hook';
import { Footer } from '../footer/footer';
import { FitForm } from '../form/form';
import styles from './home.module.scss';

export function Home() {
  const { userCoinSizeSelection } = useAppHook();

  const handleCoinSelection = (coinSize: string) => {
    userCoinSizeSelection(coinSize);
  };
  return (
    <>
      <div className={styles['main-div']}>
        <main className={styles['main']}>
          <section className={styles['section-title']}>
            <h2>Selecciona moneda</h2>
            <p>
              Para la correcta medición es necesario el uso de una moneda en el
              centro de la palma de tu mano.
            </p>
          </section>

          <section className={styles['section-body']}>
            <div className={styles['first-half']}>
              <div className={styles['first-half-div-1']}>
                <h3>Puedes usar una de estas monedas</h3>
                <div className={styles['first-half-coins-div']}>
                  <img
                    onClick={() => handleCoinSelection('2')}
                    src="/coin1.svg"
                    alt="A 2 euros coin picture."
                  />
                  <img
                    onClick={() => handleCoinSelection('1')}
                    src="/coin2.svg"
                    alt="A 1 euro coin picture."
                  />
                  <img
                    onClick={() => handleCoinSelection('0.5')}
                    src="/coin3.svg"
                    alt="A 0.50 euros coin picture."
                  />
                  <img
                    onClick={() => handleCoinSelection('0.2')}
                    src="/coin4.svg"
                    alt="A 0.20 euros coin picture."
                  />
                  <img
                    onClick={() => handleCoinSelection('0.05')}
                    src="/coin5.svg"
                    alt="A 0.05 euros coin picture."
                  />
                </div>
              </div>
              <div className={styles['first-half-div-2']}>
                <h3>Coloca la moneda en el centro de la palma de tu mano</h3>
                <div className={styles['first-half-div-2-hand']}>
                  <img
                    className={styles['hand']}
                    src="/hand.svg"
                    alt="A picture of a hand with a conid in the middle."
                  />
                  <img
                    className={styles['coin']}
                    src="/coinvector.svg"
                    alt=""
                  />
                  <img
                    src="/currency.svg
                "
                    className={styles['currency']}
                    alt="Euro currency sign."
                  />
                </div>
              </div>
            </div>
            <div className={styles['second-half']}>
              <FitForm />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
