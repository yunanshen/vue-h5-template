import { getNewsList } from "@/api/news";

export default {
    data() {
        return {
            list: [],
            params: {
                pageNumber: 1,
                pageSize: 10
            },
            totalPage: 0
        }
    },
    methods: {
        getNewsList(id) {
            this.$loading.show()
            let params = { ...this.params, id: id };
            getNewsList(params)
                .then(json => {
                    this.$loading.hide()
                    const { page } = json;
                    this.list = [...this.list, ...page.list];
                    this.totalPage = page.totalPage;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
}