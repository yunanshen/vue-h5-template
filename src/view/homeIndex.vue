<template>
  <!-- 首页 -->
  <div>
    <div class="swiper_reset_sty" ref="swiper">
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
        :showIndicator="false"
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
    <!-- 首页打私要闻模块 -->
    <y-news-item :list="list" title="打私要闻" type="1" @goAll="goAll"></y-news-item>
    <bottom-item></bottom-item>
  </div>
</template>


<script>
import { Swiper, Slide } from "vue-swiper-component";
import mixinsData from "@/mixins/mixinsData";
import YNewsItem from "@/components/newsItem";
import { getSwriptList } from "@/api/news";
import BottomItem from "@/components/bottomItem";
// import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
// If you use Swiper 6.0.0 or higher
import "swiper/swiper-bundle.css";
export default {
  mixins: [mixinsData],
  components: {
    Swiper,
    Slide,
    YNewsItem,
    BottomItem,
    // Swiper,
    // SwiperSlide
  },
  // directives: {
  //   swiper: directive
  // },
  data() {
    return {
      slidesReal: [{}],
      swiperHeight: 0,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
        // Some Swiper option/callback...
      }
    };
  },
  created() {
    this.getNewsList("5");
    this.getSwript();
  },
  mounted() {
    this.$nextTick(() => {
      let currentWidth = this.$refs.swiper.clientWidth || 0;
      this.swiperHeight = (currentWidth / 3) * 2;
    });
  },
  methods: {
    clickMe(item) {
      this.$router.push(`/newsDetail/${item.id}`);
    },
    goAll() {
      this.$router.push("/news/5");
    },
    getSwript() {
      let params = {
        sys: 350000
      };
      getSwriptList(params).then(json => {
        const { bannerContents } = json;
        this.slidesReal = bannerContents;
      });
    }
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
</style>
