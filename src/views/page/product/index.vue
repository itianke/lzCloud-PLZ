<template>
    <div>
        <div class="banner-layout">
            <div class="banner-inner">
                <h2>工程全生命周期 · 云管理</h2>
                <p>项目一秒掌握、流程一键操作、结算一步到位</p>
            </div>
        </div>

        <div class="focus-layout">
            <div class="focus-inner">
                <div v-for="(item, index) in focusList" :key="index" @click="handleFocus(item.id)" :class="`focus-item ${item.checked ? 'active' : ''}`">
                    <div :class="`icon icon${index + 1}`"></div>
                    <div class="text">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.content }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="focus-content-layout">
            <div class="focus-inner">
                <div class="focus-item" v-if="focusList[0].checked">
                    <div class="left">
                        <h2>不增加人员，轻松管理1万个项目</h2>
                        <div class="content">
                            <p>1.自定义工作流与权限分配，让企业实现流程标准化，大大提升管理效率</p>
                            <p>2.线上化OA协同办公，降低沟通成本，提高工作效率</p>
                            <p>3.丰富的动态数据看板，实时查看进度，帮助企业做出正常决策</p>
                        </div>
                    </div>
                    <div class="right"><img src="/static/product/pic1.png" alt=""></div>
                </div>
                <div class="focus-item" v-if="focusList[1].checked">
                    <div class="left">
                        <h2>不用每天担心被诉讼，安心睡好觉</h2>
                        <div class="content">
                            <p>1.基于大数据的预警模型，生成风险评估，结合智能对账，有效管控材料采购中的风险</p>
                            <p>2.工地实名制，智能工资计算、三级安全教育在线实施等手段，降低用工风险，减少劳务纠纷</p>
                            <p>3.超期、超支、超限三大预警体系，降低项目风险</p>
                            <p>4.通过应收/应付账款比例、成本产值转化率，建立风控模型，实时对项目经营风险进行管控</p>
                        </div>
                    </div>
                    <div class="right"><img src="/static/product/pic2.png" alt=""></div>
                </div>
                <div class="focus-item" v-if="focusList[2].checked">
                    <div class="left">
                        <h2>企业合规经营，上市不再难</h2>
                        <div class="content">
                            <p>1.商务运营全流程在线化，结合智能报备、在线合约等手段，提高服务满意度，实现企业提速发展</p>
                            <p>2.建立完善的项目经营链管理体系，结合智能收付款等手段，让账目更清晰</p>
                            <p>3.对资金、合同、票据等线上化管理，实现四流合一</p>
                        </div>
                    </div>
                    <div class="right"><img src="/static/product/pic3.png" alt=""></div>
                </div>
            </div>
        </div>

        <div class="solution-layout">
            <div class="solution-inner">
                <div class="header">角色痛点及解决方案</div>
                <div class="swiper-wrap">
                    <swiper :options="options">
                        <swiper-slide class="sw-item">
                            <div class="left">
                                <div class="thumb">
                                    <img src="/static/index2/pic1.png" alt="">
                                </div>
                                <div class="name">企业老板</div>
                            </div>
                            <div class="center">
                                <h3>痛点</h3>
                                <ul>
                                    <li>无法快速掌握企业经营数据，做出精准决策分析？</li>
                                    <li>业务扩张，又要大力增加人工成本？</li>
                                    <li>接的越多，风险越大？</li>
                                </ul>
                            </div>
                            <div class="right">
                                <h3>解决方案</h3>
                                <ul>
                                    <li>快速建立智能可调控的经验动态看板</li>
                                    <li>流程标准化，管理线上化，大大提升工作效率，减低成本</li>
                                    <li>产业大数据结合30多年经验形成的风控体系，实时管控项目风险</li>
                                </ul>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="sw-item">
                            <div class="left">
                                <div class="thumb">
                                    <img src="/static/index2/pic1.png" alt="">
                                </div>
                                <div class="name">财务总监</div>
                            </div>
                            <div class="center">
                                <h3>痛点</h3>
                                <ul>
                                    <li>无法快速核对往来款项，对账难？</li>
                                    <li>结算周期长，回款慢，担心坏账风险？</li>
                                </ul>
                            </div>
                            <div class="right">
                                <h3>解决方案</h3>
                                <ul>
                                    <li>项目款项一一对应，双向透明，全程记录可追溯</li>
                                    <li>大数据匹配，实现智能收付款，避免账款多而出错</li>
                                </ul>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="sw-item">
                            <div class="left">
                                <div class="thumb">
                                    <img src="/static/index2/pic1.png" alt="">
                                </div>
                                <div class="name">运营专员</div>
                            </div>
                            <div class="center" style="width: auto;">
                                <h3>痛点</h3>
                                <ul>
                                    <li>处理各种信息、核预算等，数据量大，费时费力且易出错？</li>
                                    <li>线下传递合同和项目资料麻烦，效率低，文件传递过程中还容易遗失，无法及时跟进？</li>
                                    <li>传统对接方式不够便捷，沟通成本高，很容易导致商务经理不满？</li>
                                </ul>
                            </div>
                            <div class="right">
                                <h3>解决方案</h3>
                                <ul>
                                    <li>线上快速生成项目单，省时高效，项目单处理规范化，避免错单漏单，系统自动整理，有效提升工作效率</li>
                                    <li>合同无纸化，流程审核线上化，无需进行线下传递，在线即可跟进，即时储存，便于后期进行准确对账等工作</li>
                                    <li>运营专员无需进行线下对接，通过系统自动规范的流程操作即可，减少沟通成本，避免商务经理不满</li>
                                </ul>
                            </div>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                    <div class="swiper-button swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button swiper-button-next" slot="button-next"></div>
                </div>
                
            </div>
        </div>

        <div class="core-layout">
            <div class="core-inner">
                <div class="header">核心功能</div>
                <div class="core-item">
                    <div class="card">
                        <div class="thumb">
                            <img src="/static/product/thumb1.png" alt="">
                        </div>
                        <h2>商务经理管理</h2>
                        <p>信息管理、加盟管理、费用管理</p>
                    </div>
                    <div class="card">
                        <div class="thumb">
                            <img src="/static/product/thumb2.png" alt="">
                        </div>
                        <h2>合同管理</h2>
                        <p>合同基本/预算信息、合同审批、<br/>合同盖章、合同档案</p>
                    </div>
                    <div class="card">
                        <div class="thumb">
                            <img src="/static/product/thumb3.png" alt="">
                        </div>
                        <h2>资金管理</h2>
                        <p>收款管理、付款管理、借还款管理 <br/>报销管理、资金调拨、质保金管理</p>
                    </div>
                    <div class="card">
                        <div class="thumb">
                            <img src="/static/product/thumb4.png" alt="">
                        </div>
                        <h2>票据管理</h2>
                        <p>销项票管理、进项票管理、收据管理 <br/>预交凭证管理、税跨报管理</p>
                    </div>
                    <div class="card">
                        <div class="thumb">
                            <img src="/static/product/thumb5.png" alt="">
                        </div>
                        <h2>业务数据管理</h2>
                        <p>招投标文件及费用、证书证件 <br/>文件原件签收、客户信息管理</p>
                    </div>
                </div>
                <div class="core-item">
                    <div class="card">
                        <div class="thumb">
                            <img src="/static/product/thumb6.png" alt="">
                        </div>
                        <h2>经营分析报表</h2>
                        <p>项目经营分析报表、公司经营分析报表 <br/>商务经理运营报表、组织绩效报表</p>
                    </div>
                    <div class="card">
                        <div class="thumb">
                            <img src="/static/product/thumb7.png" alt="">
                        </div>
                        <h2>采购管理</h2>
                        <p>材料总计划、采购申购 <br/>采购订单、现场物料</p>
                    </div>
                    <div class="card">
                        <div class="thumb">
                            <img src="/static/product/thumb8.png" alt="">
                        </div>
                        <h2>劳务管理</h2>
                        <p>人员管理、安全管理 <br/>工时管理、薪资管理</p>
                    </div>
                    <div class="card">
                        <div class="thumb">
                            <img src="/static/product/thumb9.png" alt="">
                        </div>
                        <h2>施工管理</h2>
                        <p>质量、进度、安全 <br/>惩罚单、工作汇报</p>
                    </div>
                    <div class="card">
                        <div class="thumb">
                            <img src="/static/product/thumb10.png" alt="">
                        </div>
                        <h2>成本管理</h2>
                        <p>材料费、劳务费、其他费</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="assist-layout">
            <div class="assist-inner">
                <div class="header">助力企业提升效率</div>
                <div class="core-item">
                    <div class="card">
                        <div class="thumb thumb1"></div>
                        <p>提升100%管理效率</p>
                    </div>
                    <div class="card">
                        <div class="thumb thumb2"></div>
                        <p>节约80%人力成本</p>
                    </div>
                    <div class="card">
                        <div class="thumb thumb3"></div>
                        <p>降低5%采购成本</p>
                    </div>
                    <div class="card">
                        <div class="thumb thumb4"></div>
                        <p>降低40%项目风险率</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="version-layout">
            <div class="version-inner">
                <div class="header">产品版本</div>
                <div class="core-item">
                    <div class="card">
                        <div class="thumb thumb1"><span>标准版</span></div>
                        <p>适用于少于20人的工程公司 <br/>满足工程公司项目经营 <br/>管理的基础需求 <br/>实现业务线上化</p>
                    </div>
                    <div class="card">
                        <div class="thumb thumb2"><span>旗舰版</span></div>
                        <p>适用于超过20人的工程公司 <br/>满足工程公司项目经营 <br/>管理的基础需求 <br/>实现业务线上化</p>
                    </div>
                    <div class="card">
                        <div class="thumb thumb3"><span>定制版</span></div>
                        <p>适用于个性化需求的工程公司 <br/>满足工程公司项目经营 <br/>管理的基础需求 <br/>实现业务线上化</p>
                    </div>
                </div>
            </div>
        </div>

        <form-section></form-section>
    </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>
