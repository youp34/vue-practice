<template>
    <a-layout id="components-layout-demo-fixed">
        <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
            <div class="logo" />
            <a-menu
                    theme="dark"
                    mode="horizontal"
                    :default-selected-keys="['2']"
                    :style="{ lineHeight: '64px' }"
            >
                <a-menu-item key="1">
                    首页
                </a-menu-item>
                <a-menu-item key="2">
                    学校概况
                </a-menu-item>
                <a-menu-item key="3">
                    院系设置
                </a-menu-item>
                <a-menu-item key="4">
                    师资队伍
                </a-menu-item>
                <a-menu-item key="5">
                    人才培养
                </a-menu-item>
                <a-menu-item key="6">
                    科学研究
                </a-menu-item>
                <a-menu-item key="7">
                    招生就业
                </a-menu-item>
                <a-menu-item key="8">
                    人才招聘
                </a-menu-item>
                <a-menu-item key="9">
                    交流合作
                </a-menu-item>
                <a-menu-item key="10">
                    校园文化
                </a-menu-item>
            </a-menu>
        </a-layout-header>
        <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
            <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
                <Lunbo></Lunbo>
                <div style="margin-top: 50px; margin-bottom: 50px">
                    <a-row>
                        <a-col :span="12">
                            <div style="padding-right: 90px">
                                <LunboSmall></LunboSmall>
                            </div>
                        </a-col>
                        <a-col :span="12">
                            <News/>
                        </a-col>
                    </a-row>
                </div>
                <New2/>
            </div>
        </a-layout-content>
        <img src="../assets/img/图.png">
        <a-layout-footer :style="{ textAlign: 'center' }">
            Copyright @ 2008 长春理工大学 | 地址：中国吉林省长春市卫星路7089号(东)、7186号(南)、7989号(西) | 吉ICP备05001995号-1 | 吉公网安备 22010402000757号
            技术支持：信息化中心 | 邮编：130022 | 电话：86-431-85583888 | 电子信箱：cust@cust.edu.cn
        </a-layout-footer>
    </a-layout>
</template>
<script>
import Lunbo from '../components/LunboTu'
import News from '../components/News'
import LunboSmall from '../components/LunboSmall'
import New2 from '../components/News2'
export default {
    name: 'HeaderNav',
    components: {
        Lunbo,
        News,
        LunboSmall,
        New2
    }
}
</script>
<style>
    #components-layout-demo-fixed .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px 24px 16px 0;
        float: left;
    }
</style>
