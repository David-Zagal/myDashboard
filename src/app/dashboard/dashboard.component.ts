import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SideMenuComponent } from '@shared/side-menu/side-menu.component';
// import { SideMenuComponent } from '../shared/side-menu/side-menu.component';

@Component({
	selector: 'dashboard',
	standalone: true,
	imports: [RouterModule, SideMenuComponent],
	templateUrl: './dashboard.component.html',
})
export default class DashboardComponent {}