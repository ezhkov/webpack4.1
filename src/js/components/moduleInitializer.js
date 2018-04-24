export default class ModuleInitializer {
  constructor() {
    this.pageModules = [...document.querySelectorAll('[data-block]')].map(elem => elem.getAttribute('data-block'));
  }
  run() {
    this.pageModules.forEach((moduleName) => {
      this.runModule(moduleName);
    })
  }
  runModule(moduleName) {
    import(`./${moduleName}.js`).then(Module => {
      try {
        const _m = new Module.default();
        _m.run();
      } catch (err){
        console.group(moduleName);
        console.warn(err);
        console.groupEnd();
      }
    }).catch((err) => {
      console.group(moduleName);
      console.warn(err);
      console.groupEnd();
    })
  }
  runModules(modules) {

  }
}
