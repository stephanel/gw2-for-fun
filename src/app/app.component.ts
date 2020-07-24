import { Component } from '@angular/core';
import { LoadingService } from './infrastructure/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GW2 for fun';

  showLoadingBar: boolean = false;

  constructor(private loadingService: LoadingService) {
    this.loadingService.isLoading$
      .subscribe(loading => setTimeout(() => this.showLoadingBar = loading));
  }


}
