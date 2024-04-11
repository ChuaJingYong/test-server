const express = require('express');
const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
    const person = {
        name: 'John Doe'
    };
    res.json(person);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });