import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'wouter';

import Layout from '@/components/smart/layout-wrapper';
import { SuspendedRoute } from './components/smart/suspended-route';
import './index.css';

const NotFoundPage = React.lazy(() => import('./routes/error'));

const HomePage = React.lazy(() => import('./routes/home'));

const ShortLinkPage = React.lazy(() => import('./routes/shortLink'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <Router>
        <SuspendedRoute path='/' fallback={null}>
          <HomePage />
        </SuspendedRoute>
        <SuspendedRoute path='/s/:slug' fallback={null}>
          <ShortLinkPage />
        </SuspendedRoute>
        <SuspendedRoute path='*' fallback={null}>
          <NotFoundPage />
        </SuspendedRoute>
      </Router>
    </Layout>
  </React.StrictMode>
);
