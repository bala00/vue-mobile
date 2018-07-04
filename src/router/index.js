import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Login from '@/components/user/Login'
import List from '@/components/user/List'
import News from '@/components/news/News'
import Video from '@/components/video/Video'

import UserDetail from '@/components/user/Detail'
import Modify from '@/components/user/Modify'
import NickName from '@/components/user/NickName'
import Sex from '@/components/user/Sex'
import Star from '@/components/user/Star'
import Hobby from '@/components/user/Hobby'
import Occupation from '@/components/user/Occupation'
import Signature from '@/components/user/Signature'

import Textarea from '@/components/user/Textarea'

Vue.use(Router)

const router = new Router ({
  mode:"history",//去掉地址栏中的哈希#
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: 'VueMobile-首页'
      },
      components:{
        default: Home,
        footer: Footer,
      }
    },
    {
      path: '/user/:id',
      name: 'Login',
      meta: {
        title: 'VueMobile-登录/注册'
      },
      component: Login,
    },
    {
      path: '/account',
      name: 'List',
      meta: {
        auth:true,
        title: 'VueMobile-用户中心'
      },
      components: {
        default: List,
        footer: Footer
      }
    },
    {
      path: '/news',
      name: 'News',
      components: {
        default: News,
        footer: Footer
      },
      meta: {
        auth: true,
        title: 'VueMobile-消息'
      }
    },
    {
      path: '/video',
      name: 'Video',
      components: {
        default: Video,
        footer: Footer
      },
      meta: {
        title: 'VueMobile-视频'
      }
    },
    {
      path: '/account/detail',
      name: 'UserDetail',
      meta: {
        auth: true,
        title: 'VueMobile-用户信息'
      },
      components: {
        default: UserDetail,
        header: Header
      },
      props: {
        header: {
          className: 'user-detail-tm',
          backUrl: '/account'
        }
      }
    },
    {
      path: '/account/modify',
      name: 'Modify',
      meta: {
        auth: true,
        title: 'VueMobile-信息修改'
      },
      components:{
        default: Modify,
        header: Header
      },
      props: {
        header: {
          backUrl: "/account/detail",
          backName: '我',
          btnText: '保存'
        }
      },
      children:[
        {
          path: 'nickName',
          meta: {
            auth: true,
            title: 'VueMobile-昵称'
          },
          component: NickName
        },{
          path: 'sex',
          meta: {
            auth: true,
            title: 'VueMobile-性别'
          },
          component: Sex
        },{
          path: 'star',
          meta: {
            auth: true,
            title: 'VueMobile-星座'
          },
          component: Star
        },{
          path: 'occupation',
          component: Occupation,
          children:[{
            path: '',
            meta: {
              auth: true,
              title: 'VueMobile-职业'
            },
            component: Textarea
          }]
        },{
          path: 'hobby',
          component: Hobby,
          children:[
            {
              path: '',
              meta: {
                auth: true,
                title: 'VueMobile-爱好'
              },
              component: Textarea
            }
          ]
        },{
          path: 'signature',
          component: Signature,
          children:[{
            path: '',
            meta: {
              auth: true,
              title: 'VueMobile-个性签名'
            },
            component:Textarea
          }]
        }
      ]
    },
    {
      path: '*',  //当访问的路径不存在时，重定向到首页
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  // 登录校验
  if(to.matched.some( m => m.meta.auth )){

    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if(userInfo){
      next();
    }else{  
      next({ path:'/user/login', query:{Rurl: to.fullPath} });
    }
  }else{
    next()
  }
})

export default router;