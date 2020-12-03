<template>
    <div class="index">
        <div class="banner-layout">
            <div class="banner-inner">
                <h2>领筑云</h2>
                <p>让管理更高效 &nbsp;&nbsp; 让经营更智慧 &nbsp;&nbsp; 让工程更简单</p>
                <p>
                    <span class="down"></span> 节省80%人力成本 &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="up"></span> 提高100%效率
                </p>
            </div>
        </div>
        <div class="message-layout">
            <div class="sw-warp">
                <div class="icon-speak">
                    <icon icon="specker" color="#F96A10" width="24" height="22" />
                </div>
                <swiper ref="mySwiper" :options="options">
                    <swiper-slide class="sw-item" v-for="(item, index) in articalList" :key="index">
                        <router-link :to="`/news-detail?id=${item.id}`"><strong>{{ transferData(item.articleType) }}</strong> {{ item.articleTitle }}</router-link>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="count-layout">
            <div class="count-layout-inner">
                <div class="inner-item">
                    <div class="card">
                        <div class="num">{{ count.engineeringCompanyCount }} <span>家</span> </div>
                        <div class="text">工程公司用户数</div>
                    </div>
                    <div class="card">
                        <div class="num">{{ count.constructingCount }} <span>家</span> </div>
                        <div class="text">管理在建项目数</div>
                    </div>
                    <div class="card">
                        <div class="num">{{ count.contractCount }} <span>份</span> </div>
                        <div class="text">管理合同总数</div>
                    </div>
                    <div class="card">
                        <div class="num">{{ count.serviceProviderAndPartnersCount }} <span>家</span> </div>
                        <div class="text">服务商及合作伙伴</div>
                    </div>
                    <div class="card">
                        <div class="num">{{ count.servicesOutput }} <span>万</span> </div>
                        <div class="text">累积服务产值</div>
                    </div>
                </div>
                <div class="inner-item">
                    <div class="card">
                        <div class="num">{{ count.materialSupplierCount }} <span>家</span> </div>
                        <div class="text">材料供应商</div>
                    </div>
                    <div class="card">
                        <div class="num">{{ count.materialEcommerceSku }} <span>家</span> </div>
                        <div class="text">材料电商SKU数</div>
                    </div>
                    <div class="card">
                        <div class="num">{{ count.materialEcommerceGmv }} <span>万</span> </div>
                        <div class="text">材料电商交易额</div>
                    </div>
                    <div class="card">
                        <div class="num">{{ count.realNameWorkers }} <span>名</span> </div>
                        <div class="text">实名认证工人</div>
                    </div>
                    <div class="card">
                        <div class="num">{{ count.certifiedConstructionTeam }} <span>支</span> </div>
                        <div class="text">认证施工队 </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="textimage-layout bg-dark">
            <div class="textimage-inner">
                <div class="text fl">
                    <h3>工程经营</h3>
                    <p>从项目合同、资金、票据出发，通过在线协同、在线合约 智能收付款，从源头把控，帮助客户不增加人员的情况下 管理更多的项目、同时更有多年经验形成的风控体系做保 障，帮助管控好企业经营风险。</p>
                </div>
                <div class="image fr">
                    <img src="/static/index2/pic5.png" alt="">
                </div>
            </div>
        </div>

        <div class="textimage-layout bg-light">
            <div class="textimage-inner">
                <div class="text fr">
                    <h3 style="margin-top: 55px;">商务运营</h3>
                    <p>全流程在线化管理和数据隐私化保护，帮助企业扩大业务规模， 降低管理成本，提升项目运作的效率。</p>
                </div>
                <div class="image fl">
                    <img src="/static/index2/pic4.png" alt="">
                </div>
            </div>
        </div>

        <div class="textimage-layout bg-dark">
            <div class="textimage-inner">
                <div class="text fl">
                    <h3 style="margin-top: 60px;">采购管理</h3>
                    <p>从需求到采购、订单到对账开票覆盖整体采购业务，全面 提升供应效率与管理体验。通过数据驱动，可以减低5% 的综合管理成本。</p>
                </div>
                <div class="image fr">
                    <img src="/static/index2/pic1.png" alt="">
                </div>
            </div>
        </div>

        <div class="textimage-layout bg-light">
            <div class="textimage-inner">
                <div class="text fr">
                    <h3 style="margin-top: 60px;">项目管理</h3>
                    <p>以过程数据为核心，把各项管理目标与数据进行结合，直观、有效、 准确地反映项目管理的情况，实现材料、劳务、施工进度、质量、 安全、产值等六维数据形成智能联动，做到状态一目了然、计划心中有数，让项目管理尽在掌握之中。</p>
                </div>
                <div class="image fl">
                    <img src="/static/index2/pic3.png" alt="">
                </div>
            </div>
        </div>

        <div class="textimage-layout bg-dark">
            <div class="textimage-inner">
                <div class="text fl">
                    <h3 style="margin-top: 60px;">维保管理</h3>
                    <p>为社会单位、维保服务机构和监管部门提供城市消防安全 服务云端解决方案，实现了实时的安全监管、做到7*24 小时快速响应。</p>
                </div>
                <div class="image fr">
                    <img src="/static/index2/pic7.png" alt="">
                </div>
            </div>
        </div>

        <div class="textimage-layout bg-light">
            <div class="textimage-inner">
                <div class="text fr">
                    <h3>施工队管理</h3>
                    <p>让传统的施工队管理升级为在线化、简单化、智能化的管理方式，实时了解项目用工情况、及时跟踪用工与整体进度的匹配程度、保障工资精准发放，完善劳务用工安全、减少劳务纠纷。</p>
                </div>
                <div class="image fl">
                    <img style="transform: scale(1.5) translateY(35px);" src="/static/index2/pic2.png" alt="">
                </div>
            </div>
        </div>

        <div class="textimage-layout bg-dark">
            <div class="textimage-inner">
                <div class="text fl">
                    <h3>工程大数据</h3>
                    <p>通过领筑云大数据管理与可视化分析平台，为企业提供 360视角的工程大数据解决方案，提升业务达成率，助力企业营销决策和商业洞察，在海量数据中挖掘商业价值和新的商业机会。</p>
                </div>
                <div class="image fr" style="width: 540px; padding-top: 50px;">
                    <img src="/static/index2/pic6.png" alt="">
                </div>
            </div>
        </div>

        <div class="slogan-layout">
            <div class="slogan-inner">
                <h2>为什么选择领筑云</h2>
                <p>基于30年工程行业经验深度定制 | 专业研发团队 | 提供一站式产业服务</p>
            </div>
        </div>

        <div class="boss-layout">
            <div class="boss-inner">
                <div class="boss-image"></div>
                <div class="boss-text">
                    <div class="icon"></div>
                    <div class="text">
                        <p>领筑云帮助我们完成了平台化的战略转型，产值也在8年间翻了超十倍。在各行业都在转型升级，互联网、大数据成熟运用的今天，一套适合自身的信息化管理工具不可或缺。很荣幸的是深华建设走在了行业的前列。</p>
                        <h3>——曹世锋</h3>
                        <span>深圳智慧建设控股有限公司 董事长/总裁</span>
                    </div>
                </div>
            </div>
        </div>

        <form-section></form-section>
    </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>
