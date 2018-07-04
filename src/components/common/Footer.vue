<template>
    <div class="footer">
        <Layout>
            <Footer>
                <Row>
                    <Col span="6">
                        <router-link to="/">
                            <Icon type="home"></Icon><br>
                            首页
                        </router-link>
                    </Col>
                    <Col span="6">
                        <router-link to="/video">
                            <Icon type="videocamera"></Icon><br>
                            视频
                        </router-link>
                    </Col>
                    <Col span="6">
                        <router-link to="/news">
                            <Icon type="leaf"></Icon><br>
                            消息
                        </router-link>
                    </Col>
                    <Col span="6">
                        <router-link to="/account">
                            <Icon type="person"></Icon><br>
                            我的
                        </router-link>
                    </Col>
                </Row>
            </Footer>            
        </Layout>
    </div>    
</template>

<style scoped>
    .footer{ position:fixed; left: 0; bottom:0; width: 100%; z-index: 9999; }
    .ivu-layout-footer{ padding:0; }
    .ivu-col-span-6{ padding: 9px 0; text-align: center }
    .ivu-icon{ font-size: 28px; }
    a:hover, .router-link-exact-active{ 
        color: #6961c0 
    }
</style>