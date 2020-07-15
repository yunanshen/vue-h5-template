<template>
  <div class="nav-height-sty">
    <ul class="flex center search-nav-sty">
      <li>
        <div class="search_sty">
          <input type="text" v-model="searchText" placeholder="请输入搜索内容" @keyup.enter="$emit('enterSearch',searchText)"/>
          <div>
            <img src="@/assets/icon/icon_search_black.png" />
          </div>
        </div>
      </li>
      <li>
        <div class="cancle_sty" @click="cancleSearch">取消</div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "searchNav",
  data() {
    return {
        searchText:''
    };
  },
  props: {
      searchContent:{
          type:String,
          default:''
      }
  },
  watch:{
      'searchContent': function() {
          this.searchText = this.searchContent
      }
  },
  created() {
      if(this.$route.query.keyword) {
          this.searchText = this.$route.query.keyword
      }
  },
  methods: {
    search() {
      this.$router.push("/searchPage");
    },
    cancleSearch() {
        this.$router.push('/')
    }
  }
};
</script>

<style lang="less" scoped>
.search-nav-sty {
  height: 2.09rem;
  line-height: 2.09rem;
  background: #fff;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  border-bottom: 1px solid #f1f1f1;
  background-size: 100%;
  & > li {
    color: @col-white;
    height: 2.09rem;
    line-height: 2.09rem;
    font-size: @f16;
    &:first-child {
      flex: 1;
      padding-left: 0.51rem;
      input {
        width: 100%;
        height: 1.6rem;
        line-height: 1.6rem;
        margin-top: 0.245rem;
        border: 1px solid #f1f1f1;
        border-radius: 40px;
        padding-left: 30px;
        border: 0; // 去除未选中状态边框
        outline: none; // 去除选中状态边框
        background-color: #f2f2f2; // 透明背景
        font-size: @f14;
      }
    }
  }
}
.nav-height-sty {
  height: 2.09rem;
}
.logo_sty {
  position: relative;
}
.search_sty {
  & > div {
    width: 18px;
    position: absolute;
    top: 0;
    left: 20px;
    & > img {
      width: 100%;
    }
  }
}
.cancle_sty {
  color: #111;
  padding: 0 10px 0 16px;
  font-size: @f16;
}
</style>