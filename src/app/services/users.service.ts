import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { delay, map } from 'rxjs';

import type { UserResponse, UsersResponse } from '@interfaces/req-response.interface';
import { State } from '@interfaces/state.interface';
// import { UserResponse, UsersResponse } from '../interfaces/req-response.interface';
// import { State } from '../interfaces/state.interface';

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	private http = inject (HttpClient);

	#state = signal <State> ({
		loading: true,
		users: [],
	});

	public users = computed (() => this.#state ().users);
	public loading = computed (() => this.#state ().loading);

	constructor () {
		// console.log ('Cargando data');
		this.http.get <UsersResponse> ('https://reqres.in/api/users')
		.pipe (delay (1500))
		.subscribe (resp => {
			this.#state.set ({
				loading: false,
				users: resp.data,
			});
		});
	}

	getUserById (id: string) {
		return this.http.get <UserResponse> (`https://reqres.in/api/users/${ id }`)
		.pipe (
			delay (1500),
			map (resp => resp.data)
		);
	}
}