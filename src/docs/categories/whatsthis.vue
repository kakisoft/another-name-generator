<template>
    <div>
      <mdb-edge-header color="teal darken-1"/>
      <div class="container free-bird">
        <mdb-row>
          <mdb-col md="10" class="mx-auto float-none white z-depth-1 py-2 px-2">
            <mdb-card-body>
              <p>異名ってありますよね！</p>
              <p>
                「死の天使」とか<br>
                「砂漠の狐」とか<br>
                「音速の貴公子」とか、そういうの。
              </p>
              <p>
                いいのが思いつかない時に、ランダムに言葉組み合わせて、えいやって生成しちゃうサービスです。
              </p>
              <p>
                出てくる言葉は、今のところ英語オンリーです。<br>
                そのうち日本語訳が出てくる機能を追加するかもしれません。
              </p>
              <p>
                作ったの、こんな奴。→
                <a class="blue-text mr-1" href="https://twitter.com/kakisoft_tab"><mdb-icon fab icon="twitter" size="2x" /></a>
              </p>
            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </div>
    </div>
</template>

<script>
import { mdbCol, mdbRow, mdbIcon, mdbEdgeHeader, mdbCardBody } from 'mdbvue';

export default {
  name: 'HomePage',
  components: {
    mdbCol,
    mdbRow,
    mdbIcon,
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
