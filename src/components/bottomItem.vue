<template>
  <div class="bottem_item_sty">
    <p>
      Copyright © 福建省打私办 版权所有 <br />
      技术支持：中国联合网络通信有限公司福建省分公司
    </p>
  </div>
</template>


<script>
export default {
    name:'BottomItem'
}
</script>

<style lang="less" scoped>
.bottem_item_sty {
    text-align: center;
    border-top: 3px solid @bg-col-main;
    padding-top: 20px;
    margin: 40px 0 20px 0;
    & > p {
        font-size: @f14;
        color: #555;
    }
}
</style>