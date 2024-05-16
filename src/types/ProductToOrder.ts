import { AdditionalItemType } from './AdditionalItem';
import { ProductType } from './ProductType';
import { RequiredItem, RequiredOptionToProductType } from './RequiredOption';

export interface ProductToOrderType extends ProductType {
  qt: number;
  requiredSelected?: RequiredOptionToProductType[];
  additionalSelected?: AdditionalItemType[];
  comment?: string;
  orderValue: number;
  status?: 'Enviado' | 'Em produção' | 'Entregue';
}
