<!--白蚁灭治-->
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
      <el-select
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
      </el-select>
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
      <el-table-column align="center" label="申报日期">
        <template slot-scope="scope">{{ scope.row.time }}</template>
      </el-table-column>
      <el-table-column align="center" label="来源">
        <template slot-scope="scope">{{ scope.row.source1 }}</template>
      </el-table-column>
      <el-table-column align="center" label="受理单号">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column align="center" label="申报类型">
        <template slot-scope="scope">{{ scope.row.applyType }}</template>
      </el-table-column>
      <el-table-column align="center" label="分派部门状态">
        <template slot-scope="scope">{{ scope.row.fp }}</template>
      </el-table-column>
      <el-table-column align="center" label="分派部门">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column align="center" label="建设单位ID">
        <template slot-scope="scope">{{ scope.row.buildId }}</template>
      </el-table-column>
      <el-table-column align="center" label="建设单位名称">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column align="center" label="工程ID">
        <template slot-scope="scope">{{ scope.row.objId }}</template>
      </el-table-column>
      <el-table-column align="center" label="工程名称">
        <template slot-scope="scope">{{ scope.row.objName }}</template>
      </el-table-column>
      <el-table-column align="center" label="工程地址">
        <template slot-scope="scope">{{ scope.row.objAddress }}</template>
      </el-table-column>
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">{{ scope.row.state }}</template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="300" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="success" size="mini" @click="handleUpdate(row)">修改</el-button>
          <el-button type="success" size="mini" @click="handleUpdate(row)">分派部门</el-button>
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
import { getList } from "@/api/material/newAccept";
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
