<template>
  <div style="padding-top:20px !important;">
    <div style="text-align: center;">
      <md-card class="red" md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">Total confirmed cases</div>
          </md-card-header>
          <md-card-content>
            <span v-if="this.country">{{this.country.confirmed}}</span>
          </md-card-content>
        </md-ripple>
      </md-card>
      <md-card class="blue" md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">Total active cases</div>
          </md-card-header>
          <md-card-content>
            <span v-if="this.country">{{this.country.active}}</span>
          </md-card-content>
        </md-ripple>
      </md-card>
      <md-card class="green" md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">Total recovered</div>
          </md-card-header>
          <md-card-content>
            <span v-if="this.country">{{this.country.recovered}}</span>
          </md-card-content>
        </md-ripple>
      </md-card>
      <md-card class="grey" md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">Total death</div>
          </md-card-header>

          <md-card-content>
            <span v-if="this.country">{{this.country.deaths}}</span>
          </md-card-content>
        </md-ripple>
      </md-card>
    </div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div v-if="this.statecases" style="text-align: center;">
      <md-table
        v-model="this.statecases"
        md-sort="state"
        md-sort-order="asc"
        md-card
        md-fixed-header
      >
        <md-table-toolbar>
          <h1 class="md-title">Statewise Cases</h1>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="State" md-text>
            <strong>{{ item.state }}</strong>
          </md-table-cell>
          <md-table-cell md-label="Confirmed" md-numeric>
            <span style="color:#ff073a">{{ item.confirmed }}</span>
          </md-table-cell>
          <md-table-cell md-label="Active" md-numeric>
            <span style="color:#0091ffe8">{{ item.active }}</span>
          </md-table-cell>
          <md-table-cell md-label="Recovered" md-numeric>
            <span style="color:rgba(40, 167, 69, 0.6)">{{ item.recovered }}</span>
          </md-table-cell>
          <md-table-cell md-label="Death" md-numeric>{{ item.deaths }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>

<script>
import store from "./../Store/store";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["country", "statecases"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.md-table {
  width: 94% !important;
}
.md-card {
  width: 22%;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  color: white !important;
  min-width: 300px;
}
.md-card-content {
  font-size: 20px !important;
  font-style: italic;
}
.md-card-header {
  font-size: 30px;
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
