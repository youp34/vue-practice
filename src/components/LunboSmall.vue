<template>
    <a-carousel autoplay>
        <div><h3><img style="width: 530px; height: 500px" src="../assets/img/图4.jpg"></h3></div>
        <div><h3><img style="width: 530px; height: 500px" src="../assets/img/图5.jpg"></h3></div>
        <div><h3><img style="width: 530px; height: 500px" src="../assets/img/图6.jpg"></h3></div>
        <div><h3><img style="width: 530px; height: 500px" src="../assets/img/图3.jpg"></h3></div>
    </a-carousel>
</template>
<script>
    export default {};
</script>
<style scoped>
    /* For demo */
    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 500px;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }
</style>
