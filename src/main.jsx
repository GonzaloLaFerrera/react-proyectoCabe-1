import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { router } from './config/router.jsx';
import { RouterProvider } from 'react-router-dom';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import UserProvider from './context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
          <RouterProvider router={router} />
      </UserProvider>
    </Provider>
  </React.StrictMode>,
)
