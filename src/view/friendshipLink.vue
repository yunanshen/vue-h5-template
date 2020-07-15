<template>
    <div>
        <friend-ship-item :data="data"></friend-ship-item>
        <bottom-item></bottom-item> 
    </div>
</template>

<script>
import friendShipItem from "@/components/friendShipItem"
import { getFriendShipLinkList } from "@/api/news"
import BottomItem from "@/components/bottomItem";
export default {
    components:{
        friendShipItem,
        BottomItem
    },
    data() {
        return {
            data:[]
        }
    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    created() {
        this.getFriendShipLinkList()
    },
    methods:{
        getFriendShipLinkList() {
            this.$loading.show()
            getFriendShipLinkList().then(json => {
                this.$loading.hide()
                const { links } = json
                this.data = links
            })
        }
    }
}
</script>