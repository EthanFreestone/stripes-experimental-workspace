import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';

import { Route } from '@folio/stripes/core';
import css from './index.css';
import MainRoute from './MainRoute';

const App = (props) => {
  // Destructure important props
  const {
    actAs,
    history,
    location: { pathname },
    match: { path },
  } = props;

  return (
    <div className={css.container}>
      <div className={css.body}>
        <Switch>
          <Route component={MainRoute} path={path} />
        </Switch>
      </div>
    </div>
  );
};

App.propTypes = {
  history: PropTypes.object,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  match: PropTypes.object.isRequired,
  actAs: PropTypes.string.isRequired,
};

export default App;
