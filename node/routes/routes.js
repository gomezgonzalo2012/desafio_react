import express from 'express'
import { getAllCareers, getCareer, createCareer, updateCareer, getCareerByName } from '../controllers/CareerController.js'

const router = express.Router();

router.get('/', getAllCareers);
// router.get('/id/:id', getCareer);
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  // Validar si el id no es numérico, llamar a next() para permitir que otras rutas coincidan.
  if (isNaN(id)) {
    return next(); // Pasar al siguiente middleware (por ejemplo, /name/:name)
  }
  getCareer(req, res);
});
router.get('/name/:name', getCareerByName);
router.post('/', createCareer);
router.put('/:id', updateCareer);

export default router ;
