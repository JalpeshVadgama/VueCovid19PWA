<template>
  <div style="text-align: center;">
    <md-card class="red" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Total confirmed cases</div>
        </md-card-header>
        <md-card-content>{{this.country.confirmed}}</md-card-content>
      </md-ripple>
    </md-card>
    <md-card class="blue" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Total active cases</div>
        </md-card-header>
        <md-card-content>{{this.country.active}}</md-card-content>
      </md-ripple>
    </md-card>
    <md-card class="green" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Total recovered</div>
        </md-card-header>
        <md-card-content>{{this.country.recovered}}</md-card-content>
      </md-ripple>
    </md-card>
    <md-card class="grey" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Total death</div>
        </md-card-header>

        <md-card-content>{{this.country.deaths}}</md-card-content>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
import store from "./../Store/store";
export default {
  name: "Home",
  data: () => ({
    country: {
      confirmed: 0,
      deaths: 0,
      recovered: 0
    }
  }),
  async mounted() {
    var promise = this.$store.dispatch("getData");
    promise
      .then(result => {
        console.log("then");
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.md-card {
  width: 300px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  color: white !important;
}
.red {
  background: #ff073a !important;
}
.blue {
  background: #0091ffe8 !important;
}
.green {
  background: rgba(40, 167, 69, 0.6) !important;
}
.grey {
  background: #6c757d !important;
}
</style>
