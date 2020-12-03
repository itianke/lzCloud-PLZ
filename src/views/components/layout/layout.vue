<template>
    <el-container id="container">
        <el-header>
            <header-bar
                :unTreated="headerInfo.unTreated"
                :unReaded="headerInfo.unReaded"
                :activeIndex="0"
                fromModule="PLZ"
                :config="config"
            >
            </header-bar>
        </el-header>
        <main-container>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </main-container>
        <footer-bar> </footer-bar>
    </el-container>
</template>

<style src="./layout.scss" lang="scss" scoped></style>
