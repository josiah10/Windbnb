<template>
    <div class="ok">
    <div class="contain">
        <p class="bold">Location</p>
        <p class="bold1">Guests</p>
        <div class="all">
            <div class="loc"><input type="text"  placeholder="Add location"></div>
            <div class="guest"><input type="text"  placeholder="Add Guest"></div>
            <div class="btn"><button class="topbtn"><fa icon="search" class="icon"/> Search</button></div>
        </div>
        <div class="overall">
        <div class="item">
            <ul>
                <li><fa class="ic" icon="map-marker"/><span>Helsinki, Finland</span></li>
                <li><fa class="ic" icon="map-marker"/><span>Turku, Finland</span></li>
                <li><fa class="ic" icon="map-marker"/><span>Oulu, Finland</span></li>
                <li><fa class="ic" icon="map-marker"/><span>Vaasa, Finland</span></li>
            </ul>
        </div>

        <div class="sum">
            <p class="ad">Adults</p>
            <p class="age">Ages 13 0r above</p>
            <div class="incr">
                <button class="bt">-</button>
                <input class="in" type="number" value="0">
                <button class="bt cb">+</button>
            </div>
            <p class="ad">Children</p>
            <p class="age">Ages 2-12</p>
            <div class="incr">
                <button class="bt">-</button>
                <input class="in" type="number" value="0">
                <button class="bt cb">+</button>
            </div>
        </div>
        </div>
    </div>

    <div class="noth"></div>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped>
    .contain{
        margin: 93px 120px 0 150px;
        height: 40vh;
    }
    
    .all{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 1248px;
        height: 55px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
    }
    .loc,
    .guest{
        padding: 27px 300px 10px 27px;
        border-right: 1px solid #F2F2F2;
    }
    .btn{
        margin: 3px auto;
    }
    .topbtn{
        padding: 15px 17px;
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        color: #F2F2F2;
        background-color: #EB5757;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        border: none;
        border-radius: 16px;

    }
    input{
        border: none;
    }
    .icon{
        padding-right: 10px;
    }
    input:focus-within{
        outline: none;
    }
    .ic{
        padding-right: 10px;
        color: #4F4F4F;
        font-size: 14px;
    }
    ul{
        text-decoration: none;
    }
    li{
        padding-bottom: 36px;
        list-style: none;
    }
    li span{
        font-family: Mulish;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        color: #4F4F4F;
    }
    .ad{
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        color: #333333;
    }
    .age{
        font-family: Mulish;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        color: #BDBDBD;
        margin-top: -10px;
    }
    .incr{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 52px;
    }
    .bt{
        padding: 3px 8px;
        color: #828282;
        margin-right: 10px;
        border: 1px solid #828282;
        box-sizing: border-box;
        border-radius: 4px;
        background: none;

    }
    .cb{
        margin-left: -150px;
    }
    .in{
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        color: #333333;
    }
    .overall{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        margin-top: 42px;
    }
    .item{
        margin-right: 375px;
        margin-left: -9px;
    }
    .bold{
        position: absolute;
        font-family: Mulish;
        font-style: normal;
        font-weight: 800;
        font-size: 9px;
        line-height: 11px;
        text-transform: uppercase;
        color: #333333;
        left: 185px;
    }
    .bold1{
        position: absolute;
        font-family: Mulish;
        font-style: normal;
        font-weight: 800;
        font-size: 9px;
        line-height: 11px;
        text-transform: uppercase;
        color: #333333;
        left: 685px;
    }
    .noth{
        height: 60vh;
        background: rgba(79, 79, 79, 0.4);
        width: 100%;
    }
    /*.ok{*/
    /*    position: absolute;*/
    /*    top: 0;*/
    /*    z-index: 1;*/
    /*}*/

</style>