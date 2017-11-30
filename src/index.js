const heml = require('heml');
const Rx = require('rxjs/Rx');

const options = { validate: 'soft' };

function buildHeml() {
  return Rx.Observable.fromPromise(
    heml(
      `
      <heml>
        <head>
          <subject>My Email</subject>
        </head>
        <body>
          <container>
            <row>
              <column><p>hi there!</p></column>
            </row>
          </container>
        </body>
      </heml>
      `,
      options
    )
  );
}

module.exports = buildHeml;
