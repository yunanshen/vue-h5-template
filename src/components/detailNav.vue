<template>
    <div class="nav-height-sty">
        <ul class="flex center detail-nav-sty">
            <li @click="goBack">
                <img src="@/assets/icon/in_back.png" />
            </li>
            <li>
                <div class="logo_sty">
                    <img src="@/assets/img/in_logo.png">
                </div>
            </li>
            <li>
                
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name:'detailNav',
    data() {
        return {

        }
    },
    props:{
        id:{
            type:Number,
            default:1
        },
        type:{
            type:String,
            default:'2'
        }
    },
    created() {
        console.log(this.type)
    },
    methods:{
        goBack() {
            // this.$router.go(-1)
            history.back()
            // if(this.type == '1') {
            //     this.$router.push(`/`)
            // }else {
            //     this.$router.push(`/news/${this.id}`)
            // }
            
        }
    },
}   
</script>

<style lang="less" scoped>
.detail-nav-sty {
    height: 2.09rem;
    line-height: 2.09rem;
    background: #fff;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100vw;
    background-size: 100%;
    border-bottom: 1px solid #f1f1f1;
    & > li {
        color: @col-white;
        height: 2.09rem;
        line-height: 2.09rem;
        font-size: @f16;
        &:first-child,&:last-child {
            width: 10%;
        }
        &:first-child {
            padding-left: 10px;
            & > img {
                width: 8px;
                height: 16px;
            }
        }
        &:nth-child(2) {
            flex: 1;
            text-align: center;
        }
    }
}
.nav-height-sty {
    height: 2.09rem;
}
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