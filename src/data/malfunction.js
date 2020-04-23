export const malfunction = {
  title: {
    text: "设备故障",
    textStyle: {
      align: "center",
      color: "#FFFFFF",
      fontSize: 20,
    },
    top: "5%",
    left: "center",
  },
  dataset: {
    source: [
      ["score", "amount", "product"],
      [89.3, 58212, "Matcha Latte"],
      [57.1, 78254, "Milk Tea"],
      [74.4, 41032, "Cheese Cocoa"],
      [50.1, 12755, "Cheese Brownie"],
      [89.7, 20145, "Matcha Cocoa"]
    ],
  },
  grid: { containLabel: true },
  xAxis: { name: "amount" },
  yAxis: { type: "category" },
  visualMap: {
    orient: "horizontal",
    left: "center",
    min: 10,
    max: 100,
    text: ["High Score", "Low Score"],
    // Map the score column to color
    dimension: 0,
    inRange: {
      color: ["#D7DA8B", "#E15457"],
    },
  },
  series: [
    {
      type: "bar",
      encode: {
        // Map the "amount" column to X axis.
        x: "amount",
        // Map the "product" column to Y axis
        y: "product",
      },
    },
  ],
};
