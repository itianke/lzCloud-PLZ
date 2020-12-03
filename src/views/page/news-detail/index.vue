<template>
    <div class="news-layout">
        <div class="news-bread"> <a @click="handleBack">返回</a> | <span>新闻详情</span> </div>
        <div class="news-page">
            <div class="news-page-inner">
                <div class="news-page-title">{{ artical.articleTitle }}</div>
                <div class="news-page-time">{{ artical.createdTime }} 浏览量:{{ artical.pageviews }}</div>
                <div class="news-page-content" v-html="artical.articleContent"></div>
            </div>
        </div>
    </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>
