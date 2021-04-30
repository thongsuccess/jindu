import data from "./data.json";

export default {
  data() {
    return {
      dataSource: []
    };
  },
  mounted() {
    // console.log(data);
    this.dataSource = data;
  },
  computed: {
    total() {
      //   let tol = 0;
      //   this.dataSource.map(item => {
      //     tol += item.price * item.count;
      //   });
      //   return tol;
      let tol = this.dataSource.reduce((proTotal, item) => {
        return (proTotal += item.price * item.count);
      }, 0);
      return tol;
    }
  },
  methods: {
    // handleMinus(idx) {
    //   this.dataSource[idx].count--;
    // },
    handleAdd(idx) {
      this.dataSource[idx].count++;
    },
    handleClean() {
      this.dataSource.forEach(item => {
        item.count = 0;
      });
    }
  }
};
