import { defineStore } from "pinia";

export const useAdminPrductColorStore = defineStore('adminPrductColorStore',{
    state: () => {
      return{
        errors:{},
      }  
    },
    actions:{
        // CREATE color
        async createColor(formData){
            const res = await fetch(`/api/colors`,{
                method: 'POST',
                headers:{
                    authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                this.router.push({ name: "productColors" });

            } else {
                const data = await res.json();

                this.errors = data.errors;
                console.log(this.errors);
            }
           
           

        },
        //
        async getColors() {
            if (localStorage.getItem("token")) {
                const res = await fetch("/api/colors", {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                });
                const data = await res.json();
                console.log(data);
            }
        },
    }
})