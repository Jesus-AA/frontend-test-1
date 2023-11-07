import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GoodBye } from '../components/goodbye/goodbye';
import { Home } from '../components/home/home';
import CustomWebcam from '../components/webcam/webcam';

export function AppRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webcam" element={<CustomWebcam />} />
        <Route path="/end" element={<GoodBye />} />
      </Routes>
    </Suspense>
  );
}
