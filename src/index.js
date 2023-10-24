import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

/**
 * import { library } from '@fortawesome/fontawesome-svg-core';
 * import { fab } from '@fortawesome/free-brands-svg-icons';
 * import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faUserCircle)
 */

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
