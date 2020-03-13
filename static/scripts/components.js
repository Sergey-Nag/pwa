Vue.component('icon-item', {
  data: function () {
    return {
      icon: 'fa fa-home',
      className: 'icon-item'
    }
  },
  props: ['name', 'toScreen', 'currPage', 'isBig'],
  created() {

    if (this.name !== 'addBTN') {
      this.icon = 'fa fa-' + this.name;
    } else {
      this.icon = 'fa fa-plus';
      this.className += ' big';
    }

    this.classNameC = this.className;
    this.updateClass();
  },
  methods: {
    updateClass() {
      if (this.toScreen == this.currPage) this.className += ' active';
      else this.className = this.className.replace(' active', '');
      
      console.log(this.className, this.name)
    }
  },
  computed: {
    classNameC: {
      get: function () {
        this.updateClass();
        return this.className;
      },
      set: function (txt) {
        this.className = txt;
        this.updateClass();
      }
    }
  },
  template: '<div :class="[classNameC]" tabindex="1" :data-to-screen="toScreen"><i :class="icon"></i></div>'
});
