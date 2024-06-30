import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
	selector: 'ui-options-bottom-sheet',
	standalone: true,
	imports: [ MatListModule ],
	templateUrl: './options-bottom-sheet.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsBottomSheetComponent {

	constructor (private _bottomSheetRef: MatBottomSheetRef<OptionsBottomSheetComponent>) {}

	openLink (event: MouseEvent): void {
		this._bottomSheetRef.dismiss ();
		// console.log ('openLink', event);
		event.preventDefault ();
	}
}