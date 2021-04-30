import Clipboard from "clipboard";
import { arr } from "@/utils/index.js";
import fun from "@/utils/test.js";

export default {
  name: "Home",
  data() {
    return {
      toDay: null,
      weekDate: null,
      monthFirst: null,
      monthLast: null,
      courseTypeList: [
        {
          id: "16",
          courseTypeName: "小一班"
        },
        {
          id: "15",
          courseTypeName: "一班"
        },
        {
          id: "14",
          courseTypeName: "一班"
        }
      ],
      allCheck: false,
      checklist: [
        { check: false, name: "A1" },
        { check: true, name: "A2" },
        { check: false, name: "A3" },
        { check: false, name: "A4" }
      ],
      aa: [],
      n: 1
    };
  },
  computed: {},
  mounted() {
    this.aa = arr;
    console.log(arr); // export
    console.log(fun); // export default
    this.getDay();
    this.getWeek();
    this.monthFirst = this.getCurrentMonthFirst();
    this.monthLast = this.getCurrentMonthLast();
  },
  methods: {
    copy(className) {
      const clipboard = new Clipboard("." + className);
      clipboard.on("success", () => {
        alert("复制成功");

        return;
      });
      clipboard.on("error", () => {
        alert("当前浏览器不支持自动复制");
        return;
      });
    },
    showChildren(item) {
      console.log(item);
      item.state = true;
    },
    getDay() {
      let day = new Date();
      this.toDay = day.toLocaleDateString().replace(/\//g, "-");
    },
    getWeek() {
      const now = new Date(); // 当前日期
      let nowDayOfWeek = now.getDay(); // 今天本周的第几天
      nowDayOfWeek === 0
        ? (nowDayOfWeek = 6)
        : (nowDayOfWeek = nowDayOfWeek - 1);
      const nowDay = now.getDate(); // 当前日
      const nowMonth = now.getMonth(); // 当前月
      let nowYear = now.getYear(); // 当前年
      nowYear += nowYear < 2000 ? 1900 : 0;
      const weekStart = this.getWeekStartDate(
        nowYear,
        nowMonth,
        nowDay,
        nowDayOfWeek
      );
      const weekEnd = this.getWeekEndDate(
        nowYear,
        nowMonth,
        nowDay,
        nowDayOfWeek
      );
      this.weekDate = `${weekStart} ~ ${weekEnd}`;
    },
    // 获得本周的开始日期
    getWeekStartDate(nowYear, nowMonth, nowDay, nowDayOfWeek) {
      const weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
      return this.formatDate(weekStartDate);
    },
    // 获得本周的结束日期
    getWeekEndDate(nowYear, nowMonth, nowDay, nowDayOfWeek) {
      const weekEndDate = new Date(
        nowYear,
        nowMonth,
        nowDay + (6 - nowDayOfWeek)
      );
      return this.formatDate(weekEndDate);
    },
    /* 获取当月第一天 */
    getCurrentMonthFirst() {
      const date = new Date();
      date.setDate(1);
      const month = parseInt(date.getMonth() + 1);
      const day = date.getDate();
      return date.getFullYear() + "-" + month + "-" + day;
    },
    /* 当月最后一天 */
    getCurrentMonthLast() {
      const date = new Date();
      let currentMonth = date.getMonth();
      const nextMonth = ++currentMonth;
      const nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
      const oneDay = 1000 * 60 * 60 * 24;
      const lastTime = new Date(nextMonthFirstDay - oneDay);
      const month = parseInt(lastTime.getMonth() + 1);
      const day = lastTime.getDate();
      return new Date(date.getFullYear() + "-" + month + "-" + day)
        .toJSON()
        .slice(0, 10);
    },
    formatDate(date) {
      const myyear = date.getFullYear();
      const mymonth = date.getMonth() + 1;
      const myweekday = date.getDate();
      return myyear + "-" + mymonth + "-" + myweekday;
    },
    // 全选
    handleAllCheck() {
      this.checklist.forEach(item => {
        item.check = this.allCheck;
      });
    },
    curHandleCheck() {
      // let num = this.checklist.filter(item => item.check).length;
      // num == this.checklist.length
      //   ? (this.allCheck = true)
      //   : (this.allCheck = false);
      this.allCheck = this.checklist.every(item => item.check);
    }
  }
};
