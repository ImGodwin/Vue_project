//console.log("hello, vue");

const app = Vue.createApp({
  //template: "<h2>I am the template</h2>",
  data() {
    return {
      showBooks: true,
      title: "The better foreigner",
      author: "Godwin E.",
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },

    changeTitle(title) {
      //console.log("you clicked me");
      //this.title = "Words of radiance";
      this.title = title;
    },
  },
});

app.mount("#app");
