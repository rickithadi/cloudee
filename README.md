# Cloudee

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

forked from LucHariman/ng-tagcanvas

npm install cloudee
Then add CloudyModule to your app's module
Demo available here https://cloudee-demo.stackblitz.io/
With code https://stackblitz.com/edit/cloudee-demo

	Usage example
	...
	module.ts

	import { CloudyModule } from 'cloudee';
	...
	@NgModule({
	...
	  imports: [
	  ...
	      CloudyModule
	        ]
		...
	component.html

	...
	<lib-cloudy [tags]="myTags" [options]="{ dragControl: true,
	weight: true }"
	(tagClick)="showTagDetails($event)"></lib-cloudy>
	...

	component.ts
	...
	import <Tag> from 'cloudee'
	...
		tags: Tag[] = [
			{ weight: 16, text: 'insurance',image: '../favicon.ico'  },
					{ weight: 24, text: 'lay' ,image: '../favicon.ico' },
					{ weight: 18, text: 'tense'  },
					{ weight: 16, text: 'cabin' ,image: '../favicon.ico' },
					{ weight: 32, text: 'bomb' ,image: '../favicon.ico' },
					{ weight: 30, text: 'broadcast' ,image: '../favicon.ico' },
					{ weight: 18, text: 'portion' ,image: '../favicon.ico' },
		];
		options: TagCanvasOptions = {
					dragControl: true,
			imageMode:'text',
					clickToFront: 500,
					initial: [ .1, 0 ],
					weight: true
				};



