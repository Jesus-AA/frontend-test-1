import { useAppHook } from '../../hooks/hook';
import styles from './end.module.scss';
export function End() {
  const { response } = useAppHook();
  return (
    <>
      <div className={styles['response-div']}>
        <h2>The API responded with:</h2>
        <span>{response}</span>
      </div>
    </>
  );
}
