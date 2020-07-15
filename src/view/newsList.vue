<template>
  <div class="news_content_scoll">
    <scroll :onLoadMore="onLoadMore" :enableLoadMore="enableLoadMore">
      <!-- 新闻模块 -->
      <y-news-item :list="list" title="打私要闻" type="2"></y-news-item>
    </scroll>
  </div>
</template>

<script>
import mixinsData from "@/mixins/mixinsData";
import scroll from "@/components/scroll";
import YNewsItem from "@/components/newsItem";
// import BottomItem from "@/components/bottomItem";
export default {
  name: "newsList",
  components: {
    scroll,
    YNewsItem
  },
  mixins: [mixinsData],
  data() {
    return {
      enableLoadMore: true
    };
  },
  watch: {
    $route: function(val,oldVal) {
      // console.log(this.$route,9999)
      // if(!this.$route.meta.isBack && val.name !== 'newsDetail') {
      //   sessionStorage.removeItem('scrollTop')
      // }
      if(val.name === 'newsDetail') {
        return
      }
      if(val.meta.keepAlive) {
        return
      }
      this.list = [];
      this.params.pageNumber = 1;
      this.enableLoadMore = true;
      if (this.$route.params.id !== '32' && this.$route.params.id !== '33' && this.$route.params.id) {
        this.getNewsList(this.$route.params.id);
      }
    },
    "params.pageNumber": function() {
      if (this.params.pageNumber >= this.totalPage) {
        this.enableLoadMore = false;
      } else {
        this.enableLoadMore = true;
      }
    }
  },
  created() {
    this.getNewsList(this.$route.params.id);
  },
  methods: {
    onLoadMore(done) {
      if (!this.enableLoadMore) {
        return;
      }
      this.params.pageNumber = this.params.pageNumber + 1;
      this.getNewsList(this.$route.params.id);
      done();
    }
  }
};
</script>

<style lang="less" scoped>
.news_content_scoll {
  height: 100%;
}
</style>