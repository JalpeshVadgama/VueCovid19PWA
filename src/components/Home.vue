<template>
  <div>
    <md-card class="red" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Total confirmed cases</div>
        </md-card-header>
        <md-card-content></md-card-content>
      </md-ripple>
    </md-card>
    <md-card class="blue" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Total active cases</div>
        </md-card-header>

        <md-card-content></md-card-content>
      </md-ripple>
    </md-card>
    <md-card class="green" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Total death</div>
        </md-card-header>

        <md-card-content></md-card-content>
      </md-ripple>
    </md-card>
    <md-card class="grey" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Total recovered</div>
        </md-card-header>

        <md-card-content></md-card-content>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
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
  background: #007bff !important;
}
.green {
  background: rgba(40, 167, 69, 0.6) !important;
}
.grey {
  background: #6c757d !important;
}
</style>
