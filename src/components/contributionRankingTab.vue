<template>
    <div class="contribution_ranking_tab_sty">
        <ul>
            <li :class="{checked:checkedKey === i.key}" v-for="i in navList" :key="i.key" @click="changeRankingTab(i.key)">
                {{i.text}}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name:'contributionRankingTab',
    data() {
        return {
            navList:[
                {
                    key:'1',
                    text:'投稿排名'
                },{
                    key:'2',
                    text:'考核排名'
                }
            ]
        }
    },
    props:{
        checkedKey:{
            type:String,
            default:'1'
        }
    },
    methods:{
        changeRankingTab(item) {
            this.$emit('changeRankingTab',item)
        }
    }
}
</script>

<style lang="less" scoped>
.contribution_ranking_tab_sty {
    width: 100%;
    margin: 30px 0 35px 0;
    & > ul {
        width: 9rem;
        margin: auto;
        display: flex;
        border-radius: 4px;
        background: #e8e8e8;
        & > li {
            flex: 1;
            text-align: center;
            height: 1.7rem;
            line-height: 1.7rem;
            font-size: @f20;
            color: #666;
            &:first-child {
                border-radius: 4px 0 0 4px;
            }
            &:last-child {
                border-radius: 0 4px 4px 0;
            }
        }
    }
}
.checked{
    background: @bg-col-main;
    color: #fff !important;
}
</style>