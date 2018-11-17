import express from 'express';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import counterReducer from './client/reducers';
import PortfolioApp from './client/components/PortfolioApp';

const compiler = webpack(webpackConfig[0]);
const app = express();

const port = 3000;

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig[0].output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.use('/static', express.static('dist/static'));

app.use((req, res) => {
  const store = createStore(counterReducer);
  const context = {};
  const sheet = new ServerStyleSheet();
  const html = renderToString(sheet.collectStyles(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <PortfolioApp />
      </StaticRouter>
    </Provider>,
  ));
  const styles = sheet.getStyleTags();

  const preloadedState = store.getState();


  // This should be in another file I think :p
  const pageToRender = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Rodrigo Custodio</title>
        ${styles}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.PRELOADED_STATE = ${
  JSON.stringify(preloadedState).replace(/</g, '\\u003c')
}
        </script>
        <script src="/static/main.js"></script>
      </body>
    </html>
  `;

  res.send(pageToRender);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
