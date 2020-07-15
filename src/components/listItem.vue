<template>
    <ul>
        <li v-for="l in list" :key="l.id" class="flex list-item-sty">
            <div class="list_left_sty">
                <p>
                    香港一男子持港独旗帜被捕
                </p>
            </div>
            <div class="list_right_sty">
                <img src="https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2150878960,4137957021&fm=55&app=54&f=JPEG?w=1140&h=640">
            </div>
        </li>
    </ul>
</template>


<script>
export default {
    name:'scrollItem',
    data() {
        return {

        }
    },
    props:{
        list:{
            type:Array
        }
    }
}
</script>
<style lang="less" scoped>
.list-item-sty {
    padding: @pd6;
    border-bottom: 1px solid #f1f1f1;
}
.list_left_sty {
    width: 80%;
    & > p {
        font-size: @f14;
    }
}
.list_right_sty {
    width: 20%;
    & > img {
        width: 100%;
    }
}
</style>