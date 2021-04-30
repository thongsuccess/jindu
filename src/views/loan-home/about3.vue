<template>
  <div>
    <!-- <a-table rowKey="id" :dataSource="dataSource" :columns="columns"></a-table> -->
    <ul>
      <li v-for="(item, idx) in list" :key="idx">
        <div>
          <a-checkbox :checked="item.check" @change="changeRadio(item)"
            >Radio</a-checkbox
          >
        </div>
        <div class="name">{{ item.name }}</div>
        <div class="price">
          单价
          {{ item.price }}
        </div>
        <div>
          <a-button
            type="primary"
            :disabled="item.count === 0"
            @click="del(idx)"
            >-</a-button
          >
          {{ item.count }}
          <a-button type="primary" :disabled="!item.check" @click="add(idx)"
            >+</a-button
          >
        </div>
      </li>
    </ul>
    <h2>总价</h2>
    <h3>{{ totalPrices }}</h3>
    <h2>总数量</h2>
    <h3>{{ totalCount }}</h3>
  </div>
</template>

<script>
import aData from "./data/about3.json";
export default {
  data() {
    return {
      list: [],
      dataSource: [],
      columns: [
        {
          title: "全选",
          key: "",
          align: "center"
        },
        {
          title: "商品名称",
          dataIndex: "name",
          key: "name",
          align: "center"
        },
        {
          title: "商品价格",
          dataIndex: "price",
          key: "price",
          align: "center"
          // scpoedSlots: {
          //   customRender(cur, row) {
          //     return cur + row;
          //   }
          // }
        }
      ]
    };
  },
  mounted() {
    // this.dataSource = aData;
    this.list = aData;
  },
  computed: {
    totalPrices() {
      let total = 0;
      this.list.forEach(item => {
        total += item.price * item.count;
      });
      return total.toFixed(2);
    },
    totalCount() {
      let total = 0;
      this.list.forEach(item => {
        total += item.count;
      });
      return total;
    }
  },
  methods: {
    changeRadio(item) {
      item.check = !item.check;
    },
    add(idx) {
      this.list[idx].count++;
    },
    del(idx) {
      this.list[idx].count--;
    }
  }
};
</script>

<style lang="less" scoped>
li {
  list-style: none;
  display: flex;
  div {
    margin: 0 20px;
    display: flex;
  }
}
</style>
