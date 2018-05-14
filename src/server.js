const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const core = require('proceduria-core');
const { renderToString } = require('react-dom/server');
const path = require('path');

// const myGraphQLSchema = // ... define or import your schema here!
const PORT = 3000;

const app = express();

// bodyParser is needed just for POST.
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
// app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.use('/dist', express.static(path.resolve(__dirname, '../dist/')));

app.use('/init/:seed', (req, res) => {
    const { seed } = req.params;
    const hash = core.init(seed);
    res.end(JSON.stringify({ digest: `md5:${hash}`}));
});
app.get('/', (req, res) => {
    res.end(`<!DOCTYPE html><html>
        <head>
            <title>proc.edu.ria-server</title>
            <script src="/dist/client.js"></script>
        </head>
        <body>
            <div id="root"/>
        </body>
    </html>`);
});

app.listen(PORT);
