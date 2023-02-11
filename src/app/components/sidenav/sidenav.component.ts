import { Component } from '@angular/core';
import { StyleManagerService } from 'src/app/services/syle-manager.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  isLight = this.styleManagerService.isLight;

  constructor(private styleManagerService: StyleManagerService) {
  }

  public toggleLightTheme() {
      this.styleManagerService.toggleLightTheme();
      this.isLight = !this.isLight;
    }
}
