import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateProductService from '@modules/products/services/CreateProductService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    console.log('passou pelo controller');

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      price,
      name,
      quantity,
    });
    return response.json(product);
  }
}
