import AppUIInitializer from './appUIInitializer';
import AppEventsInitializer from './appEventsInitializer';
import ModuleInitializer from './moduleInitializer';
import Bus from './bus';

setTimeout(() => {
  $('body').addClass('loaded');
}, 1000);
const mi = new ModuleInitializer();
const ui = new AppUIInitializer();
const ei = new AppEventsInitializer();

ui.run();
ei.run();
mi.run();

Bus.moduleInitializer = mi;



