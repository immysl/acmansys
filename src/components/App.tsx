import React from 'react';

import Header from './layout/Header';
import Footer from './layout/Footer';
import routes from '../client/routes';

const App = () => (
  <div className="container">
    <Header />
    {routes}
    <Footer />
  </div>
);

export default App;
