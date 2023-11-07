import styles from './goodbye.module.scss';

export function GoodBye() {
  return (
    <>
      <h2 className={styles['goodbye']}>
        Thank you for using the app. Goodbye!
      </h2>
    </>
  );
}
