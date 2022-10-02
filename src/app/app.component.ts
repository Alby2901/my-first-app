import { AfterContentChecked, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterContentChecked {
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test!' }];
  conteggio: number = 0;
  statoConteggio: string = '';
  myInterval: any;

  ngOnInit(): void {
    // if (this.conteggio % 2 == 0) {
    //   this.statoConteggio = 'pari'
    // } else {
    //   this.statoConteggio = 'dispari'
    // }
  }

  ngAfterContentChecked(): void {
    // if (this.conteggio % 2 == 0) {
    //   this.statoConteggio = 'pari'
    // } else {
    //   this.statoConteggio = 'dispari'
    // }  
  }

  onButtonStartPressed() {
    this.myInterval = setInterval(
      () => {
        this.conteggio += 1;
        if (this.conteggio % 2 == 0) {
          this.statoConteggio = 'pari'
        } else {
          this.statoConteggio = 'dispari'
        } 
        console.log('conteggio  vale => ' + this.conteggio);
        console.log('statoConteggio  vale => ' + this.statoConteggio);
      }, 1000);
  }

  onButtonStopPressed() {
    console.log('app =>> Stop pressed');
    clearInterval(this.myInterval);
  }

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    console.log('Chage Pressed!');
    this.serverElements[0].name = 'Changed!'
  }

  onDestroyFirst() {
    console.log('Destroy Pressed!');
    this.serverElements.splice(0, 1);
  }

}
