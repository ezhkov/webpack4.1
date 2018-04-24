class B {
  constructor() {
    this.dateFormat = 'DD.MM.YYYY[T]HH:mm:ss';
    this.documentDateFormat = 'DD.MM.YYYY[T]00:00:00';
    this.months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    this.$infoPopup = $('#infoPopup');
    this.$infoPopupHeader = this.$infoPopup.find('.js-info-popup-header');
    this.$infoPopupMessage = this.$infoPopup.find('.js-info-popup-text');
    this.layoutController = null;
    this.showInfoMessage = function (header, message, extraOpts) {
      this.$infoPopupHeader.html(header);
      this.$infoPopupMessage.html(message);
      const _newSettings = $.extend({}, window.PAGE_DATA.fancyDefaultSettings, {
        content: this.$infoPopup,
      });
      let newSettings = {};
      if (extraOpts) {
        newSettings = $.extend({}, _newSettings, extraOpts);
      } else {
        newSettings = $.extend({}, _newSettings, {});
      }

      $.fancybox(newSettings);
    };
    this.page = $('body').attr('data-page');
    this.fancyDefaultSettings = {
      padding: [0, 0, 0, 0],
      wrapCSS: 'fancy-popup',
      tpl: {
        closeBtn: '<div class="fancybox__close"><a class="fbx__close icon-cross" href="#"></a></div>',
      },
      minWidth: 380,
      openEffect: 'none',
      closeEffect: 'fade',
      nextEffect: 'elastic',
      prevEffect: 'elastic',
      modal: true,
    };
    this.isDesktop = device.desktop();
    this.isPhablet = device.tablet() && window.innerWidth < 642;
    this.isMobile = device.mobile() || this.isPhablet;
    this.isTouch = this.isMobile || device.tablet() || ('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
    this.historyAnalyseDate = '';
    this.visitId = '';
    this.$tablePopup = $('.js-table-popup');
  }
}

export default new B();
