import { ScreenClassProvider } from 'react-grid-system';
import './assets/fonts/SFUIDisplay-Light.ttf'

import './App.css';

import Routes from './routes';

export default function App() {
  return (
    <ScreenClassProvider>
      <Routes />
    </ScreenClassProvider>
  );
}
