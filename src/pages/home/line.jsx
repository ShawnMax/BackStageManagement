import React from "react"
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from "bizcharts"
import DataSet from "@antv/data-set"

export default class Line extends React.Component {
  render() {
    const data = [
      {
        month: "Jan",
        Clothing: 7.0,
        Gaming: 3.9,
        Music: 5.9
      },
      {
        month: "Feb",
        Clothing: 6.9,
        Gaming: 4.2,
        Music: 1.9
      },
      {
        month: "Mar",
        Clothing: 9.5,
        Gaming: 5.7,
        Music: 3.9
      },
      {
        month: "Apr",
        Clothing: 14.5,
        Gaming: 8.5,
        Music: 5.5
      },
      {
        month: "May",
        Clothing: 18.4,
        Gaming: 11.9,
        Music: 8.9
      },
      {
        month: "Jun",
        Clothing: 21.5,
        Gaming: 15.2,
        Music: 10.0
      },
      {
        month: "Jul",
        Clothing: 25.2,
        Gaming: 17.0,
        Music: 12.9
      },
      {
        month: "Aug",
        Clothing: 26.5,
        Gaming: 16.6,
        Music: 15.9
      },
      {
        month: "Sep",
        Clothing: 23.3,
        Gaming: 14.2,
        Music: 20.7
      },
      {
        month: "Oct",
        Clothing: 18.3,
        Gaming: 10.3,
        Music: 25.9
      },
      {
        month: "Nov",
        Clothing: 13.9,
        Gaming: 6.6,
        Music: 30.9
      },
      {
        month: "Dec",
        Clothing: 9.6,
        Gaming: 4.8,
        Music: 35.9
      }
    ]
    const ds = new DataSet()
    const dv = ds.createView().source(data)
    dv.transform({
      type: "fold",
      fields: ["Clothing", "Gaming", "Music"],
      // 展开字段集
      key: "city",
      // key字段
      value: "temperature" // value字段
    })
    const cols = {
      month: {
        range: [0, 1]
      }
    }
    return (
      <div style={{float: 'right', width: 750, height: 300}}>
        <Chart height={250} data={dv} scale={cols} forceFit>
          <Legend/>
          <Axis name="month"/>
          <Axis
            name="temperature"
            label={{
              formatter: val => `${val},000`
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="month*temperature"
            size={2}
            color={"city"}
            shape={"smooth"}
          />
          <Geom
            type="point"
            position="month*temperature"
            size={4}
            shape={"circle"}
            color={"city"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      </div>
    )
  }
}
