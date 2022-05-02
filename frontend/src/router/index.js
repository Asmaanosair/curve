
import Vue from 'vue'
import Vuelidate from 'vuelidate';
import Router from 'vue-router'

// 1. Import Chart.js so you can use the global Chart object
import Chart from 'chart.js'
// 2. Import the `generateChart()` method to create the vue component.
import { generateChart } from 'vue-chartjs'


//Dashboard
const Dashboard = () => import('@/views/Dashboard')
// Containers
const TheContainer = () => import('@/containers/TheContainer')
// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')
const EditUser = () => import('@/views/users/EditUser')
const CreateUser = () => import('@/views/users/Create')



// commisions
const Commissions = () => import('@/views/commissions/Commissions')
const EditCommission = () => import('@/views/commissions/Edit')
const CreateCommission = () => import('@/views/commissions/Create')


// Category Status
const CatStatuses = () => import('@/views/catStatus/index')
const CatStatus = () => import('@/views/catStatus/Show')
const EditCatStatus = () => import('@/views/catStatus/Edit')
const CreateCatStatus = () => import('@/views/catStatus/Create')
//Roles
const Roles = () => import('@/views/roles/Roles')
const Role = () => import('@/views/roles/Role')
const EditRole = () => import('@/views/roles/EditRole')
const CreateRole = () => import('@/views/roles/CreateRole')



//Drivers
const Fleets  = () => import('@/views/fleets/Fleets')
const Fleet = () => import('@/views/fleets/Fleet')
const CreateFleet = () => import('@/views/fleets/CreateFleet')
const EditFleet = () => import('@/views/fleets/EditFleet')
const Wallet = () => import('@/views/fleets/Wallet')
const ChatFleet  = () => import('@/views/fleets/Chat')
/************** New Edition *****************/
//Hr  Driver Management
Vue.use(Vuelidate);
const AppFleets  = () => import('@/views/hrDriver/Fleets')
const AppFleet = () => import('@/views/hrDriver/Fleet')
const AppCreateFleet = () => import('@/views/hrDriver/Create')
const BulkDriver = () => import('@/views/hrDriver/BulkDriver')
const AppEditFleet = () => import('@/views/hrDriver/Edit')

const Suppliers  = () => import('@/views/suppliers/suppliers')
const Supplier = () => import('@/views/suppliers/supplier')
const CreateSupplier = () => import('@/views/suppliers/Create')
const EditSupplier= () => import('@/views/suppliers/Edit')

const SFleet = () => import('@/views/suppliers/Fleets')
Vue.component('ChartOrder', require('../views/financial/chart.vue').default);




//================ Clients ===============
const Clients  = () => import('@/views/clients/Clients')
const Client = () => import('@/views/clients/Client')
const CreateClient = () => import('@/views/clients/Create')
const EditClient= () => import('@/views/clients/Edit')
const Manager= () => import('@/views/clients/Fleets')

const CBranches= () => import('@/views/clients/Branches')
const Financial= () => import('@/views/financial/index')


//================ Client Branches.vue ===============
const ClientsBranch  = () => import('@/views/clients-branch/Clients')
const ClientBranch = () => import('@/views/clients-branch/Client')
const CreateClientBranch = () => import('@/views/clients-branch/Create')
const EditClientBranch= () => import('@/views/clients-branch/Edit')

//================ Branches ===============
const Branches  = () => import('@/views/branches/Branches')
const Branch = () => import('@/views/branches/Branch')
const CreateBranch = () => import('@/views/branches/Create')
const EditBranch= () => import('@/views/branches/Edit')

/************** End New Edition *****************/
//Orders
const Orders = ()=>import('@/views/orders/Orders');
const Order = ()=>import('@/views/orders/Order');
const Completed = ()=>import('@/views/orders/completed');
const Issue = ()=>import('@/views/orders/issue');
const InProgress = ()=>import('@/views/orders/inprogress');

//Maps
const TwistMaps = ()=>import('@/views/twistMaps/TwistMaps');


// Settings
const Settings = ()=>import('@/views/settings/Create');
// myOrders
const MyOrdersIndex = ()=>import('@/views/myOrders/index');
const CreateNewOrders = ()=>import('@/views/myOrders/Create');

// Privacy
const Privacy = ()=>import('@/views/Privacy/Privacy');

// Bulk Order
const BulkOrder = ()=>import('@/views/myOrders/Bulk');

