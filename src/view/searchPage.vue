<template>
  <div class="flex_content_sty">
    <search-nav @enterSearch="enterSearch" :searchContent="searchContent"></search-nav>
    <history
      :historyList="historyList"
      v-if="searchList.length === 0"
      @deleteAll="deleteAll"
      @historySearch="historySearch"
    ></history>
    <scroll
      :onLoadMore="onLoadMore"
      :enableLoadMore="enableLoadMore"
      v-if="searchList.length !== 0"
      :isShow="false"
    >
      <news-item :list="searchList" type="2"></news-item>
    </scroll>
  </div>
</template>

<script>
import searchNav from "@/components/searchNav";
import History from "@/components/history";
import newsItem from "@/components/newsItem";
import scroll from "@/components/scroll";
import { getSearchList } from "@/api/news";
export default {
  components: {
    searchNav,
    History,
    newsItem,
    scroll
  },
  data() {
    return {
      historyList: JSON.parse(localStorage.getItem("historyList")) || [],
      searchList: [],
      enableLoadMore: true,
      params: {
        pageNumber: 1,
        pageSize: 10,
        keyword: ""
      },
      totalPage: 0,
      searchContent: ""
    };
  },
  watch: {},
  created() {
    if (this.$route.query.keyword) {
      this.params = { ...this.params, ...this.$route.query };
      this.searchContent = this.params.keyword;
      this.getSearchList();
    }
  },
  methods: {
    enterSearch(val) {
      if (val.trim() === "") {
        console.log("搜索内容不能为空");
        return;
      }
      let index = this.historyList.indexOf(val);
      if (index >= 0) {
        this.historyList.splice(index, 1);
      }
      this.historyList.unshift(val);
      this.historyList.length = 6;
      localStorage.setItem("historyList", JSON.stringify(this.historyList));
      this.params = { ...this.params, keyword: val };
      this.$router.replace({ name: "searchPage", query: { ...this.params } });
      this.searchList = [];
      this.getSearchList();
    },
    getSearchList() {
      this.$loading.show();
      let formData = new URLSearchParams()
      formData.append('pageNumber',this.params.pageNumber)
      formData.append('pageSize',this.params.pageSize)
      formData.append('keyword',this.params.keyword)
      getSearchList(formData).then(json => {
        this.$loading.hide();
        const { page } = json;
        this.searchList = [...this.searchList, ...page.list];
        this.totalPage = page.totalPage;
      });
    },
    onLoadMore(done) {
      if (this.totalPage < this.params.pageNumber) {
        this.enableLoadMore = false;
      }
      if (!this.enableLoadMore) {
        return;
      }
      this.params.pageNumber = Number(this.params.pageNumber) + 1;
      this.getSearchList();
      done();
    },
    deleteAll() {
      if (this.historyList.length !== 0) {
        this.historyList = [];
        localStorage.removeItem("historyList");
      }
    },
    historySearch(val) {
      this.searchContent = val;
      this.params.keyword = val;
      this.searchList = [];
      this.$router.replace({ name: "searchPage", query: { ...this.params } });
      this.getSearchList();
    }
  }
};
</script>

<style lang="less" scoped>
.flex_content_sty {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
}
.bottom_height_sty {
    height: 16px;
}
</style>