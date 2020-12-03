<template>
    <div class="enginner-cloud">
        <header-bar
            :unTreated="headerInfo.unTreated"
            :unReaded="headerInfo.unReaded"
            :activeIndex="1"
            fromModule="PLZ"
            :config="config"
            source="1"
            style="background: url('/static/cloud/bg.png') no-repeat; background-size: cover; height: 750px;"
        >
            <div>
                <div class="title">
                    <span>工程全生命周期云管理</span>
                </div>
                <div class="description">
                    <span>项目一秒掌握、流程一键操作、结算一步到位 节省80%人力成本、提高100%效率</span>
                </div>
            </div>
        </header-bar>

        <div class="ecology-layout">
            <div class="title center">
                <span>用互联网重构工程管理新生态</span>
            </div>
            <div class="tips">
                <span>工程协同数据化和工程专家平台化</span>
            </div>
            <div class="ecology-card-list">
                <div class="ecology-card">
                    <span class="step">01</span>
                    <span class="step-title">规范化管理动作</span>
                    <span class="step-description">通过现场数据录入、管理动作留痕等，有效规范分包单位管理动作，提升工程质量</span>
                </div>
                <div class="ecology-card">
                    <span class="step">02</span>
                    <span class="step-title">标准化施工动作</span>
                    <span class="step-description">改变传统软件售卖模式，秉持以服务为核心的产品理念，开创免费应用新模式</span>
                </div>
                <div class="ecology-card">
                    <span class="step">03</span>
                    <span class="step-title">信息全面协同</span>
                    <span class="step-description">通过现场进度、质量、劳务、材料等信息的实时上传上报，自动生成多维度分析报表，为各方提供管理决策基础</span>
                </div>
                <div class="ecology-card">
                    <span class="step">04</span>
                    <span class="step-title">积累、沉淀与共享</span>
                    <span class="step-description">通过将优秀工艺做法形成模板、将常见问题形成标准解决方案来规避频率高的施工现象</span>
                </div>
                <div class="ecology-card">
                    <span class="step">05</span>
                    <span class="step-title">为甲方减负，转型为专家</span>
                    <span class="step-description">合理分配时间，提升人均管理面积科学管理项目，节约人力成本</span>
                </div>
            </div>
        </div>

        <div class="management-layout">
            <div class="title center">
                <span>领筑工程云</span>
            </div>
            <div class="tips">
                <span>简单高效的工程全生命周期云管理平台</span>
            </div>
            <div class="small-tips">
                <span
                    >领筑工程云通过建立虚拟的工程协作环境，连接工程项目中的人员、数据和流程，帮助工程项目团队实现成员和资源的管理、供应链和产业链的管理、工程及施工的管理、进度、质量和安全的管理，经营及战略的分析，在一套系统内管理工程的全生命周期，帮助用户提升效率、
                    降低成本、平衡风险、有效规划。</span
                >
            </div>
            <div class="management-card-list">
                <div class="management-card bg-1">
                    <span class="bg">
                        <img src="/static/cloud/field-bg-1.svg" />
                    </span>
                    <span class="line"></span>
                    <span class="text">操作便捷</span>
                    <span class="detail">决策层、管理层、应用层多角度设计，最大限度减少输入任务造成的工作量</span>
                </div>
                <div class="management-card bg-2">
                    <span class="bg">
                        <img src="/static/cloud/field-bg-2.svg" />
                    </span>
                    <span class="line"></span>
                    <span class="text">免费升级使用</span>
                    <span class="detail">改变传统软件售卖模式，秉持以服务为核心的产品理念，开创免费应用新模式</span>
                </div>
                <div class="management-card bg-3">
                    <span class="bg">
                        <img src="/static/cloud/field-bg-3.svg" />
                    </span>
                    <span class="line"></span>
                    <span class="text">全功能模块</span>
                    <span class="detail">集OA、CRM、PM等为一体，全面打通项目、财务、采购等核心数据</span>
                </div>
                <div class="management-card bg-4">
                    <span class="bg">
                        <img src="/static/cloud/field-bg-4.svg" />
                    </span>
                    <span class="line"></span>
                    <span class="text">智能化数据统计分析</span>
                    <span class="detail">自动汇总材料、工期、质量、费用等多维度数据，管理更精准高效</span>
                </div>
                <div class="management-card bg-5">
                    <span class="bg">
                        <img src="/static/cloud/field-bg-5.svg" />
                    </span>
                    <span class="line"></span>
                    <span class="text">多库技术</span>
                    <span class="detail">PAAS平台技术，灵活扩展，满足个性需求</span>
                </div>
            </div>
        </div>

        <div class="model-layout">
            <div class="title center">
                <span>开启工程管理新模式</span>
            </div>
            <div class="tips">
                <span>让工程管理更轻松</span>
            </div>
            <div class="small-tips">
                <span
                    >领筑工程云助力工程管理从传统管理模式升级到信息化、移动化管理，
                    为工程企业提供量身定制的项目工地实时管理和数据统计分析服务，以达到所有部门、人员和项目盈亏动态透明化管控，大幅度提升工程管理效率、降低经营成本，驱动工程建设的利润倍增，实现互联网+工程的转型升级。</span
                >
            </div>
            <div class="model-card-list">
                <div class="model-card">
                    <span class="title">增强质量</span>
                    <div class="model-bg">
                        <img src="/static/cloud/model-bg-1.svg" />
                    </div>
                    <span class="text">全过程追踪、问题闭环、数据留存、一项一档</span>
                </div>
                <div class="model-card">
                    <span class="title">提升效率</span>
                    <div class="model-bg">
                        <img src="/static/cloud/model-bg-2.svg" />
                    </div>
                    <span class="text">信息的传递通畅是高效协作的核心</span>
                </div>
                <div class="model-card">
                    <span class="title">降低成本</span>
                    <div class="model-bg">
                        <img src="/static/cloud/model-bg-3.svg" />
                    </div>
                    <span class="text">沟通顺畅，维修率下降</span>
                </div>
            </div>
        </div>

        <div class="quality-layout">
            <div class="title center">
                <span>智慧协同·提质增效降本</span>
            </div>
            <div class="tips">
                <span>“零距离”的精益化工程管控专家</span>
            </div>
            <div class="small-tips">
                <span
                    >领筑工程云通过云端大数据建立人与人、人与物、物与物的连接与协同，辅助各方主体实现项目工地人、机、料、法、环的全面把控与追溯，执行层自主决定问题处理的机构和人员，管理层通过数据报表进行分析决策，从而建立多方信任机制，共筑信息化时代的智慧工程管理方式。</span
                >
            </div>
            <div class="quality-card-list">
                <div class="quality-card">
                    <div class="quality-bg quality-bg-1"></div>
                    <span class="title">互通</span>
                </div>
                <div class="quality-card">
                    <div class="quality-bg quality-bg-2"></div>
                    <span class="title">互联</span>
                </div>
                <div class="quality-card">
                    <div class="quality-bg quality-bg-3"></div>
                    <span class="title">协同</span>
                </div>
                <div class="quality-card">
                    <div class="quality-bg quality-bg-4"></div>
                    <span class="title">共享</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="./enginner-cloud.scss" lang="scss" scoped></style>
