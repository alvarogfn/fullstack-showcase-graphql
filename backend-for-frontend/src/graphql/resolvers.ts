import { API } from "../API/API";
import { Product, Resolvers, Showcase } from "./types";

export const resolvers: Resolvers = {
  Query: {
    async showcase(_, args) {
      const result = await API.get<Showcase>(`/showcase/${args.id}`);
      return result.data;
    },
    async showcases() {
      const result = await API.get<Showcase[]>(`/showcases`);
      return result.data;
    },
    async products(_, args) {
      const result = await API.get<Product[]>(`/products`);
      return result.data;
    },
    async product(_, args) {
      const result = await API.get<Product>(`/product/${args.id}`);
      return result.data;
    },
  },
  Mutation: {
    async createShowcase(_, args, context, info) {
      const result = await API.post<Showcase>(`/showcases`, {
        name: args.input?.name,
        description: args.input?.description,
        products: args.input?.products ?? [],
      });
      return result.data;
    },
    async updateShowcase(_, args) {
      const result = await API.put<Showcase>(`/showcase/${args.id}`, {
        name: args.input?.name,
        description: args.input?.description,
        products: args.input?.products ?? [],
      });
      return result.data;
    },
    async deleteShowcase(_, args) {
      const result = await API.delete(`/showcase/${args.id}`);
      return result.status === 204;
    },

    async createProduct(_, args) {
      const result = await API.post<Product>(`/products`, {
        name: args.input?.name,
        price: args.input?.price,
        description: args.input?.description,
        image: args.input?.image,
      });
      return result.data;
    },

    async updateProduct(_, args) {
      const result = await API.put<Product>(`/product/${args.id}`, {
        name: args.input?.name,
        price: args.input?.price,
        description: args.input?.description,
        image: args.input?.image,
      });
      return result.data;
    },

    async deleteProduct(_, args) {
      const result = await API.delete(`/product/${args.id}`);
      return result.status === 204;
    },
  },
};
