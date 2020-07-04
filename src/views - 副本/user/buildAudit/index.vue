<!--防治单位管理-->
<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-plus"
        @click="handleCreate"
      >添加</el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-delete"
        @click="handleCreate"
      >删除</el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-download"
        @click="handleCreate"
      >导入</el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-upload2"
        @click="handleCreate"
      >导出EXCEL</el-button>
      <el-select clearable v-model="temp.state" placeholder="请选择" class="filter-item" style="margin-left: 10px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      @selection-change="handleSelectionChange"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" type="selection" width="55"></el-table-column>
      <el-table-column align="center" label="序号" width="80">
        <template slot-scope="scope">
          <span>{{ scope.$index+1 }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="申报日期">
        <template slot-scope="scope">{{ scope.row.create }}</template>
      </el-table-column>
      <el-table-column align="center" label="类型">
        <template slot-scope="scope">{{ scope.row.userType }}</template>
      </el-table-column>
      <el-table-column align="center" label="用户ID">
        <template slot-scope="scope">{{ scope.row.userId }}</template>
      </el-table-column>
      <el-table-column align="center" label="手机号">
        <template slot-scope="scope">{{ scope.row.phone }}</template>
      </el-table-column>
      <el-table-column align="center" label="统一社会信用代码">
        <template slot-scope="scope">{{ scope.row.number }}</template>
      </el-table-column>
      <el-table-column align="center" label="单位名称">
        <template slot-scope="scope">{{ scope.row.aname }}</template>
      </el-table-column>
      <el-table-column align="center" label="单位性质">
        <template slot-scope="scope">{{ scope.row.cType }}</template>
      </el-table-column>
      <el-table-column align="center" label="法人代表">
        <template slot-scope="scope">{{ scope.row.fr }}</template>
      </el-table-column>
      <el-table-column align="center" label="联系人">
        <template slot-scope="scope">{{ scope.row.lxr }}</template>
      </el-table-column>
      <el-table-column align="center" label="联系人电话">
        <template slot-scope="scope">{{ scope.row.lxrPhone }}</template>
      </el-table-column>
      <el-table-column align="center" label="审核状态">
        <template slot-scope="scope">{{ scope.row.type }}</template>
      </el-table-column>
      <el-table-column align="center" label="审核意见">
        <template slot-scope="scope">{{ scope.row.remark }}</template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="200" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="success" size="mini" @click="handleUpdate(row)">修改</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(row,$index)">删除</el-button>
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
import { getList } from "@/api/user/buildAudit";
export default {
  data() {
    return {
      options: [
        {
          label: "待审核",
          value: 0
        },
        {
          label: "审核通过",
          value: 1
        },
        {
          label: "审核失败",
          value: 2
        },
        {
          label: "全部",
          value: 3
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
      getList().then(response => {
        this.list = response.data.items;
        this.listLoading = false;
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
