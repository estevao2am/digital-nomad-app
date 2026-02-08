import { Repositories } from "@/src/domain/Repositories";
import { InMemoryCategoryRepo } from "./InMemoryCategoryRepo";
import { InMemoryCityRepo } from "./InMemoryCityRepo";
import { InMemoryAuthRepo } from "./inMemoryAuthRepo";

export const InMemoryRepository: Repositories = {
  auth: new InMemoryAuthRepo(),
  city: new InMemoryCityRepo(),
  category: new InMemoryCategoryRepo(),
};
