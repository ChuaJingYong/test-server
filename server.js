const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const person = {
        name: 'John Doe'
    };
    res.json(person);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});