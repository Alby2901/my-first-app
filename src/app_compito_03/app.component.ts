import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetail: boolean = false;
  countClick: number = 0;
  countClicks = [];

  onShowDetail() {
    this.showDetail = !this.showDetail;
    if (this.showDetail === true) {
      this.countClick = this.countClick + 1;
      // this.countClicks.push(this.countClick);
      this.countClicks.push(Date());
    }
  }

  getColor() {
    let colore = "";
    if (this.countClicks.length >= 5) {
      colore = "blue"
    };
    console.log("siamo qui! ") + colore;
    return colore;
  }

}