const EditOrder = ()=>import('@/views/myOrders/Edit');

const Cities = ()=>import('@/views/cities/Cities');
const CreateCity = ()=>import('@/views/cities/Create');
const EditCity = ()=>import('@/views/cities/Edit');



Vue.component("chat-composer", () => import('@/views/fleets/ChatComposer'))

Vue.component("Notification", () => import('@/views/TheNotifications/Notifications'));

Vue.use(Router)




export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/login',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'orders',
          meta: { label: 'Orders'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Orders,
            },

            {
              path: ':id',
              component: Order,
            },
            {
              path: ':id/edit-order',
              component: EditOrder,
            }
          ]
        },
        {
          path: 'completed',
          component: Completed,
        },
        {
          path: 'issue',
          component: Issue,
        },
        {
          path: 'inprogress',
          component: InProgress,
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              name: 'Dashboard',
              component: Dashboard
            },
          ]
        },
        {
          path: 'privacy',
          meta: { label: 'privacy'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Privacy,
            }
          ]
        },

        {
          path: 'fleets',
          meta: { label: 'Fleet'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Fleets,
            },
            {
              path: ':id/show',
              meta: { label: 'Show Fleet' },
              name: 'Fleet',
              component: Fleet,
            },
            {
              path: ':id/wallet',
              meta: { label: 'Fleet Wallet' },
              name: 'Wallet',
              component: Wallet,
            },
            {
              path: 'create',
              meta: { label: 'Create Fleet' },
              name: 'CreateFleet',
              component: CreateFleet,
            },
            {
              path: ':id/edit',
              meta: { label: 'Edit Fleet' },
              name: 'EditFleet',
              component: EditFleet,
            },
            {
              path: ':id/chat',
              meta: { label: 'Chat Fleet' },
              name: 'ChatFleet',
              component: ChatFleet,
            },
          ]
        },
        {
          path: 'financial',
          meta: { label: 'Financial'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Financial,
            }
          ]
        },
        {
          path: 'cat',
          meta: { label: 'CatStatus'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component:CatStatuses,
            },
            {
              path: ':id/show',
              meta: { label: 'Show CatStatus' },
              name: 'CatStatus',
              component: CatStatus,
            },
            {
              path: 'create',
              meta: { label: 'Create CatStatus' },
              name: 'CreateCatStatus',
              component: CreateCatStatus,
            },
            {
              path: ':id/edit',
              meta: { label: 'Edit CatStatus' },
              name: 'EditCatStatus',
              component: EditCatStatus,
            },

          ]
        },
        {
          path: 'settings',
          meta: { label: 'settings'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Settings,
            }
          ]
        },
        {
          path: 'driver-applications',
          meta: { label: 'HR'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: AppFleets,
            },
            {
              path: ':id/show',
              meta: { label: 'Show' },
              name: 'AppFleet',
              component: AppFleet,
            },
            {
              path: 'bulk-driver',
              meta: { label: 'Bulk' },
              name: 'Bulk Driver',
              component: BulkDriver,
            },

            {
              path: 'create',
              meta: { label: 'Create ' },
              name: 'AppCreateFleet',
              component: AppCreateFleet,
            },
            {
              path: ':id/edit',
              meta: { label: 'Edit' },
              name: 'AppEditFleet',
              component: AppEditFleet,
            },
          ]
        },
        {
          path: 'supplier',
          meta: { label: 'suppliers'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Suppliers,
            },
            {
              path: ':id/show',
              meta: { label: 'Show' },
              name: 'Supplier',
              component: Supplier,
            },

            {
              path: 'create',
              meta: { label: 'Create ' },
              name: 'CreateSupplier',
              component: CreateSupplier,
            },

            {
              path: ':id/edit',
              meta: { label: 'Edit' },
              name: 'EditSupplier',
              component: EditSupplier,
            },
            {
              path: ':id/fleet',
              meta: { label: 'SFleet' },
              name: 'SFleet',
              component: SFleet,
            },
          ]
        },
        {
          path: 'commission',
          meta: { label: 'commissions'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Commissions,
            },

            {
              path: 'create',
              meta: { label: 'Create ' },
              name: 'Create-commission',
              component: CreateCommission,
            },

            {
              path: ':id/edit',
              meta: { label: 'Edit' },
              name: 'Edit-commission',
              component: EditCommission,
            },

          ]
        },
        {
          path: 'client',
          meta: { label: 'clients'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Clients,
            },
            {
              path: ':id/show',
              meta: { label: 'Show' },
              name: 'Client',
              component: Client,
            },

            {
              path: 'create',
              meta: { label: 'Create ' },
              name: 'CreateClient',
              component: CreateClient,
            },

            {
              path: ':id/edit',
              meta: { label: 'Edit' },
              name: 'EditClient',
              component: EditClient,
            },
            {
              path: ':id/manager',
              meta: { label: 'Manager' },
              name: 'Manager',
              component: Manager,
            },
            {
              path: ':id/branches',
              meta: { label: 'CBranches' },
              name: 'CBranches',
              component: CBranches,
            },
          ]
        },
        {
          path: 'client-branch',
          meta: { label: 'clients-branch'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: ClientsBranch,
            },
            {
              path: ':id/show',
              meta: { label: 'ShowClient' },
              name: 'ClientBranch',
              component: ClientBranch,
            },

            {
              path: 'create',
              meta: { label: 'CreateClient ' },
              name: 'CreateClientBranch',
              component: CreateClientBranch,
            },

            {
              path: ':id/edit',
              meta: { label: 'EditClient' },
              name: 'EditClientBranch',
              component: EditClientBranch,
            },
            {
              path: ':id/fleet',
              meta: { label: 'SFleet' },
              name: 'SFleet',
              component: SFleet,
            },
          ]
        },
        {
          path: 'branch',
          meta: { label: 'branches'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Branches,
            },
            {
              path: ':id/show',
              meta: { label: 'Show' },
              name: 'Branch',
              component: Branch,
            },

            {
              path: 'create',
              meta: { label: 'Create ' },
              name: 'CreateBranch',
              component: CreateBranch,
            },

            {
              path: ':id/edit',
              meta: { label: 'Edit' },
              name: 'EditBranch',
              component: EditBranch,
            },
            {
              path: ':id/fleet',
              meta: { label: 'SFleet' },
              name: 'SFleet',
              component: SFleet,
            },
          ]
        },
        {
          path: 'new-orders',
          meta: { label: 'NewOrders'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: MyOrdersIndex,
            },
            {
              path: ':id/show',
              meta: { label: 'Show' },
              name: 'AppFleet',
              component: AppFleet,
            },

            {
              path: 'create',
              meta: { label: 'Create ' },
              name: 'CreateNewOrders',
              component: CreateNewOrders,
            },

            {
              path: 'bulk-order',
              meta: { label: 'Bulk' },
              name: 'BulkOrder',
              component: BulkOrder,
            },

            {
              path: ':id/edit',
              meta: { label: 'Edit' },
              name: 'AppEditFleet',
              component: AppEditFleet,
            },
          ]
        },
        {
          path: 'users',
          meta: { label: 'Users'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Users,
            },
            {
              path: ':id/show',
              meta: { label: 'User Details'},
              name: 'User',
              component: User,
            },
            {
              path: ':id/edit',
              meta: { label: 'Edit User' },
              name: 'EditUser',
              component: EditUser
            },
            {
              path: 'create',
              meta: { label: 'Create ' },
              name: 'createUser',
              component: CreateUser
            },
          ]
        },
        {
          path: '/maps',
          redirect: '/maps/show',
          name: 'TwistMaps',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'show',
              name: 'TwistMaps',
              component: TwistMaps
            },
          ]
        },

        {
          path: 'cities',
          meta: { label: 'Cities'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Cities,
            },
            {
              path: 'create',
              meta: { label: 'Create ' },
              name: 'CreateCity',
              component: CreateCity
            },
            {
              path: ':id/edit',
              meta: { label: 'Edit ' },
              name: 'EditCity',
              component: EditCity
            },
          ]
        },

        {
          path: 'roles',
          meta: { label: 'Roles'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Roles,
            },
            {
              path: 'create',
              meta: { label: 'Create Role' },
              name: 'Create Note',
              component: CreateRole
            },
            {
              path: ':id',
              meta: { label: 'Role Details'},
              name: 'Role',
              component: Role,
            },
            {
              path: ':id/edit',
              meta: { label: 'Edit Role' },
              name: 'Edit Role',
              component: EditRole
            },
          ]
        },
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
      ]
    },

    {
      path: '/',
      redirect: '/login',
      name: 'Auth',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
      ]
    },
    {
      path: '*',
      name: '404',
      component: Page404
    }
  ]
}



