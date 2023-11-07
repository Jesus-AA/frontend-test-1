import styles from './footer.module.scss';

export function Footer() {
  return (
    <>
      <main className={styles['main']}>
        <section className={styles['btn-section']}>
          <button className={styles['btn-volver']}>Volver</button>
          <button className={styles['btn-siguiente']}>Siguiente</button>
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
