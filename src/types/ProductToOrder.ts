import { AdditionalItemType } from './AdditionalItem';
import { ProductType } from './ProductType';
import { RequiredOptionToProductType } from './RequiredOption';

export interface ProductToOrderType extends ProductType {
  qt: number;
  requiredSelected?: RequiredOptionToProductType;
  additionalSelected?: AdditionalItemType[];
  comment?: string;
  orderValue: number;
  status?: 'Recebido' | 'Em produção' | 'Entregue';
}
