<template>
  <div class="tab-bar-sty" ref="checkedDistance">
    <ul :style="[{'width':`${ulWidth}px`}]" >
      <!-- {'transform': `translateX(${translateDistance}px)`} -->
      <li v-for="t in tabbarList" :key="t.key" ref="li">
        <p :class="checkedTab === t.key ? 'checked_sty' : ''" @click="changeBar(t)">{{t.text}}</p>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "tabBar",
  data() {
    return {
      ulWidth: 0,
      translateDistance: 0
    };
  },
  watch: {
    $route: function() {
      this.tabFn();
    },
    // 'translateDistance': function() {
    //   this.$refs.checkedDistance.scrollLeft = '10'
    // }
  },
  computed: {
    checkedTab() {
      let id = this.$route.params.id || "";
      if (id !== "") {
        return id;
      } else {
        return "1";
      }
    }
  },
  props: {
    tabbarList: {
      type: Array,
      default: () => {
        return [
          // {
          //   key: "1",
          //   text: "首页"
          // },
          {
            key: "5",
            text: "打私要闻"
          },
          {
            key: "24",
            text: "各地动态"
          },
          {
            key: "65",
            text: "通知通报"
          },
          {
            key: "27",
            text: "案件通报"
          },
          {
            key: "28",
            text: "政策法规"
          },
          {
            key: "34",
            text: "部门协作"
          },
          // {
          //   key: "56",
          //   text: "专题报道"
          // },
          {
            key: "31",
            text: "卫士风采"
          },
          {
            key: "32",
            text: "投稿排名"
          },
          {
            key: "33",
            text: "友情链接"
          }
        ];
      }
    },
    checkedKey: {
      type: String,
      default: "1"
    }
  },
  mounted() {
    let $li = this.$refs.li;
    let a = 0;
    $li.forEach(e => {
      a += Number(e.clientWidth);
    });
    this.ulWidth = a;
    this.tabFn();
  },
  methods: {
    changeBar(item) {
      this.$emit("changeBar", item);
    },
    tabFn() {
      let currentId = this.$route.params.id || "5";
      let currentIndex = 0;
      let translateX = 0;
      let liList = this.$refs.li;
      let currentClentWidth = document.body.clientWidth;
      this.tabbarList.forEach((e, index) => {
        if (e.key == currentId) {
          currentIndex = index;
        }
      });
      let selfWidth = liList[currentIndex].clientWidth;
      while (currentIndex >= 0) {
        translateX += liList[currentIndex].clientWidth;
        currentIndex--;
      }
      if (translateX > currentClentWidth / 2) {
        this.translateDistance = `${translateX -
          document.body.clientWidth / 2 - selfWidth/2}`;
        // if (-this.translateDistance + currentClentWidth / 2 > this.ulWidth) {
        //   console.log("偏移量大了");
        //   this.translateDistance = -(this.ulWidth - currentClentWidth);
        //   console.log(this.translateDistance);
        //   return;
        // }
        this.$refs.checkedDistance.scrollLeft = this.translateDistance
        return;
      }
      if (translateX <= currentClentWidth / 2) {
        this.translateDistance = 0;
        this.$refs.checkedDistance.scrollLeft = this.translateDistance
        return;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.tab-bar-sty {
  width: 100%;
  height: 1.69rem;
  position: fixed;
  top: 2.09rem;
  left: 0;
  background: #fff;
  line-height: 1.69rem;
  border-bottom: 1px solid #f1f1f1;
  z-index: 999;
  overflow: hidden;
  overflow-x: scroll;
  & > ul {
    white-space: nowrap;
    display: block;
    position: relative;
    & > li {
      display: inline-block;
      vertical-align: top;
      & > p {
        font-size: @f14;
        padding: 0 6px;
        box-sizing: border-box;
      }
    }
  }
}
.checked_sty {
  position: relative;
  &::after {
    width: 100%;
    height: 2px;
    border-radius: 40px;
    background: @bg-col-main;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>