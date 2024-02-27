import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';

const App = props => {
  return (
      <Fragment>
        <Navigation />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Fragment>
  );
};

export default App;
