<template>
	<!--<keep-alive>-->
		<div :is="item"  :remoteURL="remoteURL">
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
				type:Object,
				default(){
					return {};
				}
			}
		},
		components:{
			'CommonTable':commonTable,
			'Table1':table1,
			'Table2':table2,
			'Table3':table3
		},
		created(){
		},
		data(){
			return {
				item:this.curCmp.componentName,
				remoteURL:this.curCmp.getUrl,
				tableData: []
			}
		}
	}
</script>

<style>
</style>