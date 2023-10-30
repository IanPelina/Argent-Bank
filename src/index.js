import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './utils/store';

import { Provider } from 'react-redux';

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
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);
