<template>
    <div>
        <contribution-ranking-tab @changeRankingTab="changeRankingTab" :checkedKey="checked"></contribution-ranking-tab>
        <div class="map_sty">
            <img src="@/assets/img/map.png">
        </div>
        <div class="table_sty">
            <table>
                <tr>
                    <th style="width:14%">
                        排名
                    </th>
                    <th style="width:58%">
                        地区
                    </th>
                    <th style="width:28%">
                        分数
                    </th>
                </tr>
                <tr v-for="i in list" :key="i.rownum">
                    <td>
                        {{i.rownum}}
                    </td>
                    <td>
                        {{i.orgname}}
                    </td>
                    <td v-if="i.tgl">
                        {{i.tgl}}
                    </td>
                    <td v-else>
                        {{i.cj}}
                    </td>
                </tr>
            </table>
        </div>
        <bottom-item></bottom-item> 
    </div>
</template>

<script>
import contributionRankingTab from "@/components/contributionRankingTab"
import { getContributionNum } from "@/api/news"
import BottomItem from "@/components/bottomItem";
export default {
    components:{
        contributionRankingTab,
        BottomItem
    },
    data() {
        return {
            ContributionList:[],
            EvaluationList:[],
            checked:'1',
            list:[]
        }
    },
    watch:{
        'checked': function() {
            if(this.checked === '1') {
                this.list = this.EvaluationList
            }else {
                this.list = this.ContributionList
            }
        }
    },
    created() {
       this.getContributionNum()
    },
    methods:{
        getContributionNum() {
            getContributionNum().then(json => {
                const { kp, tg } = json
                this.list = tg
                this.ContributionList = kp
                this.EvaluationList = tg
            })
        },
        changeRankingTab(item) {
            this.checked = item
        }
    }
}
</script>


<style lang="less" scoped>
.map_sty {
    width: 11rem;
    margin: auto;
    & > img {
        width: 100%;
    }
}
.table_sty {
    width: 100%;
    padding:0 12px;
    box-sizing: border-box;
    margin-top: 20px;
    & > table {
        width: 100%;
        th {
            text-align: center;
            font-size: @f16;
            color: #fff;
            background: @bg-col-main;
            height: 45px;
            line-height: 45px;
            border: 1px solid @bg-col-main;
        }
        td {
            text-align: center;
            font-size: @f16;
            height: 35px;
            line-height: 35px;
            box-sizing: border-box;
            border: 1px solid @bg-col-main;
            color: #333;
        }
    }
}
</style>