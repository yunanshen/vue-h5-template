<template>
  <div>
      <scroll :onLoadMore="onLoadMore" :enableLoadMore="enableLoadMore">
        <!-- 新闻模块 -->
        <guard-style-item :list="list"></guard-style-item>
      </scroll>
  </div>
</template>

<script>
import mixinsData from "@/mixins/mixinsData";
import scroll from "@/components/scroll";
import guardStyleItem from '@/components/guardStyleItem'
export default {
  components: {
    scroll,
    guardStyleItem
  },
  mixins: [mixinsData],
  data() {
    return {
      enableLoadMore: true,
    };
  },
  watch: {
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