import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateProductService from '@modules/products/services/CreateProductService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    // TODO
    try {
      const { name, price, quantity } = request.body;

      const create = container.resolve(CreateProductService);
      const product = await create.execute({ name, price, quantity });

      return response.json(product);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}
