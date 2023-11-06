import styles from './home.module.scss';

export function Home() {
  return (
    <>
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
                  src="../../public/coin1.svg"
                  alt="A 2 euros coin picture."
                />
                <img
                  src="../../public/coin2.svg"
                  alt="A 2 euros coin picture."
                />
                <img
                  src="../../public/coin3.svg"
                  alt="A 2 euros coin picture."
                />
                <img
                  src="../../public/coin4.svg"
                  alt="A 2 euros coin picture."
                />
                <img
                  src="../../public/coin5.svg"
                  alt="A 2 euros coin picture."
                />
              </div>
            </div>
            <div className={styles['first-half-div-2']}>
              <h3>Coloca la moneda en el centro de la palma de tu mano</h3>
              <div className={styles['first-half-div-2-hand']}>
                <img
                  className={styles['hand']}
                  src="../../public/hand.svg"
                  alt="A picture of a hand with a conid in the middle."
                />
                <img
                  className={styles['coin']}
                  src="../../public/coinvector.svg"
                  alt=""
                />
                <img
                  src="../../public/currency.svg
                "
                  className={styles['currency']}
                  alt="Euro currency sign."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
