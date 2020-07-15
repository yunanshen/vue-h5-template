<template>
  <div>
    <nav-bar v-if="isHome"></nav-bar>
    <tab-bar @changeBar="changeBar" :checkedKey="checkedKey" v-if="isHome"></tab-bar>
    <div class="content_sty">
      <div class="height_sty" v-if="isHome"></div>
      <div class="scroll_content_sty">
        <keep-alive include="newsList">
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navBar";
import tabBar from "@/components/tabBar";
export default {
  components: {
    navBar,
    tabBar
  },
  data() {
    return {
      enableLoadMore: true,
      checkedKey: "1",
      totalPage: 0
    };
  },
  computed: {
    isHome() {
      let name = this.$route.name;
      if (
        name === "newsList" ||
        name === "contributionRanking" ||
        name === "guardStyle" ||
        name === "friendshipLink" ||
        name === "home"
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    console.log(this.$route, 555);
  },
  activated() {
    console.log("来了");
  },
  deactivated() {
    console.log("去了");
  },
  mounted() {},
  methods: {
    changeBar(item) {
      this.$route.meta.keepAlive = false
      if (item.key === "1") {
        this.$router.push(`/`);
        return;
      }
      if (item.key === "32") {
        this.$router.push(`/contributionRanking/${item.key}`);
        return;
      }
      if (item.key === "33") {
        this.$router.push(`/friendshipLink/${item.key}`);
        return;
      }
      if (item.key === "31") {
        this.$router.push(`/guardStyle/${item.key}`);
        return;
      }
      this.$router.push(`/news/${item.key}`);
    }
  }
};
</script>


<style lang="less" scoped>
.height_sty {
  height: 3.78rem;
}
.content_sty {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.scroll_content_sty {
  flex: 1;
  overflow: scroll;
}
</style>