import Bus from './bus';

export default class AppEventsInitializer {
  constructor() {
    if (window.PAGE_DATA.develop) {
      console.log('Initializing Utils: Application events initializer');
    }
    this.events = {
      
    };
  }

  run() {
    /* Global site Events initialize here */
    
    (function ($) {
      const o = $({});
      $.subscribe = function () {
        o.on.apply(o, arguments);
      };
      $.unsubscribe = function () {
        o.off.apply(o, arguments);
      };
      $.publish = function () {
        o.trigger.apply(o, arguments);
      };
    }($));
  }
}
