export interface CatFact {
  fact?: string;
  length?: number;
}

export interface CatBreedData {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

export interface CatBreed {
  page: number;
  data: CatBreedData[];
}