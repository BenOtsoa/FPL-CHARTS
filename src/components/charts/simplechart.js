import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class SimpleChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    let { gw, rankingStore, team, manager_first_name, manager_last_name } =
      this.props === undefined ? null : this.props;
    let data = {
      labels: gw,
      datasets: [
        {
          label: `rank evolution for ${team} managed by ${manager_first_name} ${manager_last_name}`,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "transparent",
          data: rankingStore
        }
      ]
    };

    let options = {
      reverse: true
    };

    return (
      <div>
        <Line data={data} redraw />
      </div>
    );
  }
}

export default SimpleChart;
