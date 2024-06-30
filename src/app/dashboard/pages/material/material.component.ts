import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { OptionsBottomSheetComponent } from './ui/options-bottom-sheet/options-bottom-sheet.component';

@Component({
	selector: 'app-material',
	standalone: true,
	imports: [ CommonModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatIconModule, MatSlideToggleModule ],
	templateUrl: './material.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MaterialComponent {

	constructor (private _bottomSheet: MatBottomSheet) {}

	public openBottomSheet () {
		this._bottomSheet.open (OptionsBottomSheetComponent);
	}
}