import { Router } from 'express';
import { getProducts } from '../controllers/product.controller';

const router = Router();

// GET /api/products (supports ?category=xyz)
router.get('/', getProducts);

export default router;
