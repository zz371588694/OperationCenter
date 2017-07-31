<template>
	<div class="template">
		<header>
			<div class="logo">
			</div>
			<div class="menu-list">
			</div>
		</header>
		<div class="content">
			<aside>
				<el-menu  unique-opened theme="dark">
					<el-submenu v-for="(parent,parentIndex) in menuData" :index="''+parentIndex" :key="parentIndex">
						<template slot="title">
							<i :class="parent.class"></i>{{parent.name}}
						</template>
						<el-menu-item v-for="(children,childIndex) in parent.children" :index="parentIndex+'-'+childIndex" 
							:key="childIndex" @click="addTab(children)">
							{{children.name}}
						</el-menu-item>
					</el-submenu>
				</el-menu>
			</aside>
			<section>
				<el-tabs type="card" v-model="tabsSelect" @tab-remove="removeTab">
						  <el-tab-pane v-for="(tab,tabIndex) in tabsData" :label="tab.label" :key="tabIndex"
						  	 :name="''+tabIndex" :closable="tab.closable">
						  		<Container :curCmp="tab.cmp">
						  		</Container>
						  	<!--	<Container>
						  		</Container>-->
						 </el-tab-pane>
				</el-tabs>
			</section>

		</div>

		<footer>

		</footer>
	</div>
</template>

<script>
import container from './components/content/container'
import './css/homepage.css'
	 export default {
	    components: {
	    	Container:container
	  	},
	  	created(){
	  		this.$axios.get('/static/menu_list.json')
	  		.then((response)=>{
	  			this.menuData = response.data;
	  		})
	  		.catch((error)=>{
	  			this.$alert('请求失败','错误信息',{
	  				confirmButtonText:'确定'
	  			})
	  		})
	  	},
	  	data(){
	  		return {
	  			menuData:[],
	  			tabsSelect:'0',
	  			curComponent:'Table1',
	  			tabsData:[
	  				{
	  					label:'我的桌面',
	  					href:'',
	  					closable:false,
	  					cmp:''
	  				}
	  			]
	  		}
	  	},
	  	methods:{
	  		addTab(obj){
	  			//判断是否已有相同节点
	  			for(var child of this.tabsData){
	  				if(child.label == obj.name){
	  					//选中已有节点，tab选中该节点
	  				    this.tabsSelect = this.tabsData.indexOf(child) + '';
	  					return;
	  				}
	  			}
	  			
	  			this.tabsData.push(
	  				{
	  					label:obj.name,
	  					href:'',
	  					closable:true,
	  					cmp:''
	  				}
	  			)
	  			this.tabsSelect =this.tabsData.length-1+'';
	  		},
	  		removeTab(targetIndex){
	  			//如果当前选择关闭的是最后一个，则关闭之后的最后一个选项卡被选中；如果不是，则被删除选项的下一个选项卡被选中
	  			let nextSelectIndex = targetIndex == this.tabsData.length-1?(targetIndex-1)+'':targetIndex+'';
	  			
	  			//关闭当前点击的选项卡
	  			this.tabsData.splice(targetIndex,1);
	  			this.tabsSelect = nextSelectIndex;
	  			
	  		}
	  	}
  	}
</script>

<style>
	header{
		height: 80px;
		background: #00a1a2;
	}
</style>