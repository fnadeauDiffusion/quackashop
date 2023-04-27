<template>
    <div class="m-5">
        <b-card class="text-center">
            <div class="bg-white text-light">
                <div>
                    <b-form  @submit.stop.prevent>
                        <div>
                            <label class="black-text pt-3" for="user">User ID</label>
                            <b-form-input v-model="username" name="username" id="user"></b-form-input>
                            <b-form-text id="user-help-block">
                                Your user ID must be 5-12 characters long.
                            </b-form-text>
                        </div>
                        <div>
                            <label class="black-text pt-3" for="password">Password</label>
                            <b-form-input v-model="password" type="password" name="password" id="password" aria-describedby="password-help-block"></b-form-input>
                            <b-form-text id="password-help-block">
                                Your password must be 8-20 characters long, contain letters and numbers, and must not
                                contain spaces, special characters, or emoji.
                            </b-form-text>
                        </div>
                        <div class="pt-3">
                            <b-button @click="register" type="submit" variant="primary">Register</b-button>
                        </div>
                    </b-form>
                </div>
            </div>
        </b-card>
    </div>
</template>
  
<script>
    import AuthenticationService from '@/Services/AuthenticationService'
    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        watch: {
            username (value) {
                console.log(value)
            }
        },
        methods: {
            async register () {
                const response = await AuthenticationService.register({
                    username: this.username,
                    password: this.password
                })
                console.log(response.data)
            }
        }
    }
</script>