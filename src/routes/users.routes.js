import {Router} from 'express';
import { pool } from '../db.js'; 
const router = Router();

router.get('/users', (req, res) => {
    res.send('Obteniendo Users');
});

router.get('/users/:id', (req, res) => {
    const {id} = req.params
    res.send('Obteniendo User ' + id);
});

router.post('/users', (req, res) => {
    res.send('Creando User');
});

router.delete('/users/:id', (req, res) => {
    const {id} = req.params
    res.send('Eliminando User ' + id);
});

router.put('/users/:id', (req, res) => {
    const {id} = req.params
    res.send('Actualizar User ' + id);
});

export default router;