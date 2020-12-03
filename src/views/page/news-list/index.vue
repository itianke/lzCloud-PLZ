<template>
    <div>
        <div class="banner-layout">
            <div class="banner-inner"></div>
        </div>

        <div class="news-layout">
            <div class="news-inner">
                <div class="list" v-loading="loading">
                    <div class="card" v-for="(item, index) in articalList" :key="index" @click="handletoDetail(item.id)">
                        <div class="thumb"><img :src="item.articleGraphUrl" alt=""></div>
                        <div class="content">
                            <span>{{ item.createdTime }}</span>
                            <h2>{{ item.articleTitle }}</h2>
                            <p>
                                {{ item.articleSynopsis }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="pagination">
                    <el-pagination
                        background
                        slot="footer"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pagination.page"
                        :page-sizes="pagination.pageSizes"
                        :page-size="pagination.size"
                        layout="prev, pager, next, sizes, jumper, total"
                        :total="pagination.total"
                    >
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>
