export const options = {
  plotOptions: {
    pie: {
      expandOnClick: false,
    },
  },
  legend: {
    fontSize: "15px",
    position: "right",
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
  labels: ["المستهلك من الباقه", "المتبقي من الباقه"],
  colors: ["#ffa458", "#0a0c22"],
  fill: {
    colors: ["#ffa458", "#0a0c22"],
  },
  dataLabels: {
    style: {
      colors: ["#0a0c22", "#ffa458"],
      position: "bottom",
    },
  },
  markers: {
    colors: ["#ffa458", "#0a0c22"],
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        legend: {
          position: "top",
          itemMargin: {
            horizontal: 5,
            vertical: 5,
          },
        },

        chart: {
          width: "96%",
        },
      },
    },
    {
      breakpoint: 377,
      options: {
        chart: {
          width: "85%",
        },
      },
    },
  ],
};
export const series = [30, 70];
