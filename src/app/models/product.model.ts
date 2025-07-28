export interface IProductLocation {
  id: string;
  brand: string;
  category: string;
  device_pn: string;
  qty: number;
  condition: string;
  edit_user: string;
  notes: string;
}

export interface IEbayListing {
  listing_id: string;
  sku: string;
  condition_id: string;
  product_id: string;
  title: string;
  price: number;
  listing_qty: number;
  inventory_qty: number;
}

export interface ISameProduct {
  original_id: string;
  same_id: string;
  fk_edit_employee: string;
}

export interface IProduct {
  id: string;
  brand: string;
  model_series: string;
  device_pn: string;
  dev_type: string;
  rnk: number;
  min_price: number;
  max_price: number;
  quantity: number;
  ePrq: number;
  eA4q: number;
  sku: string;
  l_user: string;
  category: string;
  e_user: string;
  green_id: string;
  edit_at: string;
  create_at: string;
  amazon_listing_src: string;
  elCcq: number;
  amazq: number;
  notes: string;
  photo_device: string;
  photo_data_plate: string;
  location: IProductLocation[];
  ebay_listings: IEbayListing[];
  same_products: ISameProduct[];
}
