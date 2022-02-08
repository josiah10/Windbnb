<template>
    <div class="head2">
        <h2>Stays in Finland</h2>
        <p>12+ stays</p>
    </div>
</template>

<script>
    export default {
        name: "Head2"
    }
</script>

<style scoped>
    .head2{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    h2{
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        margin: 0;
        color: #333333;
    }
    p{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin:0;
        color: #4F4F4F;
    }
    @media screen and (max-width: 400px){
        h2{
            font-size: 18px;
        }
    }

</style>