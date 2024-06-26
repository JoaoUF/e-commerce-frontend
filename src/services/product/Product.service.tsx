import { AxiosResponse } from 'axios'
import AxiosConfig from '../AxiosConfig'
import { Product } from './Product.interface'
import { ListProduct } from './ListProduct.interface'
import { UUID } from 'crypto'

type OptionalNumber = number | null

export class ProductService {
  getAllProducts(limit: OptionalNumber = null, offset: OptionalNumber = null, search: string = ''): Promise<ListProduct> {
    return AxiosConfig.get(`product/?limit=${limit}&offset=${offset}&search=${search}`).then((response: AxiosResponse<ListProduct>) => response.data)
  }

  createProduct(data: any): Promise<Product> {
    return AxiosConfig.post('product/', data).then((response: AxiosResponse<Product>) => response.data)
  }

  getOneProduct(pk: UUID): Promise<Product> {
    return AxiosConfig.get(`product/${pk}/`).then((response: AxiosResponse<Product>) => response.data)
  }

  updateProduct(pk: UUID, data: any): Promise<Product> {
    return AxiosConfig.put(`product/${pk}/`, data).then((response: AxiosResponse<Product>) => response.data)
  }

  deleteProduct(pk: UUID) {
    return AxiosConfig.delete(`product/${pk}/`).then((response: AxiosResponse<Product>) => response.status)
  }
}