<template>
    <div class="provider-program">
        <header-bar
            :unTreated="headerInfo.unTreated"
            :unReaded="headerInfo.unReaded"
            :activeIndex="2"
            fromModule="PLZ"
            :config="config"
            style="background: url('/static/bg-1.png') no-repeat; background-size: cover; height: 620px;"
        >
            <div>
                <div class="title">
                    <span>领筑城市服务商正在招募中</span>
                </div>
                <div class="description">
                    <span>1城1位，全国661城，只开发30个席位</span>
                </div>
                <div class="criteria">
                    <div class="circle">
                        <span class="number">0</span>
                        <span class="text">零优选费</span>
                    </div>
                    <div class="circle">
                        <span class="number">0</span>
                        <span class="text">零保证金</span>
                    </div>
                    <div class="circle">
                        <span class="number">80</span>
                        <span class="text">80倍回报</span>
                    </div>
                </div>
                <div class="option">
                    <el-button v-waves @click="handleJoin">申请加入</el-button>
                </div>
            </div>
        </header-bar>

        <div class="progress-layout">
            <div class="progress-title">
                <span>连接融合·全面赋能</span>
            </div>
            <div class="progress-tips">
                <span>通过产品赋能、管理赋能、商业模式赋能帮助联盟企业建立行业优势</span>
            </div>
            <div class="progress-cards">
                <div class="card">
                    <div class="card-title">
                        <span>产品赋能</span>
                    </div>
                    <div class="card-image image-1"></div>
                    <div class="card-description">
                        <span>
                            材料采购平台、劳务交易平台、商务经理经营SAAS、公司工程管理SAAS、工程项目管理SAAS、维保监测管理SAAS、施工队管理SAAS，两大平台五大SAAS系统，全面链接工程公司业务触角。
                        </span>
                    </div>
                </div>

                <div class="card">
                    <div class="card-title">
                        <span>管理赋能</span>
                    </div>
                    <div class="card-image image-2"></div>
                    <div class="card-description">
                        <span>
                            流程管理、在线审核、节点提醒、异常预警，诸多功能更贴近工程公司应用需求，数据化、流程化、可视化、规范化的管理工具，杜绝灰色收入，整体提升办公效率，大大降低企业经营风险。
                        </span>
                    </div>
                </div>

                <div class="card">
                    <div class="card-title">
                        <span>商业模式赋能</span>
                    </div>
                    <div class="card-image image-3"></div>
                    <div class="card-description">
                        <span>
                            通过产品与人、业务、数据的相互关联，构建消防工程产业链信用体系与金融生态，工程公司与商务经理之间将催生出更多新的商业模式。
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="union-layout">
            <div class="union-title">
                <span>荣耀联盟</span>
            </div>
            <div class="union-tips">
                <span>开放合作，五大机制共同打造优质工程新生态</span>
            </div>
            <div class="union-borders">
                <div class="union-border">
                    <span class="text">筛选机制</span>
                    <span class="detail">
                        扶强除弱，精选全国同规模、阶层一致、同等效益、因为稀缺，所以优质。
                    </span>
                    <span class="border border-b"></span>
                    <span class="border border-l"></span>
                    <span class="border border-r"></span>
                    <span class="border border-t"></span>
                    <span class="image">
                        <img src="/static/program/sxt.png" />
                    </span>
                </div>
                <div class="union-border">
                    <span class="text">共享机制</span>
                    <span class="detail">
                        共享异地联营项目资源、共享最优采购资源、共享商务经理资源。
                    </span>
                    <span class="border border-b"></span>
                    <span class="border border-l"></span>
                    <span class="border border-r"></span>
                    <span class="border border-t"></span>
                    <span class="image">
                        <img src="/static/program/gxt.png" />
                    </span>
                </div>
                <div class="union-border">
                    <span class="text">合作机制</span>
                    <span class="detail">
                        为了实现同一目标而共同努力群体。
                    </span>
                    <span class="border border-b"></span>
                    <span class="border border-l"></span>
                    <span class="border border-r"></span>
                    <span class="border border-t"></span>
                    <span class="image">
                        <img src="/static/program/hzt.png" />
                    </span>
                </div>
                <div class="union-border">
                    <span class="text">分红机制</span>
                    <span class="detail">
                        共享5%股权市值裂变，冲顶80倍回报。
                    </span>
                    <span class="border border-b"></span>
                    <span class="border border-l"></span>
                    <span class="border border-r"></span>
                    <span class="border border-t"></span>
                    <span class="image">
                        <img src="/static/program/fht.png" />
                    </span>
                </div>
                <div class="union-border">
                    <span class="text">推广机制</span>
                    <span class="detail">
                        可在旗下商务经理间或行业内大范围推广，迅速激活现有资源。
                    </span>
                    <span class="border border-b"></span>
                    <span class="border border-l"></span>
                    <span class="border border-r"></span>
                    <span class="border border-t"></span>
                    <span class="image">
                        <img src="/static/program/tgt.png" />
                    </span>
                </div>
            </div>
        </div>

        <div class="advantage-layout">
            <div class="advantage-title">
                <span>合作优势</span>
            </div>
            <div class="advantage-tips">
                <span>通过产品赋能、管理赋能、商业模式赋能帮助联盟企业建立行业优势</span>
            </div>
            <div class="advantage-cards">
                <div class="card">
                    <div class="card-image image-1"></div>
                    <div class="card-title">
                        <span class="label">零风险</span>
                        <span class="line"></span>
                    </div>
                    <div class="card-description">
                        <span>无需优选费等费用，自有资金没有损失风险</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card-image image-2"></div>
                    <div class="card-title">
                        <span class="label">变现快</span>
                        <span class="line"></span>
                    </div>
                    <div class="card-description">
                        <span>系统自动计算佣金和提成，收入所见即所得</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card-image image-3"></div>
                    <div class="card-title">
                        <span class="label">大支持</span>
                        <span class="line"></span>
                    </div>
                    <div class="card-description">
                        <span>强大的管理培训支持，完整的品牌营销体系支持，优良的售后服务支持</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card-image image-4"></div>
                    <div class="card-title">
                        <span class="label">高回报</span>
                        <span class="line"></span>
                    </div>
                    <div class="card-description">
                        <span>城市伙伴预期每年可获得超百万元持续性收益</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="process-layout">
            <div class="process-title">
                <span>合作流程</span>
            </div>
            <div class="process-tips">
                <span>COOPERATION PROCESS</span>
            </div>
            <div class="process-content">
                <div class="process-card">
                    <div class="process-card-item">
                        <div class="process-card-image process-image-1"></div>
                        <i class="el-icon-caret-right" />
                    </div>
                    <div class="process-text">
                        <span>提交合伙意向</span>
                    </div>
                </div>
                <div class="process-card ml">
                    <div class="process-card-item">
                        <div class="process-card-image process-image-2"></div>
                        <i class="el-icon-caret-right" />
                    </div>
                    <div class="process-text">
                        <span>了解招商政策</span>
                    </div>
                </div>
                <div class="process-card" style="margin-left: 35px; max-width: 250px;">
                    <div class="process-card-item">
                        <div class="process-card-image process-image-3"></div>
                        <i class="el-icon-caret-right" />
                    </div>
                    <div class="process-text">
                        <span>邀请到访或调研回访</span>
                    </div>
                </div>
                <div class="process-card " style="margin-left: 70px;">
                    <div class="process-card-item">
                        <div class="process-card-image process-image-4"></div>
                    </div>
                    <div class="process-text">
                        <span>服务商筛选</span>
                    </div>
                </div>
                <div class="process-card card-row">
                    <div class="card-icon">
                        <i class="el-icon-caret-bottom" />
                    </div>
                </div>
                <div class="process-card">
                    <div class="process-card-item">
                        <div class="process-card-image process-image-5"></div>
                        <i class="el-icon-caret-left" />
                    </div>
                    <div class="process-text" style="margin-left: 22px;">
                        <span>收益分成</span>
                    </div>
                </div>
                <div class="process-card ml">
                    <div class="process-card-item">
                        <div class="process-card-image process-image-6"></div>
                        <i class="el-icon-caret-left" />
                    </div>
                    <div class="process-text" style="margin-left: 24px;">
                        <span>启动市场</span>
                    </div>
                </div>
                <div class="process-card ml">
                    <div class="process-card-item">
                        <div class="process-card-image process-image-7"></div>
                        <i class="el-icon-caret-left" />
                    </div>
                    <div class="process-text" style="margin-left: 2px;">
                        <span>签订合伙协议</span>
                    </div>
                </div>
                <div class="process-card" style="margin-left: 70px;">
                    <div class="process-card-item">
                        <div class="process-card-image process-image-8"></div>
                    </div>
                    <div class="process-text" style="margin-left: 16px;">
                        <span>确定资格</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="./service-provider-program.scss" lang="scss" scoped></style>
