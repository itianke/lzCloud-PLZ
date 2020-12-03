<template>
    <div class="header-layout">
        <div class="header-bar">
            <ul class="menu-ul left-menu">
                <li>
                    <icon icon="logo" color="#2253DD #182253 #364171" width="107" height="49" />
                </li>
                <li class="handle-btns"><router-link :class="{active: $route.name === 'index'}" to="index">首页</router-link></li>
                <li class="handle-btns"><router-link :class="{active: $route.name === 'product'}" to="product">产品</router-link></li>
                <li class="handle-btns"><router-link :class="{active: $route.name === 'price'}" to="price">价格</router-link></li>
                <li class="handle-btns"><router-link :class="{active: $route.name === 'service'}" to="service">服务案例</router-link></li>
                <li class="handle-btns"><router-link :class="{active: $route.name === 'market'}" to="market">市场合作</router-link></li>
                <li class="handle-btns" @mouseover="handleNewsOver" @mouseout="handleNewsOut">
                    <router-link :class="{active: $route.name === 'about' || $route.name === 'news-list' || $route.name === 'news-detail'}" to="about">关于我们</router-link>
                    <div class="news-list" v-show="isShowNewsList">
                        <router-link to="news-list">新闻列表</router-link>
                    </div>
                </li>
            </ul>
            <ul class="menu-ul right-menu">
                <template v-if="isLogin">
                    <li>
                        <span class="msg-item">
                            <span class="msg-item-icon">
                                <icon icon="message" color="#2B234D #fff" width="16" height="16" />
                            </span>
                            <span class="msg-item-label">
                                <a @click="toModule('PMM', '/message/all')">
                                    消息中心<span v-if="unReadNum !== 0"></span>
                                </a>
                            </span>
                        </span>
                    </li>
                    <li>
                        <span class="msg-item">
                            <span class="msg-item-icon">
                                <icon icon="org" color="#2B234D" width="16" height="16" />
                            </span>
                            <span class="msg-item-label">
                                <a @click="toModule('PAM', '/organization/joined')">
                                    我加入的组织
                                </a>
                            </span>
                            <!-- <span class="el-msg-tag">{{ unTreated }}</span> -->
                        </span>
                    </li>
                    <li class="split-line"></li>
                </template>
                <li @mouseover="handleOver" @mouseout="handleOut" :class="[isLogin ? 'user-item hover' : 'user-item']">
                    <div class="sub-user-item">
                        <template v-if="isLogin">
                            <span class="msg-item-icon">
                                <icon icon="user" color="#2B234D" width="16" height="16" />
                            </span>
                            <span class="msg-item-label" @click="toModule('PAM', '/account/survey')"><a>{{ userName }}</a></span>
                        </template>
                        <template v-else>
                            <span class="handle-btns">
                                <a @click="toModule('PAM', '/login')" type="text" class="text-normal">登录</a>
                            </span>
                            <span class="handle-btns registry-btn">
                                <a @click="toModule('PAM', '/registry')" type="text" class="text-normal">注册</a>
                            </span>
                        </template>
                    </div>
                    <div class="user-detail" v-show="visible && isLogin">
                        <el-row>
                            <el-col :span="8" class="nav">
                                <a @click="toModule('PAM', '/security/setting')">账号安全</a>
                            </el-col>
                            <el-col :span="8" class="nav">
                                <a @click="toModule('PAM', '/auth/user-auth')">账号认证</a>
                            </el-col>
                            <el-col :span="8" class="nav">
                                <a @click="toModule('PAM', '/security/setting')">修改密码</a>
                            </el-col>
                            <el-col :span="24" class="controller">
                                <a class="console" @click="handleInConsole()">{{ `进入控制中心` }}</a>
                            </el-col>
                            <el-col :span="24">
                                <div class="btn-group" @click="userLogout">
                                    <icon icon="exit" width="14" height="14" color="#979797"></icon>
                                    <a>退出</a>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style src="./headerBar.scss" lang="scss" scoped></style>
