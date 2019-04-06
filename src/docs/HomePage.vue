<template>

  <mdb-container>
    <hr class="my-2">
    <div class="text-center mt-3">
      <mdb-btn @click="setGeneratedPhrase" color="primary" size="lg">Primary button</mdb-btn>
    </div>
    <hr class="my-2">




    <div v-for="(todo, index) in todos">
      <mdb-row class="my-4">
        <mdb-col sm="6">
          <mdb-card>
            <mdb-card-body>
              This is some text within a panel body.
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

    data: {
      name: 'kaki'
    },

  data(){
    return {
      active: 0,
      active2: 0,
      name: 'kaki',
      todos: [
        'app02-1',
        'app02-2',
        'app02-3'
      ]
    };
  },
  methods: {
    setGeneratedPhrase(e) {
      console.log('setGeneratedPhrase');
    }
  }  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
