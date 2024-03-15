const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Set up routes
const appRoutes = require('./routes/appRoutes');
app.use('/api', appRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
