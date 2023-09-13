interface Product {
  id: string;
  name: string;
  isRetailAllowed: boolean;
  brand: {
    id: string;
    name: string;
  };
  images: [];
}

interface IClients {
  email: string;
  firmName: string;
  lastName: string;
  name: string;
  phone: string;
  role: string;
}

interface IFuture {
  datetime: string;
  description: string;
  id: string;
  image: string;
  mobileImage: string;
  name: string;
  speaker: string;
  speaker_speciality: string;
}

interface IHistory {
  date: string;
  description: string;
  id: string;
  image: string;
  mobileImage: string;
  name: string;
}

interface IRequest {
  id: string;
  date: string;
  seminar: {
    id: string;
    name: string;
  };
  user: {
    id: string;
    phone: string;
    name: string;
    lastName: string;
    secondName: string;
    firmName: string;
  };
}

interface IProtocol {
  id: string;
  name: string;
  description: string;
  isRetailAllowed: boolean;
  brand: {
    id: string;
    name: string;
  };
  protocol_category: {
    id: string;
    name: string;
  };
  products: Product[];
}

interface IProtocolCategory {
  id: string;
  name: string;
}

interface IPromocode {
  id: string;
  name: string;
  percent: number;
  promocode: string;
  catalog_product: {
    id: string;
    name: string;
    position: number;
    __v: number;
  };
  sub_catalog_product: {
    id: string;
    name: string;
    position: number;
    catalog_product: string;
    __v: number;
  };
  products: Product[];
}

interface IBanners {
  createdAt: string;
  updatedAt: string;
  id: string;
  name: string;
  description: string;
  percent: string;
  image: string;
  mobileImage: string;
  availableFor: string;
  type: string;
  promocode: {
    id: string;
    name: string;
    promocode: null;
    percent: number;
    price: null;
  };
  products: Product[];
}

interface IBrands {
  icon: string;
  id: string;
  margin: number;
  name: string;
}

interface ICategory {
  id: string;
  name: string;
  position: number;
  __v: number;
}

interface ISubCategory {
  id: string;
  name: string;
  position: number;
  catalog_product: string;
  __v: number;
}

interface ICities {
  address: string;
  id: string;
  name: string;
}

interface IOrders {
  id: string;
  order_type: string;
  total: number;
  isViewedByAdmin: boolean;
  order_number: string;
  delivery_type: string;
  isPayed: boolean;
  user: {
    id: string;
    name: string;
    lastName: string;
    secondName: string;
    firmName: string;
    role: string;
  };
  warehouse: {
    city: string;
  };
  date: string;
}

interface Images {
  name: string;
}

interface ICharacteristics {
  id: string;
  key: string;
  value: string;
}

interface IProducts {
  id: string;
  nameFrom1C: string;
  name: string;
  codeFrom1C: string;
  brand: {
    id: string;
    name: string;
    icon: string;
  };
  description: string;
  images: Images[];
  price: number;
  sub_catalog_product: {
    id: string;
    name: string;
    position: number;
  };
  catalog_product: {
    id: string;
    name: string;
    position: number;
  };
  variations: [
    {
      id: number;
      value: string;
      code: string;
    }
  ];
  characteristics: ICharacteristics[];
  tags: [
    {
      id: string;
      name: string;
    }
  ];
}
export {
  type Images,
  type IBrands,
  type IBanners,
  type IOrders,
  type IProducts,
  type Product,
  type ICharacteristics,
  type ICities,
  type IClients,
  type IHistory,
  type IFuture,
  type IRequest,
  type IPromocode,
  type ISubCategory,
  type ICategory,
  type IProtocolCategory,
  type IProtocol,
};
