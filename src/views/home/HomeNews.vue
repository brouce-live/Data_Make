<template>
  <div>
    <div style="border-bottom: 1px dotted black; height: 60px">
      <div style="height: 60px; line-height: 60px">
        <img slot="item-icon" src="../../assets/img/tabbar/poss.svg" alt="" style="width: 45px; height: 45px; margin-left: 10px; margin-top: 7px; float: left">
        <span style="float: left; font-size: 18px; margin-left: 7px; font-weight: bold">A市局</span>
        <div style="clear: both"></div>
      </div>
    </div>
    <div>
      <div style="margin-left: 10px; margin-top: 7px" @click="dialogFormVisible = true">
        <el-button type="success">新建</el-button>
      </div>
      <div>
        <tab-control class="tab-control" :titles="['全部','待处理','重点关注','处理完毕','','','','','','','']" @tabClick="tabClick"></tab-control>
      </div>
      <div v-if="Index === 0">
        <all />
      </div>
      <div v-else-if="Index === 1">
        <deal />
      </div>
      <div v-else-if="Index === 2">
        <follow />
      </div>
      <div v-else-if="Index === 3">
        <over />
      </div>
    </div>

    <div>
      <el-dialog title="新建信息" :visible.sync="dialogFormVisible" width="450px" top="0" fullscreen="true">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

          <el-form-item label="信息类型" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择信息类型">
              <el-option label="信息" value="information"></el-option>
              <el-option label="通报" value="notice"></el-option>
              <el-option label="指令" value="instruct"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="信息标题" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入信息标题"></el-input>
          </el-form-item>

          <el-form-item label="信息内容" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入信息内容"></el-input>
          </el-form-item>

          <div style="float: left">
            <el-form-item label="信息期号" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入信息期号"></el-input>
            </el-form-item>
          </div>
          <div style="float: left">
            <el-form-item label="信息来源" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入信息来源"></el-input>
            </el-form-item>
          </div>
          <div style="float: left">
            <el-form-item label="报送方式" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择报送方式">
                <el-option label="网络" value="network"></el-option>
                <el-option label="其他" value="others"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="clear: both"></div>

          <div style="float: left">
            <el-form-item label="信息类型" prop="name">
              <el-select v-model="ruleForm.region" placeholder="请选择信息类型">
                <el-option label="涉稳" value="involving"></el-option>
                <el-option label="其他" value="others"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="float: left">
            <el-form-item label="信息类型" prop="name">
              <el-select v-model="ruleForm.region" placeholder="请选择信息类型">
                <el-option label="涉军人员" value="man"></el-option>
                <el-option label="其他" value="others"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="float: left">
            <el-form-item label="信息细类" prop="name">
              <el-select v-model="ruleForm.region" placeholder="请选择信息细类">
                <el-option label="无" value="none"></el-option>
                <el-option label="其他" value="others"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="clear: both"></div>

          <div style="float: left">
            <el-form-item label="编辑人" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入编辑人"></el-input>
            </el-form-item>
          </div>
          <div style="float: left">
            <el-form-item label="审核人" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入审核人"></el-input>
            </el-form-item>
          </div>
          <div style="float: left">
            <el-form-item label="签发人" prop="name">
              <el-input v-model="ruleForm.name" placeholder="签发人"></el-input>
            </el-form-item>
          </div>
          <div style="clear: both"></div>

          <el-form-item label="信息标签" prop="name">
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
          </el-form-item>
          <el-form-item label="核查人员" prop="name">
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
          </el-form-item>
          <el-form-item label="附件" prop="name">
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
          </el-form-item>

          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="上报" name="first">
              <div style="float: left">
                <el-form-item label="信息级别:" prop="name">
                  <el-select v-model="ruleForm.region" placeholder="请选择信息级别">
                    <el-option label="一级" value="first"></el-option>
                    <el-option label="二级" value="second"></el-option>
                    <el-option label="三级" value="third"></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div style="float: left">
                <el-form-item label="值班长:" prop="name">
                  <el-input v-model="ruleForm.name" placeholder="请输入值班长"></el-input>
                </el-form-item>
              </div>
              <div style="float: left">
                <el-form-item label="值班员:" prop="name">
                  <el-input v-model="ruleForm.name" placeholder="值班员"></el-input>
                </el-form-item>
              </div>
              <div style="clear: both"></div>

              <el-form-item label="拟定意见:" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入拟定意见"></el-input>
              </el-form-item>

              <el-form-item label="审批流程:" prop="desc">
                <el-steps direction="vertical" :active="1">
                  <el-step title="指挥长" icon="el-icon-picture" description="2个审批">
                  </el-step>
                  <el-step title="领导" icon="el-icon-picture" description="请添加领导">
                  </el-step>
                </el-steps>
              </el-form-item>

              <el-form-item label="调度流程:" prop="name">
                <el-tag
                  :key="tag"
                  v-for="tag in dynamicTags"
                  closable
                  :disable-transitions="false"
                  @close="handleClose(tag)">
                  {{tag}}
                </el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="inputVisible"
                  v-model="inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm"
                  @blur="handleInputConfirm"
                >
                </el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
              </el-form-item>

            </el-tab-pane>
            <el-tab-pane label="下发" name="second">
              我是下发
            </el-tab-pane>
          </el-tabs>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="openA">取消</el-button>
          <el-button type="primary" @click="openB">下发</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import All from "./TabItem/All";
import Deal from "./TabItem/Deal";
import Follow from "./TabItem/Follow";
import Over from "./TabItem/Over";

import TabControl from "../../components/content/tabControl/TabControl";
import GoodList from "./GoodList";

export default {
  name: "HomeNews",
  components:{
    TabControl,
    GoodList,
    All,
    Deal,
    Follow,
    Over
  },
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: '',
      activeName: 'second',
      Index: 0,
      dialogFormVisible: false,
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    tabClick(index){
      switch (index) {
        case 0:
          this.Index = 0;
          break;
        case 1:
          this.Index = 1;
          break;
        case 2:
          this.Index = 2;
          break;
        case 3:
          this.Index = 3;
          break;
        default:
          break;
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    openA() {
      const h = this.$createElement;

      this.$notify({
        title: '取消事件',
        message: h('i', { style: 'color: teal'}, '取消成功！')
      });

      this.dialogFormVisible = false
    },
    openB() {
      const s = this.$createElement;

      this.$notify({
        title: '下发事件',
        message: s('i', { style: 'color: teal'}, '下发成功！')
      });

      this.dialogFormVisible = false
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
}
</script>

<style scoped>
.tab-control{
  position: sticky;
  top: 44px;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
