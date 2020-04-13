    <template>
    <el-form :inline="true" :model="formInline" size="small" >
      <el-form-item label="用户信息">
        <el-input class="input" v-model="formInline.username" placeholder="用户名"></el-input>
        <el-input class="input" v-model="formInline.email" placeholder="email"></el-input>
      </el-form-item>
     <el-form-item>
        <el-button type="primary" @click="onSubmitGet">get 查询所有</el-button>
        <el-button type="primary" @click="onSubmitPost">post 提交</el-button>
      </el-form-item>
     <el-input type="textarea" :rows="6" placeholder="此处返回结果" v-model="results" class="textarea"> </el-input>
    </el-form>
     
     
    </template>
    <script>
      /*import axios from 'axios'*/
      export default {
        data() {
          return {
            formInline: {
              username: '',
              email: '',
            },
            results:''
          }
        },
        methods: {
          onSubmitGet() {
            console.log('submit! get');
              //axios.get('api/users/',).then(res => {//get()中的参数要与mock.js文件中的Mock.mock()配置的路由保持一致
              /*axios.get('http://127.0.0.1:8000/users.json',).then(res => {//get()中的参数要与mock.js文件中的Mock.mock()配置的路由保持一致*/
              /*this.results = JSON.stringify(res.data);*/
              /*console.log(res.data);//在console中看到数据*/
            /*}).catch(res => {*/
              /*alert('wrong');*/
            /*})*/
     
     
          },
          onSubmitPost() {
            console.log('submit! post');
              //axios.post('api/users/',this.formInline).then(res => {//get()中的参数要与mock.js文件中的Mock.mock()配置的路由保持一致
              /*axios.post('http://127.0.0.1:8000/users.json',this.formInline).then(res => {//get()中的参数要与mock.js文件中的Mock.mock()配置的路由保持一致*/
              /*console.log(res.data);//在console中看到数据*/
            /*}).catch(res => {*/
              /*alert('wrong');*/
            /*})*/
     
          }
        }
      }
    </script>
     
    <style scoped>
    .input {
      width: 200px
    }
    button {
      width: 100px
    }
    .textarea {
      width: 900px
    }
    </style>

大家可以看到接口那里请求了接口 api/users/ ，细心的你可能已经看到了，我在下面一行注释掉了真实开发环境中联调的地址，127.0.0.1:8000/users.json 但此时我后端程序未开发好，怎么测试接口的正确性呢？我们使用 mockjs，在 src 目录下创建 mock.js ，填入以下代码，这些代码都是参考官方样例修改的。

    //引入mockjs
    const Mock = require('mockjs')
    // 获取 mock.Random 对象
    const Random = Mock.Random;
    //使用mockjs模拟数据
    /*Mock.mock('api/users/', (req, res) => {//当post或get请求到/api/users/路由时Mock会拦截请求并返回上面的数据*/
        var list = [{"url":"http://127.0.0.1:8000/users/3.json","username":"aaaaaa","email":"","groups":[]},{"url":"http://127.0.0.1:8000/users/2.json","username":"somenzz","email":"","groups":[]},{"url":"http://127.0.0.1:8000/users/1.json","username":"admin","email":"admin@example.com","groups":[]}]
        return list
    })
