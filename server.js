const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const person = {
        name: 'John Doe'
    };
    res.json(person);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });