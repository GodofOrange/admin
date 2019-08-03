import Vue from 'vue'
import Router from 'vue-router'
import UM from '@/components/UM.vue'
import ProblemOperation from '@/components/ProblemOperation'
import ClassiFy from '@/components/ClassiFy'
import HomeWork from '@/components/HomeWork'
import AddProblem from '@/components/po/AddProblem'
import AddClassify from '@/components/po/AddClassify'
import ProblemInsert from '@/components/po/ProblemInsert'
import DeleteProblem from '@/components/po/DeleteProblem'
import ProblemUpdate from '@/components/po/ProblemUpdate'
import ProblemInfo from '@/components/po/ProblemInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UM',
      component: UM
    },
    {
      path: '/PO',
      name: 'ProblemOperation',
      component: ProblemOperation,
      children: [
        {path: 'ADP', component: AddProblem},
        {path: 'AC', component: AddClassify},
        {path: 'PBI', component: ProblemInsert},
        {path: 'DP', component: DeleteProblem},
        {path: 'PU', component: ProblemUpdate},
        {path: 'PI', component: ProblemInfo}
      ]
    },
    {
      path: '/CF',
      name: 'ClassiFy',
      component: ClassiFy
    },
    {
      path: '/HM',
      name: 'HomeWork',
      component: HomeWork
    }
  ]
})
