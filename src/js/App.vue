<template>
    <div>
        <!--  Search color -->

        <h1>{{text}}</h1>
        <input  v-model="fiindColor"> <br><br>
        <div v-if="colors.length > 0"> 
        
            <div class="colors"> 
                    
                <div class="hex" v-for="color in search" v-bind:style="{ backgroundColor: color }">
                    
                    <h1>{{ color }}</h1> 
                
                </div>

            </div>

        </div>

        <!--random color generator -->

        <br><br>
        <hr>
        <br><br>

        <button id="change" v-on:click="generator">Random color generator</button> 
    </div>
</template>

<script>
    export default {

        data() {
            return {
                text:'Search color',
                fiindColor: '',
                colors: [
                    "#a5a1b8",
                    "#490836",
                    "#782190",
                    "#61e080",
                    "#5e8f24",
                    "#10f64f",
                    "#bb54e5",
                    "#09114e",
                    "#c7f3b9",
                    "#da1399",
                    "#ed5fe2",  
                    "#29c84c",
                    "#a3a3a8",
                    "#691a2f"

                ], 
            }
        },
        computed: {
            search: function() {
                let self = this;

                return this.colors.filter(function(color) 
                {
                    let parts = self.fiindColor.trim().split(" ");

                    for(let part of parts) {
                        let searchRegex = new RegExp(part, 'i');

                        if(!(searchRegex.test(color))) 
                        {
                            return false;
                        }
                    }
                    return true;
                })

            }
        },
        methods: {
            generator: function(event){
                let mycolor=[];

                for(let i=0; i < this.colors.length; i++)
                {
                    mycolor.push( '#'+ Math.floor(Math.random()*0xFFFFFF).toString(16));
                }
                this.colors=mycolor; 
            }
        }
    };
</script>

<style lang="scss">
    html
    {
        margin-top: 15px;
        margin-left: 50px;
        margin-right: 50px;
        margin-bottom: 15px;
    }
    .hex {
        height: 200px;
        width: 200px;
        margin:5px;
        padding: 5px;
        color: #000000; 
    }
    .colors {
        display:flex;
        flex-wrap: wrap;
        justify-content: left;
        width: 1500px;
    }

</style>
