import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
