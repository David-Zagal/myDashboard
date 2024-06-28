import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { routes } from '@routes';

@Component({
	selector: 'shared-side-menu',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './side-menu.component.html',
	styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

	public menuItems: Route[] = routes.map (route => route.children ?? [])
	.flat ()
	.filter (route => route && route.path)
	.filter (route => !route.path?.includes (':'));

	constructor () {
		// const dashboardRoutes: Route[] = routes.map (route => route.children ?? [])
		// .flat ()
		// .filter (route => route && route.path)
		// .filter (route => !route.path?.includes (':'));
	}
}