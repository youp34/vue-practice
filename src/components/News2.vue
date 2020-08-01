<template>
    <div style="background-color: #ececec; padding: 20px;">
        <a-row :gutter="16">
            <a-col :span="8">
                <a-card title="通知公告 / Notice" :bordered="false">
                    <p v-for="a in data1">{{a.noticeTitle}}<span>{{ a.publishTime}}</span></p>

                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card title="学术信息 / Academic" :bordered="false">
                    <p v-for="a in data2">{{a.academicTitle}}<span>{{ a.publishTime}}</span></p>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card title="快速链接 / Quick Links" :bordered="false">
                    <p v-for="a in data2">{<span>{{ a.publishTime}}</span></p>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                data1: [],
                data2: []
            }
        },
        methods: {
        },
        mounted(){
            this.$axios({
                method:'post',
                url:'/ccut/notice/homeShow',
            }).then(res => {
                if (res.data.message === '成功') {
                    this.data1 = res.data.allData.noticeList
                } else {
                    alert('获取新闻数据失败！')
                }
            }).catch(err => {
                console.log(err.response)
            });
            this.$axios({
                method:'post',
                url:'/ccut/academic/homeShow',
            }).then(res => {
                if (res.data.message === '成功') {
                    this.data2 = res.data.allData.academicList
                    console.log(res.data.allData.academicList)
                } else {
                    alert('获取新闻数据失败！')
                }
            }).catch(err => {
                console.log(err.response)
            })
        }
    };
</script>
