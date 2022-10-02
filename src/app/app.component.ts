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
  msg:string;
  nascosto = true; 
  conteggi: [{ctg: number, ctgSt: string}] = [{ctg: 0, ctgSt: 'non definito'}];

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

  onButtonStartPressed(messaggio: string) {
    this.nascosto = true;
    this.msg = messaggio;
    console.log('app =>> Start pressed');
    console.log('app =>> this.msg > ' + this.msg);
    this.conteggio = 0;
    this.conteggi = [{ctg: 0, ctgSt: 'non definito'}];
    this.myInterval = setInterval(
      () => {
        this.conteggio += 1;
        if (this.conteggio % 2 == 0) {
          this.statoConteggio = 'pari'
        } else {
          this.statoConteggio = 'dispari'
        } 
        this.conteggi.push({ctg: this.conteggio, ctgSt: this.statoConteggio}); 
        // this.conteggi.push({ctg: 3, ctgSt: 'pluto'}); 
        console.log('conteggio  vale => ' + this.conteggio);
        console.log('statoConteggio  vale => ' + this.statoConteggio);
      }, 1000);
  }

  onButtonStopPressed(messaggio: string) {
    this.msg = messaggio;
    console.log('app =>> Stop pressed');
    console.log('app =>> this.msg > ' + this.msg);
    console.log('app =>> this.conteggi > ' + this.conteggi.toString());
    clearInterval(this.myInterval);
    this.nascosto = false; 
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
