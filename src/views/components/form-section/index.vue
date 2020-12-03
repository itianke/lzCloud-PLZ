<template>
    <div class="form-section">
        <div class="inner">
            <div class="inner-header">联系我们，让管理更高效</div>
            <div class="inner-step"></div>
            <el-form :inline="true" :rules="rules" :model="options" ref="ruleForm" class="demo-form-inline">
                <el-form-item prop="uName">
                    <el-input class="input-item" v-model="options.uName" placeholder="请输入您的姓名"></el-input>
                </el-form-item>
                <el-form-item prop="uMobile">
                    <el-input class="input-item" v-model="options.uMobile" :maxLength="11" placeholder="请输入您的手机号码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="input-item input-item-btn" @click="onSubmit">提 交</el-button>
                </el-form-item>
            </el-form>
            <div class="inner-hotline">咨询热线：4000-996-660</div>
        </div>
    </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>
