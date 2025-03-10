import {express} from 'express';
import {pkg} from 'body-parser';
import {Router} from './routes/router.js'

import sequelize from './utils/database.js';
import association from './utils/Association.js';

const app = express();
const {json, urlencoded} = pkg;

app.use(json());
app.use(urlencoded({extended: true}));

(async () => {
    try {
        association.associations();
        await sequelize.sync();
        app.listen(3000, function() {
            console.log('Server is running on port 3000');
            });            
    } catch (error) {
            console.log(error);   
    }
})();

app.use('/', Router);