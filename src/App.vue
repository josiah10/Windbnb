<template>
    <Search />
  <div class="container">

      <Head class="hea"/>
      <Head2 class="hea2"/>
      <div class="first">
          <Division num="4.40" text="Stylist apartment in center of the city"/>
          <Division2 tex="Private room" text="Cozy, peaceful and private room with..." num="4.25"/>
          <Division2 text="Modern House in a remote area" tex="Entire house" num="4.96"/>
      </div>

      <div class="first">
          <Division  num="4.85" text="Stylist room in design district"/>
          <Division2 num="4.54" tex="Private room" text="Modern apartment close to nature"/>
          <Division2 tex="Entire house" num="4.64" text="House in a remote area"/>
      </div>
      <div class="cla"><p>created by Josiah - devChallenges.io</p></div>
  </div>
</template>

<script>

import Head from "./components/Head";
import Head2 from "./components/Head2";
import Division from "./components/Division";
import Division2 from "./components/Division2";


import Search from "./components/Search";
export default {
  name: 'App',
    components: {
      Head,
      Head2,
      Division,
      Division2,
        Search
  }
}
</script>

<style scoped>
.container{
    margin: 32px 100px;
    overflow-x: hidden;


}
    .hea{
        margin-bottom: 67px;
    }
    .hea2{
        margin-bottom: 32px;
    }
    .first{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 50px;
    }
    p{
        text-align: center;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #828282;
        margin-top: 90px;
    }

    @media screen and (max-width: 600px){
        .container{
            margin: 22px 13px;
            overflow-x: hidden;
        }
        .first{
            display: flex;
            flex-direction: column;
            margin-bottom: 5px;
        }

    }

</style>
