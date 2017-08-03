<template>
	<div class="container">
		<h2>XX配置</h2>
		<div class="operation">
			<label for="">关键字</label>
			<el-input placeholder="请输入关键字"></el-input>
			<label for="">值</label>
			<el-input placeholder="请输入值"></el-input>
			<el-button type="primary">查询</el-button>
			<el-button type="primary">添加</el-button>
			<el-button type="danger">删除</el-button>
		</div>
		<div class="table">
			<el-table :data="tableData" border style="width: 100%" stripe>
				<el-table-column type="selection">
				</el-table-column>
				<el-table-column prop="name" label="名称" sortable>
				</el-table-column>
				<el-table-column label="厂商" prop="producer">
				</el-table-column>
				<el-table-column label="轨道长度" prop="tracklength">
				</el-table-column>
				<el-table-column label="IP地址" prop="ip" width="120">
				</el-table-column>
				<el-table-column label="端口号" prop="port">
				</el-table-column>
				<el-table-column label="横向地址" prop="horizontalAddress">
				</el-table-column>
				<el-table-column label="纵向地址" prop="verticalAddress">
				</el-table-column>
				<el-table-column label="是否可用" prop="enable">
				</el-table-column>
				<el-table-column label="状态" prop="status">
				</el-table-column>
				<el-table-column label="备注" prop="remark">
				</el-table-column>
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
	import dialog from '../dialog/formdialog'
	 export default {
	 	components:{
	 		formDialog:dialog
	 	},
	    data() {
	        return {
	        	  	dialogTableVisible: false,
			        dialogFormVisible: false,
			        form: {
			          name: '',
			          region: '',
			          date1: '',
			          date2: '',
			          delivery: false,
			          type: [],
			          resource: '',
			          desc: ''
			        },
			        formLabelWidth: '120px',
			          tableData: [
			          	{
			          		name:'机器人',
			          		producer:'齐丰',
			          		tracklength:'35',
			          		ip:'10.10.10.113',
			          		port:'3084',
			          		horizontalAddress:'3',
			          		verticalAddress:'2',
			          		enable:'是',
			          		status:'未知',
			          		remark:''
			          	},
			          	{
			          		name:'机器人',
			          		producer:'齐丰',
			          		tracklength:'35',
			          		ip:'10.10.10.113',
			          		port:'3084',
			          		horizontalAddress:'3',
			          		verticalAddress:'2',
			          		enable:'是',
			          		status:'未知',
			          		remark:''
			          	},
			          	{
			          		name:'机器人',
			          		producer:'齐丰',
			          		tracklength:'35',
			          		ip:'10.10.10.113',
			          		port:'3084',
			          		horizontalAddress:'3',
			          		verticalAddress:'2',
			          		enable:'是',
			          		status:'未知',
			          		remark:''
			          	},
			          	{
			          		name:'机器人',
			          		producer:'齐丰',
			          		tracklength:'35',
			          		ip:'10.10.10.113',
			          		port:'3084',
			          		horizontalAddress:'3',
			          		verticalAddress:'2',
			          		enable:'是',
			          		status:'未知',
			          		remark:''
			          	},
			          	{
			          		name:'机器人',
			          		producer:'齐丰',
			          		tracklength:'35',
			          		ip:'10.10.10.113',
			          		port:'3084',
			          		horizontalAddress:'3',
			          		verticalAddress:'2',
			          		enable:'是',
			          		status:'未知',
			          		remark:''
			          	},
			          	{
			          		name:'机器人',
			          		producer:'齐丰',
			          		tracklength:'35',
			          		ip:'10.10.10.113',
			          		port:'3084',
			          		horizontalAddress:'3',
			          		verticalAddress:'2',
			          		enable:'是',
			          		status:'未知',
			          		remark:''
			          	},
			          	{
			          		name:'机器人',
			          		producer:'齐丰',
			          		tracklength:'35',
			          		ip:'10.10.10.113',
			          		port:'3084',
			          		horizontalAddress:'3',
			          		verticalAddress:'2',
			          		enable:'是',
			          		status:'未知',
			          		remark:''
			          	}
			          ]
	        }
      }
  	}
</script>

<style>
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