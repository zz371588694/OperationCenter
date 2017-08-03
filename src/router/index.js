import Vue from 'vue'
import Router from 'vue-router'
/*import Table from '@/components/content/Table'
import Table2 from '@/components/content/Table2'*/
import HomePage from '@/HomePage'

Vue.use(Router)

export default new Router({
	mode:'history',
	base:'/vuedemo',
  	routes: [
	    {
	    	path:'/',
	    	redirect:'/Home'
	    },
	    {
	    	path:'/Home',
	    	component:HomePage
	    	/*children:[
	    		{
	    			path:'table',
	    			component:Table
	    		},
	    		{
	    			path:'table2',
	    			component:Table2
	    		},
	    	]*/
	    }
  ]
})
