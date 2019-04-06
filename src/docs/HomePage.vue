<template>

  <mdb-container>
    <hr class="my-2">
    <div class="text-center mt-3">
      <mdb-btn @click="setGeneratedPhrases" color="primary" size="lg">Primary button</mdb-btn>
    </div>
    <hr class="my-2">




    <div v-for="(phrase, index) in phrases">
      <mdb-row class="my-4">
        <mdb-col sm="6">
          <mdb-card>
            <mdb-card-body>
              {{phrase}}
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </div>






    <mdb-row class="my-4">
      <mdb-col sm="6">
        <mdb-card>
          <mdb-card-body>
            This is some text within a panel body.
          </mdb-card-body>
        </mdb-card>
      </mdb-col>

      <mdb-col sm="6">
        <mdb-card>
          <mdb-card-body>
            This is some text within a panel body.
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>

    


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
      TOKEN_LENGTH,
      DELIMITER_CHAR,
      hkn,
      phrases:[
        '何か',
        'いい感じの',
        '言葉'
      ]
    };
  },
  created() {
    this.TOKEN_LENGTH   = 0;
    this.DELIMITER_CHAR = ' ';

    var Haikunator = require('haikunator')
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
      this.phrases.push('ああ');


var c1 = this.getGeneratedPhrase();
// var b1 = this.hkn.haikunate();
console.log(c1)


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
