import { Component } from '@angular/core';
import { CatFactService } from 'src/app/data/cat-fact.service';
import { CatFact } from 'src/app/data/models/cat-fact';

@Component({
  selector: 'app-fact-generator',
  templateUrl: './fact-generator.component.html',
  styleUrls: ['./fact-generator.component.scss'],
})
export class FactGeneratorComponent {
  isLoading = false;
  catFact: CatFact = {};

  constructor(private service: CatFactService) {}

  generateCatFact() {
    this.isLoading = true;

    // delay response to simulate fetching from server
    setTimeout(() => {
      this.service.getCatFacts().subscribe((data) => {
        this.catFact = data;
        this.isLoading = false;
      });
    }, 1000);
  }
}
