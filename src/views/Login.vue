<template>
    <div class="login">
        <h1 style="text-align: center">
            登录
        </h1>
        <a-form
                id="components-form-demo-normal-login"
                :form="form"
                class="login-form"
                @submit="handleSubmit"
        >
            <a-form-item>
                <a-input
                        v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入账号！' }] },
        ]"
                        placeholder="Username"
                        v-model="user"
                >
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码！' }] },
        ]"
                        type="password"
                        placeholder="Password"
                        v-model="pass"
                >
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-checkbox
                        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
                >
                    Remember me
                </a-checkbox>
                <a class="login-form-forgot" href="">
                    Forgot password
                </a>
                <a-button type="primary" html-type="submit" class="login-form-button" v-on:click="submit()">
                    Log in
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                user: '',
                pass: ''
            }
        },
        methods: {
            submit(){
                this.$axios({
                    method:'post',
                    url:'/ccut/user/login',
                    params:{
                        userName: this.user,
                        password: this.pass
                    }
                }).then(res => {
                    if (res.data.message === '成功'){
                        this.$router.push('/home');
                    }else {
                        alert('登录错误！')
                    }
                }).catch(err => {
                    console.log(err.response)
                })
            }
        }
    };
</script>
<style>
    #components-form-demo-normal-login .login-form {
        max-width: 300px;
    }
    #components-form-demo-normal-login .login-form-forgot {
        float: right;
    }
    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }
</style>
<style>
    .login{
        padding-top: 150px;
        padding-left: 500px;
        padding-right: 500px;
    }
</style>
