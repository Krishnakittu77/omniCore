import { Request, Response } from 'express';
import Product from '../models/Product';
import { redisClient } from '../server';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    const cacheKey = category ? `products:${category}` : `products:all`;
    
    // Check Redis Cache
    if (redisClient && redisClient.isOpen) {
      const cachedProducts = await redisClient.get(cacheKey);
      if (cachedProducts) {
        res.json({ source: 'cache', data: JSON.parse(cachedProducts) });
        return;
      }
    }

    // Fetch from MongoDB
    const filter = category ? { category: category as string } : {};
    const products = await Product.find(filter);

    // Save to Cache (1 hour expiration)
    if (redisClient && redisClient.isOpen) {
      await redisClient.setEx(cacheKey, 3600, JSON.stringify(products));
    }

    res.json({ source: 'database', data: products });
    return;
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal server error' });
    return;
  }
};
