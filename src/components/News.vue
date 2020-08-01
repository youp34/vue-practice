<template>
    <div style="background:#ECECEC; padding:20px">
        <a-card title="新闻 / NEWS" :bordered="false" style="width: 580px">
            <p v-for="a in data">{{a.newsTitle}}<span>{{ a.publishTime}}</span></p>
        </a-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                data: []
            }
        },
        methods: {
        },
        mounted(){
            this.$axios({
                method:'post',
                url:'/ccut/news/homeShow',
            }).then(res => {
                if (res.data.message === '成功') {
                    this.data = res.data.allData.newsList
                    console.log(res.data.allData)
                } else {
                    alert('获取新闻数据失败！')
                }
            }).catch(err => {
                console.log(err.response)
            })
        }
    };
</script>
<style></style>
