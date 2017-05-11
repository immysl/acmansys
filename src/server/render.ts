import { assets } from './config';

export const renderIndexPage = (configElements, preloadedState) => {
  const isProduction: boolean = process.env.NODE_ENV === 'production';
  const stateString = JSON.stringify(preloadedState).replace(/</g, '\\u003c');

  const stylesheetLinks = `
    <link rel="stylesheet" href=${assets.vendor.css} />
    <link rel="stylesheet" href=${assets.bundle.css} />
  `;

  return `
    <html lang="en">
      <head>
        <title>Tum Mensa</title>
        <meta charSet="utf-8" />
        ${isProduction ? stylesheetLinks : ''}
      </head>

      <body>
        <div id="app">${configElements}</div>

        <script>
          window.__PRELOADED_STATE__ = ${stateString};
        </script>

        <script src=${assets.vendor.js}></script>
        <script src=${assets.bundle.js}></script>
      </body>
    </html>
  `;
};
