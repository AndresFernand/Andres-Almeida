import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DatabaseService, Marca } from './../../services/database.service';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.page.html',
  styleUrls: ['./developer.page.scss'],
})
export class DeveloperPage implements OnInit {

  developer: Marca = null;
  
 
  constructor(private route: ActivatedRoute, private db: DatabaseService, private router: Router, private toast: ToastController) { }
 
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let devId = params.get('id');
 
      this.db.getDeveloper(devId).then(data => {
        this.developer = data;
      });
    });
  }
 
  delete() {
    this.db.deleteDeveloper(this.developer.id).then(() => {
      this.router.navigateByUrl('/');
    });
  }
 
  updateDeveloper() {
    
    this.db.updateDeveloper(this.developer).then(async (res) => {
      let toast = await this.toast.create({
        message: 'Developer updated',
        duration: 3000
      });
      toast.present();
    });
  }

}
