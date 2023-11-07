import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import { useAppHook } from '../../hooks/hook';
import styles from './webcam.module.scss';

export function CustomWebcam() {
  const navigate = useNavigate();
  const { userApiCall, coin, fitting, userHandPictureImg, picture, response } =
    useAppHook();
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImgSrc(imageSrc!);
    setTimeout(() => {
      userHandPictureImg(imageSrc!);
    }, 300);
  }, [webcamRef, userHandPictureImg]);

  const retake = () => {
    setImgSrc(null);
  };

  const onClickApi = (coin: string, fitting: string, hand: string) => {
    userApiCall(coin, fitting, hand);
  };

  useEffect(() => {
    response ? navigate('/end') : null;
  });

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
        {imgSrc && (
          <button onClick={() => onClickApi(coin, fitting, picture!)}>
            Enviar datos
          </button>
        )}
      </div>
    </div>
  );
}

export default CustomWebcam;
