<template>

  <mdb-container>
    <hr class="my-2">
    <div class="text-center mt-3">
      <mdb-btn @click="setGeneratedPhrases" color="green" size="lg" class="show-button">何か出ろ</mdb-btn>
    </div>
    <hr class="my-2">

    <div v-if="selectedPhaseList.length">
        <div v-for="(i) in [0,2,4]"><!-- 何かもう吐きそうなぐらいみっともないコード。リファクタしたいけど、いい案が思いつかん。 -->
          <mdb-row class="my-4">
            <mdb-col sm="6">
              <mdb-card>
                <mdb-card-header color="primary-color" tag="h6">{{selectedPhaseList[i]['name_jp']}}</mdb-card-header>
                <mdb-card-body>
                  {{selectedPhaseList[i]["name_en"]}}
                </mdb-card-body>
              </mdb-card>
            </mdb-col>

            <mdb-col sm="6">
              <mdb-card>
                <mdb-card-header color="primary-color" tag="h6">{{selectedPhaseList[i+1]['name_jp']}}</mdb-card-header>
                <mdb-card-body>
                  {{selectedPhaseList[i+1]["name_en"]}}
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
import mockPhrases from '@/assets/mockdata/phrases.json';

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
      getCount : 6,
      hkn : null,
      phrases:[],
      indexList:[],
      selectedPhaseList:[],
      numOfPhrases: mockPhrases.length,
      PHRASE_LIST: mockPhrases
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
    //// ver1
    // setGeneratedPhrases(e) {
    //   this.phrases = [];
    //   for(let i=1; i<=this.getCount; i++){
    //     const c1 = this.getGeneratedPhrase();
    //     this.phrases.push(c1);
    //   }
    // },
    // getGeneratedPhrase(){
    //   return this.hkn.haikunate();
    // }

    // ver2  結局、Haikunator をコールする必要なくなっちゃったよ！
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    
    setGeneratedPhrases(e) {
      this.phrases = [];
      this.setIndexList();
      this.setSelectedPhaseList();
    },
    setIndexList(){
      this.indexList = [];
      for(var i=0; i<this.getCount; i++ ){
          this.indexList.push(this.getRandomInt(this.numOfPhrases))
      }
    },
    setSelectedPhaseList(){
      this.selectedPhaseList = [];
      this.indexList.forEach(el => {
          this.selectedPhaseList.push(this.PHRASE_LIST[el]);
      });
    }

  }   
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .show-button {
    padding : 1em 5em;
}

</style>
