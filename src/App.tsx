import styles from './App.module.scss';
import { AppRouter } from './routes/app-routes';
function App() {
  return (
    <>
      <div className={styles['main-div']}>
        <AppRouter />
      </div>
    </>
  );
}

export default App;
