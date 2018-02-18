import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  createSuccess = false;
  registerCredentials = {emial: '', password: ''};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private authService: AuthServiceProvider) {
  }

  public register() {
    this.authService.register(this.registerCredentials).subscribe(success => {
      if(success) {
        this.createSuccess = true;
        this.showPopup('Success', 'Account created.');
      } else {
        this.showPopup('Error', 'Problem creating account.')
      }
    },
    error => {
      this.showPopup('Error', error);
    })
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
