import { Request, Response } from 'express';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';

import { container } from 'tsyringe';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    // TODO
    try {
      const { name, email } = request.body;

      const create = container.resolve(CreateCustomerService);
      const customer = await create.execute({ name, email });

      return response.json(customer);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}
