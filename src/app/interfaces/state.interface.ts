import { User } from '@interfaces/req-response.interface';
// import { User } from './req-response.interface';

export interface State {
	users: User[];
	loading: boolean;
}