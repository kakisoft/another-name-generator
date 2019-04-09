<template>
    <div>
      <mdb-edge-header color="teal darken-1"/>
      <div class="container free-bird">
        <mdb-row>
          <mdb-col md="10" class="mx-auto float-none white z-depth-1 py-2 px-2">
            <mdb-card-body>
              <p>異名ってありますよね！</p>
              <p class="pb-4">This application shows the actual use of MDB Vue components in the application.</p>
            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </div>
      <mdb-container>
        <div>
          <h2 class="text-center mt-5 font-weight-bold">Why is it so great?</h2>
          <mdb-col md="10" class="mx-auto text-center">
            <p class="pt-4">Google has designed a Material Design to make the web more beautiful and more user-friendly.</p>
            <p>Twitter has created a Bootstrap to support you in faster and easier development of responsive and effective websites.</p>
            <p>We present you a framework containing the best features of both of them - Material Design for Bootstrap.</p>
          </mdb-col>
        </div>
        <hr class="my-5">


      </mdb-container>
    </div>
</template>

<script>
import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbBtn, mdbEdgeHeader, mdbCardBody } from 'mdbvue';

export default {
  name: 'HomePage',
  components: {
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbIcon,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbBtn,
    mdbEdgeHeader,
    mdbCardBody
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.home-feature-box {
  padding: 40px 0;
}

.home-feature-box i {
  font-size: 6rem;
}

.home-feature-box span {
  display: block;
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #42b983;
}

</style>
