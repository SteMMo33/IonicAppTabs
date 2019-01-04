import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public platformName: string[]
	public platformLang: string
	public connected: boolean = false

	private ws: WebSocket


	constructor(
		public navCtrl: NavController,
		public plt: Platform,
		public alertCtrl: AlertController
	) {
			console.log("Platforms: " + this.plt.platforms.length)
			this.platformName = plt.platforms()
			this.platformLang = plt.lang()
		}

  wsOpen() {
		console.log("Home:wsOpen")
		this.ws = new WebSocket( "ws://192.168.10.104:7681")
		this.ws.onopen = () => {
			console.log("onopen")
		}
		this.ws.onerror = () => {
			console.log("onerror")			
		}
		this.ws.onclose = () => {
			console.log("onclose")			
		}
		this.ws.onmessage = (ev) => {
			console.log("onmsg "+ ev)			
		}
		this.connected = true
  }

  wsClose() {
		console.log("Home:wsClose")
		if (this.connected)
			this.showConfirm()		
	}
	
	showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Close connection?',
      message: 'Are you sure to close current websocket connection?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
						console.log('Agree clicked')
						this.ws.close()
						this.connected = false
          }
        }
      ]
    });
    confirm.present();
	}
	
	wsSend() {
		console.log("Send")
	}
}
