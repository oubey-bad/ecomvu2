import { defineStore } from "pinia";
export const useAuthStore = defineStore("authStore",{
    state: ()=>{
        return {
            user : null,
            errors : {},
        }
    },
    actions:{
        async getUser(){
            if (localStorage.getItem("token")) {
                const res = await fetch("/api/user",{
                    headers: {
                        authorization: `Bearer ${ localStorage.getItem("token")}`,
                    },
                });
                const data = await res.json();
                if (res.ok) {
                    this.user = data;
                    
                }
                console.log(data)
                ;
            }
        },
        async authenticate(apiRoute,formData,router){
            const res = await fetch(`/api/${apiRoute}`,{
                method: 'POST',
                body: JSON.stringify(formData),

            })
            const data = await res.json();
            if (data.errors) {
                this.errors = data.errors;
                
            } else {
                localStorage.setItem('token',data.data.token);
                this.user = data.data.name;
                this.router.push({ name:"home" });
            }
        }
    }
});