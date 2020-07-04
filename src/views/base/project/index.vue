<!--工程管理-->
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
      <el-table-column align="center" label="工程ID">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column align="center" label="创建日期">
        <template slot-scope="scope">{{ scope.row.create }}</template>
      </el-table-column>
      <el-table-column align="center" label="工程名称">
        <template slot-scope="scope">{{ scope.row.gcmc }}</template>
      </el-table-column>
      <el-table-column align="center" label="工程地址">
        <template slot-scope="scope">{{ scope.row.gcdz }}</template>
      </el-table-column>
      <el-table-column align="center" label="幢数">
        <template slot-scope="scope">{{ scope.row.num1 }}</template>
      </el-table-column>
      <el-table-column align="center" label="总建筑面积">
        <template slot-scope="scope">{{ scope.row.num2 }}</template>
      </el-table-column>
      <el-table-column align="center" label="总底层面积">
        <template slot-scope="scope">{{ scope.row.num3 }}</template>
      </el-table-column>
      <el-table-column align="center" label="建设单位">
        <template slot-scope="scope">{{ scope.row.dw1 }}</template>
      </el-table-column>
      <el-table-column align="center" label="监理单位">
        <template slot-scope="scope">{{ scope.row.dw2 }}</template>
      </el-table-column>
      <el-table-column align="center" label="承建单位">
        <template slot-scope="scope">{{ scope.row.dw3 }}</template>
      </el-table-column>
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status == 0">启用</el-tag>
          <el-tag type="danger" v-else>禁用</el-tag>
        </template>
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
    </div> -->
  </div>
</template>
<script>
import {getList} from '@/api/base/project'
export default {
  data() {
    return {
      list: null,
      listLoading: false,
      temp: {
        
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
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    //搜索
    handleFilter() {},
    //初始化
    resetTemp() {
      this.temp = {
        
      };
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
        .then(async () => {
          
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>
