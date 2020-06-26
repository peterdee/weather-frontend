import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './views/About/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Index from './views/Index/Index';
import NotFound from './views/NotFound/NotFound';

import './App.scss';

const App: React.FC = () => (
  <>
    <div className="flex direction-column justify-content-start app-wrap">
      <Header />
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
    <Footer />
  </>
);

export default memo(App);
