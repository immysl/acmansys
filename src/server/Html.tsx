import React from 'react';
import {assets} from './config';

interface HtmlProps {
  root: string;
}

const Html = (props: HtmlProps) => (
  <html lang="en">
    <head>
      <title>Tum Mensa</title>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href={assets.vendor.css} />
      <link rel="stylesheet" href={assets.bundle.css} />
    </head>

    <body>
      <div id="app" dangerouslySetInnerHTML={{__html: props.root}}></div>

      <script src={assets.vendor.js}></script>
      <script src={assets.bundle.js}></script>
    </body>
  </html>
);

export default Html;
