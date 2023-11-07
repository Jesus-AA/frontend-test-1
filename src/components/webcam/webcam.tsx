import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import styles from './webcam.module.scss';

export function CustomWebcam() {
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImgSrc(imageSrc!);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['video']}>
        {imgSrc ? (
          <img src={imgSrc} alt="webcam" />
        ) : (
          <Webcam
            className={styles['web-video']}
            height={350}
            width={350}
            ref={webcamRef}
          />
        )}
      </div>

      <div>
        {imgSrc ? (
          <button className={styles['btn-volver']} onClick={retake}>
            Retake photo
          </button>
        ) : (
          <button className={styles['btn-siguiente']} onClick={capture}>
            Capture photo
          </button>
        )}
      </div>

      <div className={styles['final-send']}>
        {imgSrc && <button>Enviar datos</button>}
      </div>
    </div>
  );
}

export default CustomWebcam;
