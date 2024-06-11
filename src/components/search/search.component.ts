import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  providers: [SearchService],
})
export class SearchComponent implements OnInit {
  query: string = '';
  results: any[] = [];

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.query = params.get('query') || '';
      this.onSearch();
    });
  }

  onSearch(): void {
    if (this.query) {
      this.searchService.search(this.query).subscribe((data) => {
        this.results = data.webPages ? data.webPages.value : [];
      });
    }
  }
}
