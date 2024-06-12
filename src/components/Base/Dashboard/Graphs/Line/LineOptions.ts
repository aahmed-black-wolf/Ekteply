const getTodayDate = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDay();
  const monthFormatter = month < 10 ? `0${month}` : month;

  return `${day} / ${monthFormatter} / ${year}`;
};

function getDaysOfActiveMonth() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  // Calculate the number of days in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Create an array of day numbers as strings
  const dayNumbersArray = Array.from(
    { length: daysInMonth },
    (_, i) => `d${i + 1}`
  );

  return dayNumbersArray;
}

export const options = {
  abels: {
    enabled: true,
  },

  chart: {
    locales: [
      {
        name: "ar",
        options: {
          months: [
            "يناير",
            "فبراير",
            "مارس",
            "أبريل",
            "مايو",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر",
          ],
          shortMonths: [
            "يناير",
            "فبراير",
            "مارس",
            "أبريل",
            "مايو",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر",
          ],
          days: [
            "الأحد",
            "الاثنين",
            "الثلاثاء",
            "الأربعاء",
            "الخميس",
            "الجمعة",
            "السبت",
          ],
          shortDays: [
            "الأحد",
            "الاثنين",
            "الثلاثاء",
            "الأربعاء",
            "الخميس",
            "الجمعة",
            "السبت",
          ],
          toolbar: {
            exportToSVG: "تنزيل SVG",
            exportToPNG: "تنزيل PNG",
            menu: "القائمة",
            selection: "التحديد",
            selectionZoom: "تكبير التحديد",
            zoomIn: "تكبير",
            zoomOut: "تصغير",
            pan: "التمرير",
            reset: "إعادة تعيين التكبير",
          },
        },
      },
    ],
    defaultLocale: "ar",
  },

  colors: ["#ffa458", "#0a0c22"],

  stroke: {
    width: [4, 4],
    curve: "smooth",
  },

  plotOptions: {
    bar: {
      columnWidth: "20%",
    },
  },
  legend: {
    fontSize: "15px",
    position: "top",
    fontWeight: "600",
    fontFamily: `"El Messiri", sans-serif`,
    horizontalAlign: "right",
    markers: {
      offsetX: 10,
    },
    itemMargin: {
      horizontal: 20,
      vertical: 2,
    },
  },
  xaxis: {
    categories: getDaysOfActiveMonth(),
    axisTicks: {
      show: true,
    },
    title: {
      text: getTodayDate(),
      style: {
        color: "#ffa458",
      },
    },
  },

  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#ffa458",
      },
      labels: {
        style: {
          colors: "#ffa458",
        },
      },
    },

    {
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#0a0c22",
      },
      labels: {
        style: {
          colors: "#0a0c22",
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    x: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        stroke: {
          width: [3, 3],
          curve: "smooth",
        },
      },
    },
    {
      breakpoint: 500,
      options: {
        legend: {
          position: "bottom",
          horizontalAlign: "left",
        },
        chart: {
          toolbar: {
            show: false,
          },
        },
        stroke: {
          width: [2, 2],
          curve: "smooth",
        },
      },
    },
  ],
};

export const series = [
  {
    name: "عدد عمليات المعالجه و البحث",
    data: [1, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
  },
  {
    name: "عدد عمليات التنزيل",
    data: [10, 4, 3, 6, 2, 1, 3, 5],
  },
];
