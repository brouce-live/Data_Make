<template>
  <div style="background-color: gainsboro">
    <div style="background-color: white; height: 70px;">
      <router-link to="/build">
        <i class="el-icon-arrow-left" style="font-size: 40px; padding-top: 15px; padding-left: 5px; float: left"></i>
      </router-link>
      <span style="margin-top: 10px; height: 44px; line-height: 44px; font-size: 24px; float: left">发起指令</span>
    </div>
    <div style="clear: both"></div>

    <div style="display: flex; flex-direction: row; margin-top: 3px">
      <div style="width: 60%; height: 100%; background-color: papayawhip">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="90px" style="padding-top: 20px; width: 1050px" class="demo-ruleForm">

          <el-form-item label="指令标题" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入指令标题"></el-input>
          </el-form-item>

          <el-form-item label="指令内容" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入指令内容"></el-input>
          </el-form-item>

          <div style="float: left">
            <el-form-item label="指令来源" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入指令来源"></el-input>
            </el-form-item>
          </div>
          <div style="float: left">
            <el-form-item label="指令类别" prop="region">
              <el-select v-model="ruleForm.region" placeholder="一级类型/二级类型/三级类型/...">
                <el-option label="一级类型" value="first"></el-option>
                <el-option label="二级类型" value="second"></el-option>
                <el-option label="三级类型" value="third"></el-option>
                <el-option label="其他" value="others"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="clear: both"></div>

          <div style="float: left">
            <el-form-item label="信息期号" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入信息期号"></el-input>
            </el-form-item>
          </div>
          <div style="float: left">
            <el-form-item label="预警时间" prop="name">
              <el-date-picker
                v-model="value"
                type="datetime"
                placeholder="选择日期时间"
                default-time="12:00:00">
              </el-date-picker>
            </el-form-item>
          </div>
          <div style="float: left; margin-left: 20px">
            <el-radio v-model="radio" label="2" border>无明确预警时间</el-radio>
          </div>
          <div style="clear: both"></div>

          <div style="float: left">
            <el-form-item label="指令级别" prop="name">
              <el-select v-model="ruleForm.region" placeholder="请选择指令级别">
                <el-option label="一级" value="first"></el-option>
                <el-option label="二级" value="second"></el-option>
                <el-option label="三级" value="third"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="float: left">
            <el-form-item label="联系人" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入联系人"></el-input>
            </el-form-item>
          </div>
          <div style="float: left">
            <el-form-item label="联系电话" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入联系电话"></el-input>
            </el-form-item>
          </div>
          <div style="clear: both"></div>

          <el-form-item label="备注内容">
            <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入备注内容"></el-input>
          </el-form-item>

          <el-form-item label="指令附件" prop="name">
            <el-upload
              class="upload-demo"
              style="width: 370px"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="审批流程" prop="desc">
            <el-steps direction="vertical" :active="2">
              <el-step title="审批人" icon="el-icon-picture" description="1人审批">
              </el-step>
              <el-step title="签发人" icon="el-icon-picture" description="1人签发">
              </el-step>
            </el-steps>
          </el-form-item>
          <el-form-item label="调度流程" prop="name">
            <el-tag
              :key="tag1"
              v-for="tag1 in dynamicTags2"
              closable
              :disable-transitions="false"
              @close="handleClose1(tag1)">
              {{tag1}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible1"
              v-model="inputValue1"
              ref="saveTagInput1"
              size="small"
              @keyup.enter.native="handleInputConfirm1"
              @blur="handleInputConfirm1"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput1">+ 添加</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" style="width: 300px; margin-left: 300px; font-size: 24px" round>提交</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div style="margin-left: 0.5%; width: 39.5%; height: 100%; background-color: #ffffff;">
        <div style="height: 70px; border-bottom: #888888 1px solid">
          <div style="padding-left: 15px; padding-top: 15px; float: left">
            <img src="../../assets/icons/assist.svg" alt="" style="width: 40px; height: 40px" />
          </div>
          <div style="float: left; font-size: 24px; height: 70px; line-height: 70px; margin-left: 10px;">
            智能辅助
          </div>
        </div>
        <div>
          <ul style="padding-top: 10px;">
            <li>待开发1</li>
            <li>待开发2</li>
            <li>待开发3</li>
            <li>待开发4</li>
            <li>待开发5</li>
            <li>待开发6</li>
            <li>待开发7</li>
            <li>待开发8</li>
            <li>待开发9</li>
            <li>待开发10</li>
            <li>待开发11</li>
            <li>待开发12</li>
            <li>待开发13</li>
            <li>待开发14</li>
            <li>待开发15</li>
            <li>待开发16</li>
            <li>待开发17</li>
            <li>待开发18</li>
            <li>待开发19</li>
            <li>待开发20</li>
            <li>待开发21</li>
            <li>待开发22</li>
            <li>待开发23</li>
            <li>待开发24</li>
            <li>待开发25</li>
            <li>待开发26</li>
            <li>待开发27</li>
            <li>待开发28</li>
            <li>待开发29</li>
            <li>待开发30</li>
            <li>待开发31</li>
            <li>待开发32</li>
            <li>待开发33</li>
            <li>待开发34</li>
            <li>待开发35</li>
            <li>待开发36</li>
            <li>待开发37</li>
            <li>待开发38</li>
            <li>待开发39</li>
            <li>待开发40</li>
            <li>待开发41</li>
            <li>待开发42</li>
            <li>待开发43</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Instruct",
  data() {
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      List: [],
      value: '',
      radio: '1',
      dynamicTags: ['万达广场', '秋水广场'],
      dynamicTags2: [],
      inputVisible: false,
      inputValue: '',
      inputVisible1: false,
      inputValue1: '',
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
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
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    handleClose1(tag1) {
      this.dynamicTags2.splice(this.dynamicTags2.indexOf(tag1), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    showInput1() {
      this.inputVisible1 = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput1.$refs.input1.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    handleInputConfirm1() {
      let inputValue1 = this.inputValue1;
      if (inputValue1) {
        this.dynamicTags2.push(inputValue1);
      }
      this.inputVisible1 = false;
      this.inputValue1 = '';
    }
  }
}
</script>

<style scoped>

</style>
