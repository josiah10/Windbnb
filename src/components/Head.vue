<template>
    <div class="contain">
        <img src="../assets/images/logo.png" alt="">
         <div class="head">
             <div class="hel">Helsinki,Finland</div>
             <div class="add">Add guests</div>
            <star-icon class="star-icon"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Head"
    }
</script>

<style scoped>
    .head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 297px;
        height: 55px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        /*padding: 19px 19px 18px 16px;*/
    }
    .hel{
        font-family: Mulish;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        color: #333333;
        border: none;
        padding: 18px 19px 18px 16px;
        border-right: 1px solid #F2F2F2;
    }
    .add{
        font-family: Mulish;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        color: #BDBDBD;
        padding: 18px 19px 18px 0;
        border-right: 1px solid #F2F2F2;

    }
    .star-icon{
        padding: 18px 13px 18px 0;
    }
    .contain{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    img{
        width: 96px;
        height: 19px;
    }
    @media screen and (max-width: 460px){
        .contain{
            display: block;
        }
        .head{
            margin: 39px auto;

        }
    }

</style>