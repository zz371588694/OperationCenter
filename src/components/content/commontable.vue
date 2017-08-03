<template>
	<div class="container">
		<h2>XX配置</h2>
		<div class="operation">
			<label for="">关键字</label>
			<el-input placeholder="请输入关键字"></el-input>
			<label for="">值</label>
			<el-input placeholder="请输入值"></el-input>
			<el-button type="info">查询</el-button>
			<el-button type="info">添加</el-button>
			<el-button type="danger">删除</el-button>
		</div>
		<div class="table">
			<el-table :data="tableData" border style="width: 100%" stripe>
				<el-table-column type="selection">
				</el-table-column>
				<el-table-column v-for="head in tableHead" :prop="head.prop" :label="head.label"></el-table-column>
				<el-table-column label="操作" width="150">
					<template scope="scope">
						<el-button size="small" @click="dialogFormVisible = true">编辑</el-button>
						<el-button size="small" type="danger">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	 export default {
	 	props:{
	 		remoteURL:String,
	 		default(){
	 			return ''
	 		}
	 	},
	 	
	 	created(){
	 		this.$axios.get(this.remoteURL)
	 		.then((response)=>{
	 			console.log(response);
	 			this.tableHead = response.data.data.TableHead;
	 			this.tableData = response.data.data.TableData;
	 		})
	 		.catch((error)=>{
	 			this.$alert('请求失败','错误信息',{
	  				confirmButtonText:'确定'
	  			})
	 		})
	 	},
	    data() {
	        return {
			       tableHead:[],
			       tableData: []
	        }
      }
  	}
</script>

<style scope>
	.container .el-input{
		width:200px;
	}
	
	.container h2{
		height: 30px;
		font-weight: bold;
	}
	
	.container .table{
		margin-top:20px;
	}
</style>