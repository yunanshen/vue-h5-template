<template>
  <div class="news_item_content_sty" ref="all">
    <div class="news_item_header_sty" v-if="type === '1'">
      <h3>{{title}}</h3>
      <p @click="$emit('goAll')">
        <span>全部</span>
        <img src="../assets/icon/jt.png" />
      </p>
    </div>
    <ul class="news_item_list_sty" ref="newsContent">
      <li v-for="(l,index) in list" :key="l.id" @click="upDateClickNum(l)" ref="item">
        <!-- 首页第一条大图显示 -->
        <div class="only_one_img" v-if="index === 0 && type === '1'">
          <p>{{l.title}}</p>
          <div class="center_img_sty">
            <div>
              <img :src="`/menhu${l.image}`" alt="新闻图片" />
            </div>
          </div>
          <div class="time_sty">
            <span>{{l.orgName}}</span>
            <img src="../assets/icon/icon_time.png" />
            <span>{{l.createDate}}</span>
          </div>
        </div>
        <!-- 三张图显示 -->
        <!-- <div class="only_one_img">
          <p>{{l.title}}</p>
          <div class="center_img_sty">
            <div v-for="i in 3">
              <img :src="`/menhu${l.image}`" alt="新闻图片" />
            </div>
          </div>
          <div class="time_sty">
            <span>{{l.orgName}}</span>
            <img src="../assets/icon/icon_time.png" />
            <span>{{l.createDate}}</span>
          </div>
        </div>-->
        <!-- 单张图右边显示 -->
        <div class="right_img_sty">
          <div class="news_main_sty">
            <h3>{{l.title}}</h3>
            <div>
              <span>{{l.orgName}}</span>
              <span>{{l.createDate}}</span>
            </div>
          </div>
          <div class="news_img_sty" v-if="l.image">
            <img :src="`/menhu${l.image}`" alt="新闻图片" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
// import { upDateClickNum } from "@/api/news";
export default {
  name: "YNewsItem",
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      default: function() {
        return [];
      }
    },
    title: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "1"
    }
  },
  methods:{
      //   更新点击数量
      upDateClickNum(l) {
          if(this.type === '1') {
              this.$router.push(`/newsDetail/${l.id}?type=${this.type}`)
          }else {
              this.$router.push(`/newsDetail/${l.id}`)
          }
          
        //   let parmas = {}
        //   parmas.id = id
        //   upDateClickNum(parmas).then(json => {
        //       console.log('更新成功')
        //   })
      }
  }
  

};
</script>

<style lang="less" scoped>
.news_item_content_sty {
  margin-top: 16px;
  width: 100%;
  .news_item_header_sty {
    width: 100%;
    display: flex;
    align-items: baseline;
    padding: 0 12px;
    box-sizing: border-box;
    margin-bottom: 16px;
    & > h3 {
      font-size: @f20;
      font-weight: 600;
      flex: 1;
      position: relative;
      padding-left: 10px;
      &::before {
        width: 4px;
        height: 70%;
        background: @bg-col-main;
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    & > p {
      font-size: @f12;
      color: #333333;
      display: inline-block;
      vertical-align: bottom;
      & > span {
        margin-right: 3px;
      }
      & > img {
        width: 6px;
        height: 10px;
        display: inline-block;
        vertical-align: baseline;
      }
    }
  }
}
.news_item_list_sty {
  width: 100%;
  padding: 0 12px;
  box-sizing: border-box;
  .only_one_img {
    margin-top: 20px;
  }
  & > li {
    width: 100%;
    padding: 10px 0;
    &:first-child {
      padding-top: 0;
    }
    & > div {
      &:not(:first-child) {
        margin-top: 20px;
      }
      .center_img_sty {
        display: flex;
        & > div {
          flex: 1;
          padding-top: 10px;
          &:nth-child(2) {
            margin: 0 5px;
          }
          & > img {
            width: 100%;
            border-radius: 5px;
          }
        }
      }
      & > p {
        font-size: @f18;
        color: #111;
        font-weight: 500;
      }
      & > .time_sty {
        display: flex;
        padding-top: 10px;
        align-items: center;
        & > img {
          width: 0.5rem;
          height: 0.5rem;
          margin-right: 5px;
        }
        & > span {
          font-size: @f12;
          color: @col-b4;
          &:first-child {
            display: inline-block;
            width: 100px;
          }
        }
      }
    }
  }
}
.right_img_sty {
  display: flex;
  .news_main_sty {
    flex: 1;
    h3 {
      font-size: @f16;
      font-weight: 600;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    & > div {
      & > span {
        font-size: @f12;
        &:first-child {
          width: 80px;
          display: inline-block;
        }
      }
    }
  }
  .news_img_sty {
    width: 120px;
    height: 80px;
    min-width: 120px;
    overflow: hidden;
    border-radius: 4px;
    margin-left: 10px;
    & > img {
      width: 100%;
      display: block;
    }
  }
}
</style>