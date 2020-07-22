<template>
  <div class="guard_sty">
    <router-link :to="`/newsDetail/${l.id}`" tag="ul" v-for="l in list" :key="l.id">
      <li>
        <img :src="`./menhu${l.image}`" />
        <div>{{l.title}}</div>
      </li>
      <li>
        <div class="time_sty">
          <span>{{l.orgName}}</span>
          <img src="../assets/icon/icon_time.png" />
          <span>{{l.createDate}}</span>
        </div>
      </li>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "guardStyleItem",
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style lang="less" scoped>
.guard_sty {
  width: 100%;
  padding: 0 12px;
  box-sizing: border-box;
  & > ul {
    width: 100%;
    margin-top: 20px;
    & > li {
      &:first-child {
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        img {
          width: 100%;
          border-radius: 4px;
        }
        & > div {
          position: absolute;
          bottom: 0;
          background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
          color: #fff;
          width: 100%;
          font-size: @f14;
          height: 60px;
          line-height: 60px;
          padding: 0 10px;
          box-sizing: border-box;
        }
      }
    }
  }
}
.time_sty {
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
</style>