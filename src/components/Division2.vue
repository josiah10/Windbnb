<template>
    <div class="contain">
        <img src="../assets/images/img1.jpg" alt="">
        <div class="cl">
            <div class="en">{{tex}}</div>
            <div class="ch"><star-icon class="icon"/>
            <span class="num"> {{num}}</span></div>
        </div>
        <p>{{text}}</p>

    </div>
</template>

<script>
    export default {
        name: "Division2",
        props:{
            tex:String,
            text:String,
            num:Number
        }
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
    .en{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #828282;
    }
    .num{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #4F4F4F;
        line-height: 17px;
        padding-left: 8px;

    }
    .ch{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
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
    @media screen and (max-width: 480px){
        .contain{
            width:390px ;
            margin-bottom: 32px;
        }
        img{
            height: 280px;
            width: 390px;
        }
        /*.en{*/
        /*    font-size: 12px;*/
        /*}*/
        /*.num{*/
        /*    font-size: 12px;*/
        /*}*/
        /*p{*/
        /*    font-size: 14px;*/
        /*}*/
    }


</style>