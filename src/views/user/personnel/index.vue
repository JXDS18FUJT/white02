<!--人员管理-->
<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
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
      <el-table-column align="center" label="人员ID">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column align="center" label="注册日期">
        <template slot-scope="scope">{{ scope.row.create }}</template>
      </el-table-column>
      <el-table-column align="center" label="用户ID">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column align="center" label="身份">
        <template slot-scope="scope">{{ scope.row.userType }}</template>
      </el-table-column>
      <el-table-column align="center" label="openid">
        <template slot-scope="scope">{{ scope.row.openId }}</template>
      </el-table-column>
      <el-table-column align="center" label="手机号">
        <template slot-scope="scope">{{ scope.row.phone }}</template>
      </el-table-column>
      <el-table-column align="center" label="昵称">
        <template slot-scope="scope">{{ scope.row.nick }}</template>
      </el-table-column>
      <el-table-column align="center" label="姓名">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column align="center" label="性别">
        <template slot-scope="scope">{{ scope.row.sex }}</template>
      </el-table-column>
      <el-table-column align="center" label="出生年月">
        <template slot-scope="scope">{{ scope.row.birthday }}</template>
      </el-table-column>
      <el-table-column align="center" label="联系地址">
        <template slot-scope="scope">{{ scope.row.address }}</template>
      </el-table-column>
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status == 0">启用</el-tag>
          <el-tag type="danger" v-else>禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="100" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
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
    </div> -->
  </div>
</template>
<script>
import {getList} from '@/api/user/personnel'
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
