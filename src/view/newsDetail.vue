<template>
  <div>
    <detail-nav :id="newsData.categoryId" :type="type"></detail-nav>
    <div class="news_content_sty">
      <div class="news_title_sty">
        <h3>{{newsData.title}}</h3>
      </div>
      <div class="news_time_sty">
        <span>来源:{{newsData.orgName}}</span>
        <span>{{newsData.createDate}}</span>
      </div>
      <div class="news_text_sty">
        <div v-html="newsData.introduction" ref="textContent"></div>
      </div>
    </div>
    <div class="read_num_sty">
      <span>
        阅读
        <span>{{clickNum}}</span>
      </span>
    </div>
    <div class="read_more_sty" @click="readMore(newsData.categoryId)">
      进入
      <span>{{types[newsData.categoryId]}}</span>
      查看更多内容
    </div>
    <bottom-item></bottom-item>
  </div>
</template>

<script>
const types = {
  "5": "打私要闻",
  "24": "各地动态",
  "27": "案情通报",
  "28": "政策法规",
  "34": "职能机构",
  "56": "专题报道",
  "31": "卫士风采"
};
import detailNav from "@/components/detailNav";
import { getNewsDetails, upDateClickNum } from "@/api/news";
import BottomItem from "@/components/bottomItem";
export default {
  components: {
    detailNav,
    BottomItem
  },
  data() {
    return {
      newsData: {},
      types,
      clickNum: 0,
      type: "2"
    };
  },
  created() {
    this.getNewsDetails();
    this.upDateClickNum();
    if (this.$route.query.type) {
      this.type = this.$route.query.type;
    }
  },
  mounted() {
    this.$loading.show()
    let _self = this
    setTimeout(() => {
      let $P = document
        .getElementsByClassName("news_text_sty")[0]
        .children[0].getElementsByTagName("p");
      $P.forEach(e => {
        console.log(e.style.textIndent)
        if (e.style.textIndent !== '') {
          e.style.textIndent = "1.366rem";
        }
      });
      _self.$loading.hide()
    }, 500);
  },
  methods: {
    getNewsDetails() {
      this.$loading.show();
      getNewsDetails({ id: this.$route.params.id }).then(json => {
        // this.$loading.hide();
        this.newsData = json.currentContent;
      });
    },
    readMore(i) {
      this.$router.push(`/news/${i}`);
    },
    upDateClickNum() {
      upDateClickNum({ id: this.$route.params.id }).then(json => {
        this.clickNum = json.hits;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.news_content_sty {
  padding: 25px 10px 10px 10px;
  box-sizing: border-box;
  .news_title_sty {
    & > h3 {
      font-size: @f20;
      color: #111;
    }
  }
  .news_time_sty {
    margin-bottom: 18px;
    & > span {
      font-size: @f14;
      color: #b4b4b4;
      margin-right: 30px;
    }
  }
}
.read_more_sty {
  width: 100%;
  text-align: center;
  color: #6d7278;
  font-size: @f18;
  & > span {
    color: @bg-col-main;
  }
}
.read_num_sty {
  width: 100%;
  margin: 20px 0 35px 0;
  padding: 0 12px;
  text-align: right;
  & > span {
    font-size: @f16;
    color: #6d7278;
    & > span {
      color: #111;
    }
  }
}
.news_text_sty {
  /deep/ img {
    width: 96%;
    margin: auto;
    margin-bottom: 6px;
  }
  /deep/ p {
    font-size: @f16 !important;
  }
  /deep/ span {
    font-size: @f16 !important;
  }
}
</style>