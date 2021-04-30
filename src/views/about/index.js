import axios from "axios";

export default {
  data() {
    return {
      column: [
        {
          title: "序号",
          dataIndex: "",
          customRender(cur, row, i) {
            return i + 1;
          },
          align: "center"
        },
        {
          title: "产品名称",
          dataIndex: "product_name",
          align: "center"
        },
        {
          title: "折扣价",
          dataIndex: "product_price",
          align: "center"
        },
        {
          title: "原始价",
          dataIndex: "product_uprice",
          align: "center"
        },
        {
          title: "操作",
          key: "action",
          scopedSlots: { customRender: "action" },
          align: "center"
        }
      ],
      dataSource: [],
      pagination: {
        current: 1,
        pageSize: 10,
        total: 0
      },
      initDataLoading: false,
      visible: false,
      imageData: []
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.initDataLoading = true;
      axios
        .get(
          `http://47.96.117.121:7002/home/page/${this.pagination.current}/${this.pagination.pageSize}`
        )
        .then(res => {
          // console.log(res);
          this.dataSource = res.data.data;
          this.pagination.total = res.data.pageTotal;
          this.initDataLoading = false;
        });
    },
    changeTableSize(pagination) {
      // console.log(pagination)
      this.pagination = pagination;
      this.initData();
    },
    changeDetail(item) {
      this.visible = true;
      // console.log(item);
      axios
        .get("http://47.96.117.121:7002/detail", {
          params: {
            mId: item.product_id
          }
        })
        .then(res => {
          console.log(res);
          this.imageData = res.data[0];
        });
    },
    onChange(a, b, c) {
      console.log(a, b, c);
    },
    cancel() {
      this.visible = false;
    }
  }
};
