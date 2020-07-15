<template>
    <div class="nav-height-sty">
        <ul class="flex center nav-sty">
            <li>
                <div class="logo_sty">
                    <img src="@/assets/img/logo.png">
                </div>
            </li>
            <li>
                <div class="search_sty">
                    <img src="@/assets/icon/icon_search.png" @click="search">
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name:'navBar',
    data() {
        return {

        }
    },
    props:{

    },
    methods: {
        search() {
            this.$router.push('/searchPage')
        }
    }
}   
</script>

<style lang="less" scoped>
.nav-sty {
    height: 2.09rem;
    line-height: 2.09rem;
    background: @bg-col-main;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100vw;
    background-image: url('../assets/img/head_bg.jpg');
    background-size: 100%;
    & > li {
        color: @col-white;
        height: 2.09rem;
        line-height: 2.09rem;
        font-size: @f16;
        &:first-child {
            flex: 1;
            padding-left: 0.51rem;
        }
    }
}
// .nav-height-sty {
//     height: 3.78rem;
// }
.logo_sty {
    & > img {
        width:7.76rem;
    }
}
.search_sty {
    & > img {
        width: 0.681rem;
        margin-right: 0.51rem;
    }
}
</style>