<template>
  <div style="overflow-y: scroll; height: 600px">
    <div style="position: fixed; right: 20px; top: 200px">
      <div style="background-color: forestgreen; width: 480px; height: 240px; float: left" @click="drawer = true">
        <div style="padding-left: 15px; padding-top: 10px">
          <div style="font-size: 20px; color: #888888; float: left">事件摘要：</div>
          <div style="font-size: 20px; color: black; float: left">测试内容</div>
          <div style="padding-right: 5px; color: #888888; font-size: 18px; padding-left: 350px">
            08-13 09:53
          </div>
        </div>
        <div style="clear: both"></div>
        <div style="padding-left: 15px; padding-top: 10px">
          <div style="font-size: 20px; color: #888888; float: left">类　　型：</div>
          <div style="font-size: 20px; color: black; float: left">系统测试</div>
          <div style="padding-right: 5px; color: #888888; font-size: 24px; padding-left: 420px">
            <i class="el-icon-star-off"></i>
          </div>
        </div>
        <div style="clear: both"></div>
        <div style="padding-left: 15px; padding-top: 10px">
          <div style="font-size: 20px; color: #888888; float: left">标　　题：</div>
          <div style="font-size: 20px; color: black; float: left">测试</div>
        </div>
        <div style="clear: both"></div>
        <div style="padding-left: 15px; padding-top: 10px">
          <div style="font-size: 20px; color: #888888; float: left">反馈要求：</div>
          <div style="width: 240px; background-color: #4877e8; font-size: 20px; color: black; float: left">需于2020-8-13 18:00:00前反馈</div>
        </div>
        <div style="clear: both"></div>
        <div style="padding-top: 10px; padding-left: 370px">
          <el-button round>已签收</el-button>
        </div>
      </div>
      <div style="float: left; margin-left: 7px">
        <img slot="item-icon" src="../../../assets/img/tabbar/poss.svg" alt="" style="width: 80px; height: 80px">
      </div>
    </div>

    <div style="position: fixed; left: 443px; top: 480px">
      <div style="float: left; margin-left: 7px">
        <img slot="item-icon" src="../../../assets/img/tabbar/poss.svg" alt="" style="width: 80px; height: 80px">
      </div>

      <div style="background-color: forestgreen; width: 480px; height: 310px; float: left">
        <div style="border-bottom: 1px dotted black">
          <div style="padding-left: 15px; padding-top: 10px">
            <div style="font-size: 20px; color: #888888; float: left">反馈内容：</div>
            <div style="font-size: 20px; color: black; float: left">系统测试</div>
            <div style="padding-right: 5px; color: #888888; font-size: 18px; padding-left: 350px">
              08-13 09:53
            </div>
          </div>
          <div style="clear: both"></div>
          <div style="padding-left: 15px; padding-top: 10px">
            <div style="font-size: 20px; color: #888888; float: left">人员反馈：</div>
            <div style="font-size: 20px; color: black; float: left">遍历已稳控</div>
            <div style="padding-right: 5px; color: #888888; font-size: 24px; padding-left: 420px">
              <i class="el-icon-star-off"></i>
            </div>
          </div>
        </div>
        <div style="clear: both"></div>

        <div style="padding-left: 15px; padding-top: 10px">
          <div style="font-size: 20px; color: #888888; float: left">事件摘要：</div>
          <div style="font-size: 20px; float: left; color: #888888;">测试内容</div>
          <div style="padding-right: 5px; color: #888888; font-size: 18px; padding-left: 350px">
            08-13 09:53
          </div>
        </div>

        <div style="clear: both"></div>
        <div style="padding-left: 15px; padding-top: 10px">
          <div style="font-size: 20px; color: #888888; float: left">类　　型：</div>
          <div style="font-size: 20px; float: left; color: #888888;">系统测试</div>
        </div>
        <div style="clear: both"></div>
        <div style="padding-left: 15px; padding-top: 10px">
          <div style="font-size: 20px; color: #888888; float: left;">标　　题：</div>
          <div style="font-size: 20px; float: left; color: #888888;">测试</div>
        </div>
        <div style="clear: both"></div>
        <div style="padding-left: 15px; padding-top: 10px">
          <div style="font-size: 20px; color: #888888; float: left">反馈要求：</div>
          <div style="width: 240px; background-color: #4877e8; font-size: 20px; float: left; color: #888888;">需于2020-8-13 18:00:00前反馈</div>
        </div>
        <div style="clear: both"></div>
        <div style="padding-top: 10px; padding-left: 370px">
          <el-button round style="color: red">待反馈</el-button>
        </div>
      </div>
    </div>

    <div style="position: fixed; right: 20px; top: 730px">
      <div style="background-color: forestgreen; width: 480px; height: 240px; float: left">
        <div style="padding-left: 15px; padding-top: 10px">
          <div style="font-size: 20px; color: #888888; float: left">事件摘要：</div>
          <div style="font-size: 20px; color: black; float: left">测试内容</div>
          <div style="padding-right: 5px; color: #888888; font-size: 18px; padding-left: 350px">
            08-13 09:53
          </div>
        </div>
        <div style="clear: both"></div>
        <div style="padding-left: 15px; padding-top: 10px">
          <div style="font-size: 20px; color: #888888; float: left">类　　型：</div>
          <div style="font-size: 20px; color: black; float: left">系统测试</div>
          <div style="padding-right: 5px; color: #888888; font-size: 24px; padding-left: 420px">
            <i class="el-icon-star-off"></i>
          </div>
        </div>
        <div style="clear: both"></div>
        <div style="padding-left: 15px; padding-top: 10px">
          <div style="font-size: 20px; color: #888888; float: left">标　　题：</div>
          <div style="font-size: 20px; color: black; float: left">测试</div>
        </div>
        <div style="clear: both"></div>
        <div style="padding-left: 15px; padding-top: 10px">
          <div style="font-size: 20px; color: #888888; float: left">反馈要求：</div>
          <div style="width: 240px; background-color: #4877e8; font-size: 20px; color: black; float: left">需于2020-8-13 18:00:00前反馈</div>
        </div>
        <div style="clear: both"></div>
        <div style="padding-top: 10px; padding-left: 370px">
          <el-button round>已签收</el-button>
        </div>
      </div>
      <div style="float: left; margin-left: 7px">
        <img slot="item-icon" src="../../../assets/img/tabbar/poss.svg" alt="" style="width: 80px; height: 80px">
      </div>
    </div>

    <div style="position: fixed; left: 443px; top: 1010px">
      <div style="float: left; margin-left: 7px">
        <img slot="item-icon" src="../../../assets/img/tabbar/poss.svg" alt="" style="width: 80px; height: 80px">
      </div>
      <div style="background-color: forestgreen; width: 480px; height: 240px; float: left">
        <div style="padding-left: 15px; padding-top: 10px">
          <div style="font-size: 20px; color: #888888; float: left">事件摘要：</div>
          <div style="font-size: 20px; color: black; float: left">测试内容</div>
          <div style="padding-right: 5px; color: #888888; font-size: 18px; padding-left: 350px">
            08-13 09:53
          </div>
        </div>
        <div style="clear: both"></div>
        <div style="padding-left: 15px; padding-top: 10px">
          <div style="font-size: 20px; color: #888888; float: left">类　　型：</div>
          <div style="font-size: 20px; color: black; float: left">系统测试</div>
          <div style="padding-right: 5px; color: #888888; font-size: 24px; padding-left: 420px">
            <i class="el-icon-star-off"></i>
          </div>
        </div>
        <div style="clear: both"></div>
        <div style="padding-left: 15px; padding-top: 10px">
          <div style="font-size: 20px; color: #888888; float: left">标　　题：</div>
          <div style="font-size: 20px; color: black; float: left">测试</div>
        </div>
        <div style="clear: both"></div>
        <div style="padding-left: 15px; padding-top: 10px">
          <div style="font-size: 20px; color: #888888; float: left">反馈要求：</div>
          <div style="width: 240px; background-color: #4877e8; font-size: 20px; color: black; float: left">需于2020-8-13 18:00:00前反馈</div>
        </div>
        <div style="clear: both"></div>
        <div style="padding-top: 10px; padding-left: 370px">
          <el-button round>已签收</el-button>
        </div>
      </div>
    </div>

    <div>
      <el-drawer
        append-to-body="false"
        title="A市局下发的通报"
        :visible.sync="drawer"
        :direction="direction"
        size="1"
        :before-close="handleClose">
        <div style=" height: 18px; line-height: 18px; font-size: 18px; margin-top: -20px; margin-left: 20px">
          等待A县局处理
        </div>
        <div style=" margin-top: 10px; width: 480px; height: 310px; float: left; border-bottom: 1px dotted #888888; border-top: 1px dotted #888888">
          <div style="padding-left: 15px; padding-top: 10px">
            <div style="font-size: 20px; color: #888888; float: left">信息编号：</div>
            <div style="font-size: 20px; color: #888888; float: left">312464846</div>
            <div style="font-size: 20px; color: #888888; float: left; padding-left: 15px">
              <i class="el-icon-document"></i>
            </div>
          </div>
          <div style="clear: both"></div>
          <div style="padding-left: 15px; padding-top: 10px">
            <div style="font-size: 20px; color: #888888; float: left">信息标题：</div>
            <div style="font-size: 20px; color: #888888; float: left">测试</div>
          </div>
          <div style="clear: both"></div>
          <div style="padding-left: 15px; padding-top: 10px" >
            <div style="font-size: 20px; color: #888888; float: left">信息内容：</div>
            <div style="font-size: 20px; color: #888888; float: left">测试内容</div>
          </div>
          <div style="clear: both"></div>
          <div style="padding-left: 15px; padding-top: 10px">
            <div style="font-size: 20px; color: #888888; float: left">信息类型：</div>
            <div style="width: 240px; font-size: 20px; color: #888888; float: left">系统测试</div>
          </div>
          <div style="clear: both"></div>

          <div style="padding-left: 15px; padding-top: 10px">
            <div style="font-size: 20px; color: #888888; float: left">来　　源：</div>
            <div style="width: 240px; font-size: 20px; color: #888888; float: left">B单位</div>
          </div>
          <div style="clear: both"></div>

          <div style="padding-left: 15px; padding-top: 10px">
            <div style="font-size: 20px; color: #888888; float: left">标　　签：</div>
            <div style="width: 240px; font-size: 20px; color: #888888; float: left">林俊杰</div>
          </div>
          <div style="clear: both"></div>

          <div style="padding-left: 15px; padding-top: 10px">
            <div style="font-size: 20px; color: #888888; float: left">附　　件：</div>
            <div style="width: 240px; font-size: 20px; color: #888888; float: left">附件1</div>
          </div>
          <div style="clear: both"></div>

          <div style="padding-left: 15px; padding-top: 10px">
            <div style="font-size: 20px; color: #888888; float: left">核查人数：</div>
            <div style="width: 240px; font-size: 20px; color: #888888; float: left">1人</div>
          </div>
          <div style="clear: both"></div>

        </div>
        <div style="clear: both"></div>
        <div style=" margin-left: 20px; margin-top: 10px; font-size: 20px">
          需求：需于2020-8-13 18:00:00前反馈
        </div>
        <div style="background-color: gainsboro; height: 600px; padding-top: 10px; margin-top: 10px">
          <div style="margin-left: 30px; border-radius: 20px; background-color: white; width: 420px; height: 590px;">
            <div style="height: 550px; margin-left: 20px; padding-top: 20px; overflow: scroll">
              <el-steps direction="vertical" :active="6">
                <el-step title="下发通报" icon="el-icon-picture" description="A市局">
                </el-step>
                <el-step title="已签收" icon="el-icon-picture" description="本单位">
                </el-step>
                <el-step title="已处理" icon="el-icon-picture" description="本单位"></el-step>
                <el-step icon="el-icon-picture" description="2人审批">
                </el-step>
                <el-step title="甲：如拟" icon="el-icon-picture" status="success">
                </el-step>
                <el-step title="乙：未审批" icon="el-icon-picture" status="error"></el-step>
                <el-step icon="el-icon-picture" description="1个审批">
                </el-step>
                <el-step title="丙：如拟" icon="el-icon-picture">
                </el-step>
                <el-step icon="el-icon-picture" description="2个单位"></el-step>
                <el-step title="下发通报" icon="el-icon-picture" description="A市局">
                </el-step>
                <el-step title="已签收" icon="el-icon-picture" description="本单位">
                </el-step>
              </el-steps>
            </div>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="openA">处理</el-button>
          <el-button type="primary" @click="openB">反馈</el-button>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: "All",
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      dialogFormVisible: false
    };
  },
  methods: {
    openA() {
      const h = this.$createElement;

      this.$notify({
        title: '处理事件',
        message: h('i', { style: 'color: teal'}, '处理成功！')
      });

      this.dialogFormVisible = false
    },
    openB() {
      const s = this.$createElement;

      this.$notify({
        title: '反馈事件',
        message: s('i', { style: 'color: teal'}, '反馈成功！')
      });

      this.dialogFormVisible = false
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
}
</script>

<style scoped>

</style>
