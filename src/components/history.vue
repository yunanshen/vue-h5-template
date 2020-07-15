<template>
  <div class="history_content_sty">
    <ul class="history_titile_sty">
      <li>
        <p>历史记录</p>
      </li>
      <li>
        <div>
          <img src="@/assets/icon/icon_delete.png" @click="deleteAll" />
        </div>
      </li>
    </ul>
    <ul class="history_item_sty">
      <li v-for="(i, index) in historyList" :key="index" @click="historySearch(i)">
        <p>{{i}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "History",
  data() {
    return {};
  },
  props: {
    historyList: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  methods: {
    deleteAll() {
      this.$emit('deleteAll')
    },
    historySearch(i) {
        this.$emit('historySearch',i)
    }
  }
};
</script>

<style lang="less" scoped>
.history_content_sty {
  & > .history_titile_sty {
    width: 100%;
    display: flex;
    padding: 25px 12px;
    align-items: center;
    box-sizing: border-box;
    & > li {
      &:first-child {
        flex: 1;
        & > p {
          font-size: @f16;
          color: #b4b4b4;
        }
      }
      &:last-child {
        & > div {
          width: 20px;
          & > img {
            width: 100%;
          }
        }
      }
    }
  }
  & > .history_item_sty {
    display: flex;
    flex-wrap: wrap;
    padding: 0 12px 20px 12px;
    border-bottom: 1px solid #ddd;
    & > li {
      width: 50%;
      margin-bottom: 10px;
      & > p {
        font-size: @f16;
        color: #111;
      }
      &:nth-child(even) {
        position: relative;
        padding-left: 12px;
        &::before {
          position: absolute;
          left: 0;
          width: 1px;
          height: 60%;
          background: #dbdbdb;
          top: 50%;
          transform: translateY(-50%);
          content: "";
        }
      }
    }
  }
}
</style>