export const API_URL = "https://api.fake-rest.refine.dev";
export const RESOURCE = [
  {
    name: "protected-products",
    list: "/",
    show: "/products/:id",
    edit: "/products/:id/edit",
    create: "/products/create",
    meta: { label: "products" },
  },
  {
    name: "protected-category",
    list: "/category",
    show: "/category/edit/:id",
    edit: "/category/:id/edit",
    create: "/category/create",
    meta: {
      label: "category",
      dataProviderName: "category",
    },
  },
];
