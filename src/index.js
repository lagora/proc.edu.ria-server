const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const core = require('proceduria-core');

// const myGraphQLSchema = // ... define or import your schema here!
const PORT = 3000;

const app = express();

// bodyParser is needed just for POST.
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
// app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.use('/init', (req, res) => {
    const hash = core.init();
    res.end(JSON.stringify({ digest: `md5:${hash}`}));
});
app.get('/', (req, res) => res.end('hello world'));

app.listen(PORT);
