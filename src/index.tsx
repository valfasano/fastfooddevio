/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { Kitchen } from './pages/Kitchen';
import { Payment } from './pages/Payment';
import { Withdrawal } from './pages/Withdrawal';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pagamento" element={<Payment />} />
      <Route path="/cozinha" element={<Kitchen />} />
      <Route path="/retirada" element={<Withdrawal />} />
    </Routes>
  </BrowserRouter>,
);
reportWebVitals();
