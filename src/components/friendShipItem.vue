<template>
  <div class="friend_ship_sty">
    <div v-for="i in list" :key="i.typeid">
      <div>{{i.typename}}</div>
      <ul>
        <li v-for="(l,index) in i.itemList" :key="index"  @click="goFriendShipPage(l.url)">{{l.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "friendShipItem",
  data() {
    return {};
  },
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed: {
    list: function() {
      let list = [];
      if (this.data.length !== 0) {
        this.data.forEach(e => {
          let isHas = false;
          list.forEach(item => {
            if (item.typeid === e.typeid) {
              isHas = true;
            }
          });
          if (isHas) {
            list.forEach(item => {
              if (item.typeid === e.typeid) {
                item.itemList.push({ ...e });
              }
            });
          } else {
            list.push({
              typeid: e.typeid,
              typename: e.typename,
              itemList: [{ ...e }]
            });
          }
        });
      }
      return list;
    }
  },
  methods:{
      goFriendShipPage(url) {
          if(url) {
            window.location.href=url;
          }
      }
  }
};
</script>

<style lang="less" scoped>
.friend_ship_sty {
  width: 100%;
  padding: 25px 12px 0 12px;
  box-sizing: border-box;
  & > div {
    & > div {
      font-size: @f18;
      padding-left: 20px;
      position: relative;
      margin-bottom: 20px;
      &::before {
        position: absolute;
        content: "";
        width: 5px;
        height: 70%;
        background: @bg-col-main;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 4px;
      }
    }
    & > ul {
      display: flex;
      box-sizing: border-box;
      margin-bottom: 20px;
      flex-wrap: wrap;
      & > li {
        width: 47%;
        font-size: @f14;
        text-align: center;
        background: #f1f1f1;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
        margin-bottom: 20px;
        &:nth-child(odd) {
          margin-right: 6%;
        }
      }
    }
  }
}
</style>