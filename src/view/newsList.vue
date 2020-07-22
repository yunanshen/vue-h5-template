<template>
  <div class="news_content_scoll">
    <scroll :onLoadMore="onLoadMore" :enableLoadMore="enableLoadMore">
      <div class="swiper_reset_sty" ref="swiper" v-if="isShowSwript">
      <!-- <swiper ref="mySwiper">
        <swiper-slide v-for="(item,index) in slidesReal"
          :key="index">
            <div>
              <img  :src="item.image ? `/menhu/${item.image}` : ''" class="swiper-img-sty" />
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper> -->
      <Swiper
        v-if="slidesReal.length > 0"
        :autoPlay="false"
        :showIndicator="true"
        interval="2500"
        duration="500"
        :style="`height:${swiperHeight}px`"
      >
        <Slide
          @click="clickMe(item)"
          v-for="(item,index) in slidesReal"
          :key="index"
          class="slide_sty"
          :style="`height:${swiperHeight}px`"
        >
          <img v-if="item.image" :src="`./menhu/${item.image}`" class="swiper-img-sty" />
          <div class="swript_title_sty">
            <div>头条</div>
            <p>{{item.title}}</p>
          </div>
        </Slide>
      </Swiper>
    </div>
      <!-- 新闻模块 -->
      <y-news-item :list="list" title="打私要闻" :type="type"></y-news-item>
    </scroll>
  </div>
</template>

<script>
import mixinsData from "@/mixins/mixinsData";
import scroll from "@/components/scroll";
import YNewsItem from "@/components/newsItem";
import { getSwriptList } from "@/api/news";
// import BottomItem from "@/components/bottomItem";
import { Swiper, Slide } from "vue-swiper-component";
export default {
  name: "newsList",
  components: {
    scroll,
    YNewsItem,
    Swiper,
    Slide
  },
  mixins: [mixinsData],
  data() {
    return {
      enableLoadMore: true,
      slidesReal: [],
      swiperHeight: 0,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
        // Some Swiper option/callback...
      }
    };
  },
  computed: {
    type() {
      return '2'
      // if(this.$route.params.id === '5') {
      //   return '1'
      // }else {
      //   return '2'
      // }
    },
    isShowSwript() {
      if(this.$route.params.id === '5') {
        return true
      }else {
        return false
      }
    }
  },
  watch: {
    $route: function(val, oldVal) {
      // console.log(this.$route,9999)
      // if(!this.$route.meta.isBack && val.name !== 'newsDetail') {
      //   sessionStorage.removeItem('scrollTop')
      // }
      if( this.$route.params.id === '5' ) {
        this.getSwript();
      }
      if (val.name === "newsDetail") {
        return;
      }
      // if (val.meta.keepAlive) {
      //   return;
      // }
      this.list = [];
      this.params.pageNumber = 1;
      this.enableLoadMore = true;
      if (
        this.$route.params.id !== "32" &&
        this.$route.params.id !== "33" &&
        this.$route.params.id
      ) {
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
    this.getSwript();
  },
  mounted() {
    this.$nextTick(() => {
      let currentWidth = this.$refs.swiper.clientWidth || 0;
      this.swiperHeight = (currentWidth / 3) * 2;
    });
  },
  methods: {
    onLoadMore(done) {
      if (!this.enableLoadMore) {
        return;
      }
      this.params.pageNumber = this.params.pageNumber + 1;
      this.getNewsList(this.$route.params.id);
      done();
    },
    getSwript() {
      let params = {
        sys: 350000
      };
      getSwriptList(params).then(json => {
        const { bannerContents } = json;
        this.slidesReal = bannerContents.slice(0,4);
      });
    },
    clickMe(item) {
      this.$router.push(`/newsDetail/${item.id}`);
    },
  }
};
</script>

<style lang="less" scoped>
.a {
  font-size: @f10;
}
.swiper-img-sty {
  width: 100%;
}
.swript_title_sty {
  position: absolute;
  left: 0;
  bottom: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  & > div {
    background: red;
    color: #fff;
    font-size: @f14;
    padding: 0px 4px;
    border-radius: 2px;
    letter-spacing: 2px;
  }
  & > p {
    font-size: @f16;
    padding-left: 6px;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 13rem;
  }
}
.slide_sty {
  position: relative;
}
.swiper_reset_sty {
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  padding-bottom: 27px;
  border-bottom: 3px solid #f1f1f1;
}
.swiper_reset_sty /deep/ .wh_indicator {
  text-align: right;
  padding-right: 10px;
  line-height: 8px;
}
.swiper_reset_sty /deep/ .wh_indicator_item {
  width: 5px;
  height: 5px;
  margin: 2px;
}
.swiper_reset_sty /deep/ .wh_show_bgcolor {
  background: @bg-col-main;
}
.news_content_scoll {
  height: 100%;
}
</style>