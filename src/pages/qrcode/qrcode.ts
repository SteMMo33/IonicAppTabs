import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html'
})
export class QrCodePage {

  constructor(public navCtrl: NavController, private qrScanner: QRScanner) {

    console.log("QrCodePate constr")
    
    this.qrScanner.prepare()
      .then( ( scanStatus: QRScannerStatus) => {
          if (scanStatus.authorized){
            console.log("Scanner autor.");
            // start scanning
            let scanSub = this.qrScanner.scan().subscribe( (text: string) => {
              console.log('Scanned something:', text);

              this.qrScanner.hide(); // hide camera preview
              scanSub.unsubscribe(); // stop scanning
            });
          } else if (scanStatus.denied) {
            // camera permission was permanently denied
            // you must use QRScanner.openSettings() method to guide the user to the settings page
            // then they can grant the permission from there
          } else {
            // permission was denied, but not permanently. You can ask for permission again at a later time.
          }
        }
      )
      .catch((e: any) => console.log('Error is ', e));
  }


}
