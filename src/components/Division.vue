<template>
    <div class="contain">
        <img src="../assets/images/img6.jpg" alt="">
        <div class="cl">
            <div class="su">super Host</div>
            <div class="en">Entire apartment . 2 beds</div>
            <div class="ch"><star-icon class="icon"/>
            <span class="num"> {{num}}</span></div>
        </div>
        <p>{{text}}</p>

    </div>
</template>

<script>
    export default {
        name: "Division",
        props:{
           num:Number,
            text:String,
            filename:String
        },
        // methods:{
        //     myUrl:function (path) {
        //         let images= require('../assets/images/',false,/\.png$|\.jpg$/)
        //         return images(path)
        //
        //     }
        // }
    }
</script>

<style scoped>
    .contain{
     width: 430px;
    }
    .cl{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 15px;
        justify-content: space-between;
    }
    .su{
        border: 1px solid #4F4F4F;
        box-sizing: border-box;
        border-radius: 12px;
        padding: 8px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-transform: uppercase;
        color: #4F4F4F;
        margin: 0;
    }
    .en{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #828282;
        margin-left: -70px;

    }
    .num{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #4F4F4F;
        padding-left: 8px;
    }
    .icon{
        color: #EB5757;

    }
    img{
        border-radius: 24px;
        width: 430px;
        height: 280px;
    }
    p{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #333333;
        margin-top: 12px;
        text-align: left;
    }
    .ch{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    @media screen and (max-width: 480px){
        .contain{
            width:390px ;
            margin-bottom: 32px;
        }
        img{
            height: 280px;
            width: 390px;
        }
        /*.su{*/
        /*    font-size: 10px;*/
        /*    padding: 6px 5px 7px 19px;*/
        /*}*/
        .en{
            margin-left: -30px;
        }
        /*.num{*/
        /*    font-size: 12px;*/
        /*}*/
        /*p{*/
        /*    font-size: 14px;*/
        /*}*/
    }


</style>