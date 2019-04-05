<template>

  <mdb-container>
    <hr class="my-2">
    <div class="text-center mt-3">
      <mdb-btn @click="setGeneratedPhrase" color="primary" size="lg">Primary button</mdb-btn>
    </div>
    <hr class="my-2">

    <mdb-row>
    </mdb-row>

    <mdb-row class="mt-4">
      <mdb-card>
        <mdb-card-body>
          This is some text within a panel body.
        </mdb-card-body>
      </mdb-card>
    </mdb-row>



    <mdb-row class="my-4">
      <mdb-col sm="6">
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title>Special title treatmenttttttt</mdb-card-title>
            <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
            <mdb-btn color="primary">go somewhere</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>

      <mdb-col sm="6">
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title>Special title treatmenaaaaa</mdb-card-title>
            <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
            <mdb-btn color="primary">go somewhere</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>



    
    <mdb-row class="my-4">
      <mdb-col md="6">

        <mdb-card color="indigo" class="text-center">
          <mdb-card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </mdb-card-body>
        </mdb-card>

        <br/>

        <mdb-card color="pink lighten-2" class="text-center">
          <mdb-card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </mdb-card-body>
        </mdb-card>

        <br/>

        <mdb-card color="info-color" class="text-center">
          <mdb-card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </mdb-card-body>
        </mdb-card>

      </mdb-col>
      <mdb-col md="6">

        <mdb-card color="red lighten-1" class="text-center">
          <mdb-card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </mdb-card-body>
        </mdb-card>

        <br/>

        <mdb-card color="success-color" class="text-center">
          <mdb-card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </mdb-card-body>
        </mdb-card>

        <br/>

        <mdb-card color="mdb-color lighten-2" class="text-center">
          <mdb-card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </mdb-card-body>
        </mdb-card>

      </mdb-col>
    </mdb-row>



    <mdb-row class="mt-4">
      <mdb-card-group deck>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This content is
              a little bit longer.</mdb-card-text>
          </mdb-card-body>
          <mdb-card-footer small muted>Last updated 3 mins ago</mdb-card-footer>
        </mdb-card>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This panel has supporting text below as a natural lead-in to additional content.</mdb-card-text>
          </mdb-card-body>
          <mdb-card-footer small muted>Last updated 3 mins ago</mdb-card-footer>
        </mdb-card>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This panel has even
              longer content than the first to show that equal height action.</mdb-card-text>
          </mdb-card-body>
          <mdb-card-footer small muted>Last updated 3 mins ago</mdb-card-footer>
        </mdb-card>
      </mdb-card-group>
    </mdb-row>
    
    <mdb-row class="mt-4">
      <mdb-card-group column>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title that wraps to a new line</mdb-card-title>
            <mdb-card-text>This is a longer panel with supporting text below as a natural lead-in to additional content. This content is
              a little bit longer.</mdb-card-text>
          </mdb-card-body>
        </mdb-card>
        <mdb-card class="p-3">
          <blockquote class="blockquote mb-0 card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <mdb-footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </mdb-footer>
          </blockquote>
        </mdb-card>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This panel has supporting text below as a natural lead-in to additional content.</mdb-card-text>
            <mdb-card-text small muted>Last updated 3 mins ago</mdb-card-text>
          </mdb-card-body>
        </mdb-card>

        <mdb-card color="primary-color" text="white" class="text-center p-3">
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
            <mdb-footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </mdb-footer>
          </blockquote>
        </mdb-card>

        <mdb-card class="text-center">
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This panel has supporting text below as a natural lead-in to additional content.</mdb-card-text>
            <mdb-card-text small muted>Last updated 3 mins ago</mdb-card-text>
          </mdb-card-body>
        </mdb-card>

        <mdb-card class="text-right p-3">
          <blockquote class="blockquote mb-0 card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <mdb-footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </mdb-footer>
          </blockquote>
        </mdb-card>

        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This panel has even
              longer content than the first to show that equal height action.</mdb-card-text>
            <mdb-card-text small muted>Last updated 3 mins ago</mdb-card-text>
          </mdb-card-body>
        </mdb-card>

      </mdb-card-group>
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
  // data(){
  //   return {
  //     active: 0,
  //     active2: 0
  //   };
  // },
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
