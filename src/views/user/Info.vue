<template>
  <div>
    <el-main>
          <!-- 主体 -->
      <el-image 
      style="width: 263px; height: 262px"
       margin-left:10px
      :src="require('../../assets/images/tou.png')">
      </el-image>
      <el-form :model="ruleForm"  >
        <el-form-item label="昵称" prop="aname">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
      </el-form>
    </el-main>
      <!-- 主体 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        aname: "",
        gender: "",
        age: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
