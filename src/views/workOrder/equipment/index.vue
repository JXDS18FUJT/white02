<!--设备维护工单管理-->
<!--灭治回访工单管理-->
<!--新建施工工单管理-->
<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
            <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">新建派工</el-button>
      <!-- <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">添加</el-button> -->
      <!-- <el-select
        clearable
        v-model="temp.state"
        placeholder="请选择"
        class="filter-item"
        style="margin-left: 10px;"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select> -->
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="80">
        <template slot-scope="scope">
          <span>{{ scope.$index+1 }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="创建日期">
        <template slot-scope="scope">{{ scope.row.time }}</template>
      </el-table-column>
      <el-table-column align="center" label="上下午">
        <template slot-scope="scope">{{ scope.row.beforeAfternoon }}</template>
      </el-table-column>
      <el-table-column align="center" label="工单类型">
        <template slot-scope="scope">设备维护</template>
      </el-table-column>
      <el-table-column align="center" label="工单编号">
        <template slot-scope="scope">{{ scope.row.workOrderCode }}</template>
      </el-table-column>
      <el-table-column align="center" label="受理编号">
        <template slot-scope="scope">{{ scope.row.acceptanceNumber }}</template>
      </el-table-column>
      <el-table-column align="center" label="施工管理员">
        <template slot-scope="scope">{{ scope.row.constructionUser }}</template>
      </el-table-column>
      <el-table-column align="center" label="工程名称">
        <template slot-scope="scope">{{ scope.row.project }}</template>
      </el-table-column>
      <el-table-column align="center" label="楼栋数">
        <template slot-scope="scope">{{ scope.row.floorId }}</template>
      </el-table-column>
      <!-- <el-table-column align="center" label="施工方案">
        <template slot-scope="scope">{{ scope.row.constructionPlan}}</template>
      </el-table-column>
        <el-table-column align="center" label="施工项目">
        <template slot-scope="scope">{{ scope.row.constructionProject}}</template>
      </el-table-column> -->
              <el-table-column align="center" label="状态">
        <template slot-scope="scope">{{ scope.row.status}}</template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="300" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="success" size="mini" @click="handleUpdate(row)">查看</el-button>
          <el-button type="success" size="mini" @click="handleUpdate(row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <div style="text-align: center;" v-show="total > 0">
      <pagination
        :total="total"
        :page.sync="params.pageIndex"
        :limit.sync="params.pageSize"
        @pagination="fetchData"
      />
    </div>-->
  </div>
</template>
<script>
import { getOrderMangetotal } from "@/api/orderMange/total";
export default {
  data() {
    return {
      options: [
        {
          label: "待分派",
          value: 0
        },
        {
          label: "已分派",
          value: 1
        },
        {
          label: "全部",
          value: 1
        }
      ],
      list: null,
      listLoading: false,
      temp: {
        state: ""
      },
      textMap: {
        update: "修改",
        create: "添加"
      },
      dialogStatus: "",
      dialogFormVisible: false,
      rules: {}
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    // 初始化数据
    fetchData() {
      this.listLoading = true;
    getOrderMangetotal().then(response => {
          console.log(response)
        this.list = response.data.items;
        this.listLoading = false;
      }).catch(res=>{
          console.log(res)
      });
    },
    //搜索
    handleFilter() {},
    //初始化
    resetTemp() {
      this.temp = {};
    },
    //表格多选操作
    handleSelectionChange() {},
    //添加
    handleCreate() {
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    //确定添加
    createData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
        }
      });
    },
    //修改
    handleUpdate(row) {
      this.temp = Object.assign({}, row);
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    //确定修改
    updateData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
        }
      });
    },
    //确定删除
    handleDelete(row, index) {
      this.$confirm("是否删除该条记录?", "警告", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {})
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>
