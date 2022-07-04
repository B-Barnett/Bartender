const mongoose = require('mongoose'),
    uri = 'users-db';

mongoose.connect(`mongodb://localhost/${uri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log("Database connected!"))
.catch(err => console.log("Error in the Database!"))