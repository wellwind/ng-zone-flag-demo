import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  value1 = 0;
  value2 = 0;

  ngAfterViewInit() {
    setTimeout(() => {
      this.value1 = 1;
    }, 1000);

    requestAnimationFrame(() => {
      this.value2 = 2;
    });
  }
}
