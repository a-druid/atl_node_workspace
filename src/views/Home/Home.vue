<template>
    <div>
        <el-container>
            <el-header>
                <NavMenu activeIndex="1"></NavMenu>
            </el-header>
            <el-main>
                <el-row>
                    <el-col :span="12">
                        <Card></Card>
                    </el-col>
                    <el-col :span="12">
                        <Card></Card>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <Card></Card>
                    </el-col>
                    <el-col :span="12">
                        <Card></Card>
                    </el-col>
                </el-row>
            </el-main>
            <el-footer>
                <Footer></Footer>
            </el-footer>
        </el-container>

    </div>

</template>

<style>
@import "./Home.scss";
</style>

<script src="./Home.js"></script> 