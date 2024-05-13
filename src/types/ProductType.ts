import { AdditionalItemType } from './AdditionalItem';
import { RequiredOptionToProductType } from './RequiredOption';

export interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  active: boolean;
  categoryId: string;
  additionals: AdditionalItemType[];
  requiredOption: RequiredOptionToProductType[];
  imageUrl?: string;
}
