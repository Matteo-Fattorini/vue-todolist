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
      this.text = "";
    },

    color(i) {
      if (this.toggle[i] == false) {
        this.toggle[i] = true;
      } else {
        this.toggle[i] = false;
      }

      console.log(this.toggle[i]);
      console.log(this.toggle);
      return this.toggle[i];
    },
  },
});
