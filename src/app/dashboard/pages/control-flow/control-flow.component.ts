import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { Grade } from '@interfaces/grade.type';
import { Grade } from '../../../interfaces/grade.type';

// import { TitleComponent } from '@shared/title/title.component';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
	standalone: true,
	imports: [CommonModule, TitleComponent],
	templateUrl: './control-flow.component.html',
	styles: ``
})
export default class ControlFlowComponent {

	public showContent: WritableSignal<boolean> = signal (false);
	public grade: WritableSignal<Grade> = signal<Grade> ('A');
	public frameworks = signal (['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
	public frameworks2 = signal ([]);

	public toggleContent () {
		this.showContent.update (value => !value);
	}
}