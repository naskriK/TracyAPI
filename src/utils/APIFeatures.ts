import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export enum PrismaModels {
  TASK = "task",
}

export class APIFeatures<T> {
  data: T[] | null = null;
  constructor(public model: PrismaModels) {
    this.initializeData();
  }

  async initializeData() {
    // this.data = await prisma[this.model].findMany({});
  }
}
