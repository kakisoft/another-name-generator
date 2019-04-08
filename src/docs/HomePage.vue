<template>

  <mdb-container>
    <hr class="my-2">
    <div class="text-center mt-3">
      <mdb-btn @click="setGeneratedPhrases" color="primary" size="lg">Primary button</mdb-btn>
    </div>
    <hr class="my-2">

<div v-if="phrases.length">

    <div v-for="(i) in [0,2,4,6]"><!-- 何かもう吐きそうなぐらいみっともないコード。リファクタしたいけど、いい案が思いつかん。 -->
      <mdb-row class="my-4">
        <mdb-col sm="6">
          <mdb-card>
            <mdb-card-body>
              {{phrases[i]}}
            </mdb-card-body>
          </mdb-card>
        </mdb-col>

        <mdb-col sm="6">
          <mdb-card>
            <mdb-card-body>
              {{phrases[i+1]}}
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </div>

</div>









    


  </mdb-container>
</template>

<script>
import { mdbContainer,  mdbRow, mdbCol, mdbBtn, mdbCard, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardBody, mdbCardHeader, mdbListGroup, mdbListGroupItem, mdbNavItem, mdbCardGroup, mdbJumbotron, mdbIcon, mdbFooter, mdbTab, mdbTabItem, mdbTabContent, mdbTabPane } from 'mdbvue';

export default {
  name: 'PanelPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbCard,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardBody,
    mdbCardHeader,
    mdbListGroup,
    mdbListGroupItem,
    mdbNavItem,
    mdbCardGroup,
    mdbJumbotron,
    mdbIcon,
    mdbFooter,
    mdbTab,
    mdbTabItem,
    mdbTabContent,
    mdbTabPane
  },
  data(){
    return {
      TOKEN_LENGTH   : 0,
      DELIMITER_CHAR : ' ',
      getCount : 8,
      hkn : null,
      phrases:[]
    };
  },
  created() {
    const Haikunator = require('haikunator')
    this.hkn = new Haikunator({
        defaults: {
            tokenLength: this.TOKEN_LENGTH,
            delimiter  : this.DELIMITER_CHAR
        }
    })
  },
  mounted() {
  },
  methods: {
    setGeneratedPhrases(e) {
      this.phrases = [];
      for(let i=1; i<=this.getCount; i++){
        const c1 = this.getGeneratedPhrase();
        this.phrases.push(c1);
      }
    },
    getGeneratedPhrase(){
      return this.hkn.haikunate();
    }
  }  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
