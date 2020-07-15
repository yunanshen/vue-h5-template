<template>
    <div class="load-more-wrapper" @touchstart="touchStart($event)" @touchend="touchEnd($event)" ref="load">
        <div class="inner">
            <slot></slot>
            <div class="load-more" v-show="enableLoadMore">{{loadMoreText}}</div>  
            <div class="load-end" v-show="!enableLoadMore">已经到底了!</div> 
            <bottom-item v-if="isShow"></bottom-item> 
            <div class="bottom_height_sty" v-else></div>
        </div>
    </div>
</template>

<script>
import BottomItem from "@/components/bottomItem";
export default {
    name: "LoadMore",
    components:{
        BottomItem
    },
    props: {
        enableLoadMore: {
            type: Boolean,
            default: true
        }, 
        onLoadMore: {
            type: Function,
            default: undefined,
            require: false
        },
        isShow:{
            type:Boolean,
            default:true
        }
    },
    data() {
        return {
            loadMoreText: "上拉加载更多",
            startX: 0,
            startY: 0,
            isLoading: false,
        }
    }, 
    activated() {
        let scrollTop = sessionStorage.getItem('scrollTop')
        if(this.$route.meta.isBack) {
            this.$refs.load.scrollTop = scrollTop
        }
    }, 
    methods: {
        touchStart(e) {
            this.startY = e.targetTouches[0].pageY;
            this.startX = e.targetTouches[0].pageX;  
        },
        scrollToEnd() {
            let scrollHeight = this.$el.scrollHeight; 
            let clientHeight = this.$el.clientHeight; 
            let scrollTop = this.$el.scrollTop; 
            if (scrollTop + clientHeight >= scrollHeight && this.enableLoadMore) {
                this.doLoadMore()  
            }
            sessionStorage.setItem('scrollTop',this.$refs.load.scrollTop)
        },
        touchEnd(e) {
            if (this.isLoading) {
                return;
            }

            let endX = e.changedTouches[0].pageX,
                    endY = e.changedTouches[0].pageY,
                    dy = this.startY - endY,
                    dx = endX - this.startX;
            if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
                return;
            }
            if (endY < this.startY) {
                this.scrollToEnd(e)
            }
        },
        doLoadMore() {
            this.isLoading = true
            this.loadMoreText = '加载中...'
            this.onLoadMore(this.loadDone);
        },
        loadDone() {
            this.isLoading = false;
            this.loadMoreText = '上拉加载更多'
        }
    }
}
</script>

<style lang="less" scoped>
.load-more-wrapper {
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    transition-duration: 300ms;
    .load-more, .load-end {
        color: #aea699;
        font-size: @f12;
        margin: .3rem 0;
        text-align: center;
    }
}
.bottom_height_sty {
    height: 16px;
}
</style>