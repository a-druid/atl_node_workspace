<template>
    <div>
        <el-container>
            <el-header>
                <NavMenu activeIndex="2"></NavMenu>
            </el-header>
            <el-main>
                <el-steps :active="2" align-center>
                    <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
                </el-steps>
            </el-main>
            <div style="width:1500px;margin-left:150px">
                <el-row :gutter="10">
                <el-col :span="6">
                 <el-container>
                        <el-header>
                            <el-row>
                            <el-col><div style="margin-top:-20px;margin-left: 100px;float:left">
                            <H1 style="color:red">＊指標を選択してください。</H1>
                            <span>
                                <H4 style="margin-top:-30px;float:left">指標選択</H4>
                                <a href="#" style="margin-top:-30px;float:right">条件クリア</a>
                            </span>
                            </div></el-col>
                            </el-row>
                        </el-header>
                        <el-footer>
                            <div class="grid-content bg-purple" style="height:350px;overflow:scroll;">
                            <ul id="v-for-object">
                            <div v-for="value in object">
                                <el-checkbox v-model="checked" >
                                    {{ value }}
                                </el-checkbox>
                                </div>
                            </ul>
                        </div>
                        </el-footer>
                    </el-container>
                </el-col>
                <el-col :span="6">
               <el-container>
                        <el-header>
                            <el-row>
                            <el-col><div style="margin-top:-20px;margin-left: 100px;float:left">
                            <H1 style="color:red">＊国分を選択してください。</H1>
                            <span>
                                <H4 style="margin-top:-30px;float:left">国分選択</H4>
                                <a href="#" style="margin-top:-30px;float:right">条件クリア</a>
                            </span>
                            </div></el-col>
                            </el-row>
                        </el-header>
                        <el-footer>
                            <div class="grid-content bg-purple" style="height:350px;overflow:scroll;">
                            <ul id="v-for-object">
                            <div v-for="value in object">
                                <el-checkbox v-model="checked" >
                                    {{ value }}
                                </el-checkbox>
                                </div>
                            </ul>
                        </div>
                        </el-footer>
                    </el-container>
                </el-col>
                <el-col :span="6">
                <el-container>
                        <el-header>
                            <el-row>
                            <el-col><div style="margin-top:-20px;margin-left: 100px;float:left">
                            <H1 style="color:red">＊業界を選択してください。</H1>
                            <span>
                                <H4 style="margin-top:-30px;float:left">業界選択</H4>
                                <a href="#" style="margin-top:-30px;float:right">条件クリア</a>
                            </span>
                            </div></el-col>
                            </el-row>
                        </el-header>
                        <el-footer>
                            <div class="grid-content bg-purple" style="height:350px;overflow:scroll;float:left">
                            <ul id="v-for-object">
                            <div v-for="category in categoryInfo">
                                <el-checkbox v-model="checked" style="float:left;margin-left:20px">
                                    {{ category }}
                                </el-checkbox>
                                </div>
                            </ul>
                        </div>
                        </el-footer>
                    </el-container>
                </el-col>
                <el-col :span="6">
                    <el-container>
                        <el-header>
                            <el-row>
                            <el-col><div style="margin-top:-20px;margin-left: 100px;float:left;">
                            <H1 style="color:red">＊年分を選択してください。</H1>
                            <span>
                                <H4 style="margin-top:-30px;float:left;">年分選択</H4>
                                <a href="#" style="margin-top:-30px;float:right">条件クリア</a>
                            </span>
                            </div></el-col>
                            </el-row>
                        </el-header>
                        <el-footer>
                            <div class="grid-content bg-purple" style="height:350px;overflow:scroll;">
                            <ul id="v-for-object">
                            <div v-for="year in yearsInfo">
                                <el-checkbox v-model="checked" >
                                    {{ year }}
                                </el-checkbox>
                                </div>
                            </ul>
                        </div>
                        </el-footer>
                    </el-container>
                </el-col>
                </el-row>
            </div>
        </el-container>
    </div>
</template>

<style>
@import "./Tab1.scss";
</style>

<script src="./Tab1.js"></script> 