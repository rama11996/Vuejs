import addBlog from './components/addblog.vue'
import showblog from './components/showblog.vue'
import listblogs from './components/listBlogs.vue'

export default[
    {path:'/', component:showblog},
    {path:'/add', component:addBlog},
    {path:'/list', component:listblogs}
]