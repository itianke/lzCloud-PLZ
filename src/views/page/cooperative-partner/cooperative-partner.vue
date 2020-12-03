<template>
    <div class="enginner-cloud">
        <header-bar
            :unTreated="headerInfo.unTreated"
            :unReaded="headerInfo.unReaded"
            :activeIndex="2"
            fromModule="PLZ"
            :config="config"
            style="background: url('/static/bg-1.png') no-repeat; background-size: cover;"
        >
            <div>
                <div class="title">
                    <span>领筑生态合作伙伴</span>
                </div>
                <div class="description">
                    <span>开放合作，共建工程全产业链新生态</span>
                </div>
                <div class="option">
                    <el-button v-waves @click="handleJoin()">申请加入</el-button>
                </div>
            </div>
        </header-bar>

        <div class="progress-layout">
            <div class="progress-title">
                <span>成为领筑合作伙伴</span>
            </div>
            <div class="progress-tips">
                <span>简单3步，加入领筑生态计划</span>
            </div>
            <div class="progress-row">
                <div class="progress-cell first">
                    <div class="progress-item">
                        <div class="progress-bg bg-1"></div>
                        <span class="text">
                            注册领筑帐号
                        </span>
                    </div>
                    <div class="progress-arrow">
                        <i class="el-icon-caret-right" />
                    </div>
                </div>
                <div class="progress-cell second">
                    <div class="progress-item">
                        <div class="progress-bg bg-2"></div>
                        <span class="text">
                            申请加入合作伙伴
                        </span>
                    </div>
                    <div class="progress-arrow">
                        <i class="el-icon-caret-right" />
                    </div>
                </div>
                <div class="progress-cell third">
                    <div class="progress-item">
                        <div class="progress-bg bg-3"></div>
                        <span class="text">
                            展开业务合作
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="description-layout">
            <div class="description-title">
                <span>城市服务商计划</span>
            </div>
            <div class="description-tips">
                <span>URBAN SERVICE PROVIDER PROGRAM</span>
            </div>
            <div class="description-label">
                <span
                    >区域服务商计划是通过集结全国具备区域服务能力的合作伙伴，用本地化服务的优势，携手领筑生态为广大工程企业提供集采购、供应、上下游服务为一体的生态服务，加入计划的合作伙伴将获得领筑在品牌、技术、服务及运营上的支撑，凭借先发优势成为所在区域的领先工程企业。</span
                >
            </div>
            <div class="description-option">
                <el-button v-waves @click="handleView">查看详情</el-button>
                <el-button v-waves @click="handleJoin">申请加入</el-button>
            </div>
        </div>
    </div>
</template>

<style src="./cooperative-partner.scss" lang="scss" scoped></style>
