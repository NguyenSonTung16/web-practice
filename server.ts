import express from 'express';
import router from './backend/routes/homeRoutes';
const app= express();
const port= 3000;
app.use(express.json());
app.use(express.static('.'));
app.use('/api', router);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});