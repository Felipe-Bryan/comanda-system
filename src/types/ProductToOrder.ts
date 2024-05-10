import { AdditionalToProductType } from './AdditionalToProductType';
import { ProductType } from './ProductType';
import { RequiredOptionToProductType } from './RequiredOption';

export interface ProductToOrderType extends ProductType {
  qt: number;
  requiredSelected?: RequiredOptionToProductType;
  additionalSelected?: AdditionalToProductType[];
  comment?: string;
}
