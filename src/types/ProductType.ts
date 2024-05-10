import { AdditionalToProductType } from './AdditionalToProductType';
import { RequiredOptionToProductType } from './RequiredOption';

export interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  active: boolean;
  categoryId: string;
  additionals?: AdditionalToProductType[];
  requiredOption?: RequiredOptionToProductType[];
}
