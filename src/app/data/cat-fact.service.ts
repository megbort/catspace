import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatFact } from './models/cat-fact';
import { CatBreed } from './models/cat-fact';

@Injectable({
  providedIn: 'root',
})
export class CatFactService {
  private baseURL: string;

  constructor(private service: HttpClient) {
    this.baseURL = 'https://catfact.ninja';
  }

  getCatFacts(): Observable<CatFact> {
    return this.service.get<CatFact>(`${this.baseURL}/fact?max_length=400`);
  }

  getCatBreeds(): Observable<CatBreed> {
    return this.service.get<CatBreed>(`${this.baseURL}/breeds?limit=100`);
  }
}
