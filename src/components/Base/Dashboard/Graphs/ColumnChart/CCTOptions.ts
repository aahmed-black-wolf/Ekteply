export const options = {
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
      borderRadius: 5,
      borderRadiusApplication: "around",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  colors: ["#ffa458", "#0a0c22", "#58646d"],
  xaxis: {
    categories: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  fill: {
    opacity: 1,
  },
  legend: {
    fontSize: "15px",
    position: "bottom",
    fontWeight: "600",
    fontFamily: `"El Messiri", sans-serif`,
    horizontalAlign: "left",
    markers: {
      offsetX: 10,
    },
    itemMargin: {
      horizontal: 20,
      vertical: 20,
    },
  },
  tooltip: {
    y: {
      formatter: function (val: string) {
        return val;
      },
    },
  },
};

export const series = [
  {
    name: "عمليات البحث",
    data: [44, 55, 57, 56, 61, 58, 63],
  },
  {
    name: "عمليات المعالجه",
    data: [76, 85, 101, 98, 87, 105, 91],
  },
  {
    name: "عمليات التنزيل",
    data: [35, 41, 36, 26, 45, 48, 52],
  },
];
