import React, { Component } from "react";
import { apiManagerDetails, apiManager } from "../helpers/axios";
import SimpleChart from "../components/charts/simplechart";

let count = 1;

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = { rankingStore: [], gw: [] };
  }

  componentDidMount() {
    // ID ALEX: 54232 ID CYR: 217305 ID BEN: 1407814
    this.loadRanking(217305, count);

    apiManagerDetails(217305).then(res =>
      this.setState({
        team: res.data.entry.name,
        manager_first_name: res.data.entry.player_first_name,
        manager_last_name: res.data.entry.player_last_name
      })
    );
  }

  loadRanking(managerId, gwNumber) {
    apiManager(managerId, count).then(res => {
      if (res.data.entry_history.rank === null) {
        return;
      }
      this.state.rankingStore.push(-res.data.entry_history.overall_rank);
      this.state.gw.push(count);
      count++;
      this.loadRanking(managerId, count);
    });
  }

  render() {
    return (
      <div>
        <h1>FPL Charts</h1>
        <SimpleChart {...this.state} />
      </div>
    );
  }
}

export default Profil;
