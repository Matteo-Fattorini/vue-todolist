const app = new Vue({
  el: "#main",
  data: {
    tasks: [],
    text: "",
    toggle: [],
  },
  methods: {
    push() {
      if (this.text != "") {
        this.tasks.push(this.text);
        this.text = "";
        this.toggle.push(false);
      }
    },
    remove(e) {
      this.tasks.splice(e, 1);
      this.toggle.splice(e, 1);
      this.text = "";
      
    },

    color(i) {
      if (this.toggle[i] == false) {
        this.toggle.splice(i, 1, true);
      } else {
        this.toggle.splice(i,1,false);
      }
     
    },
  },
});
