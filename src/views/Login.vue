<template>
    <el-row>
        <el-col :span='6' :offset='9'>
            <el-form label-width="80px">
                <el-form-item label='账户：'>
                    <el-input placeholder="账户" v-model="account"></el-input>
                </el-form-item>
                <el-form-item label='密码：'>
                    <el-input type='password' placeholder='密码' v-model="password"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-button type='primary' style="width:100%" @click='login'>登陆</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script lang="ts">
import login from '@/assets/scripts/login';
export default login;
</script>

<style lang="less" scoped src='../assets/styles/login.less'>
</style>
