<template>
	<!--<keep-alive>-->
		<div :is="item" >
		</div>
	<!--</keep-alive>-->
</template>

<script>
	import commonTable from './commontable'
	import table1 from './table'
	import table2 from './table2'
	import table3 from './table3'
	export default {
		props:{
			curCmp:{
				type:String,
				default:''
			}
		},
		components:{
			'CommonTable':commonTable,
			'Table1':table1,
			'Table2':table2,
			'Table3':table3
		},
		data(){
			return {
				item:this.curCmp,
				tableData: []
			}
		}
	}
</script>

<style>
</style>