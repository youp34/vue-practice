<template>
    <a-carousel autoplay>
        <div><img style="width: 1300px; height: 500px" :src="res[0]"></div>
        <div><img style="width: 1300px; height: 500px" :src="res[1]"></div>
        <div><img style="width: 1300px; height: 500px" :src="res[2]"></div>
    </a-carousel>
</template>
<script>
    export default {
        data(){
            return{
                res: []
            }
        },
        methods: {
        },
        mounted(){
            this.$axios({
                method:'post',
                url:'/ccut/resource/carousel',
            }).then(res => {
                if (res.data.message === '成功') {
                    this.res = res.data.allData.carouselList
                    console.log(res.data.allData)
                } else {
                    alert('获取轮播图数据失败！')
                }
            }).catch(err => {
                console.log(err.response)
            })
        }
    };
</script>
<style scoped>
    /* For demo */
    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 460px;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }
</style>
