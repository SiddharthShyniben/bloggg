import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
	.catch(err => console.error(err));

console.clear();
console.log(`
%c
		                                         
       			 ____  __  ____                  
		       	/ ___)(  )(    \\                 
	       		\\___ \\ )(  ) D (                 
       			(____/(__)(____/                 
		                                         
           Thanks for checking this out!         
		                                         
		                                         
`, 'font-weight: bold; background-color: #000; font-family: monospace; color: #fff;');
