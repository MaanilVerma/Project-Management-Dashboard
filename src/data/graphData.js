export const lineOptions = {
  responsive: true,
  legend: {
    position: "top",
    display: false,
    labels: {
      boxWidth: 0,
    },
  },
  scales: {
    xAxes: [
      {
        ticks: { display: true },
      },
    ],
  },
};

export const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Cost",
      data: [0, 1000, 3500, 3200, 4000, 5500, 6500],
      fill: false,
      borderColor: "#212A53",
    },
  ],
};

export const donughtData = {
  labels: ["Over Budget", "On Budget", "Under Budget"],
  datasets: [
    {
      data: [2500, 4000, 6000],
      backgroundColor: ["#D1071C", "#7C8BCB", "#00DDCD"],
      borderColor: ["#D1071C", "#7C8BCB", "#00DDCD"],
      borderWidth: 1,
    },
  ],
};

export const donughtOptions = {
  legend: {
    position: "bottom",
    labels: {
      boxWidth: 5,
    },
  },
  cutoutPercentage: 50,
  animation: {
    animateScale: true,
    animateRotate: true,
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        let dataset = data.datasets[tooltipItem.datasetIndex];
        let total = dataset.data.reduce((prev, current) => prev + current);
        let currentValue = dataset.data[tooltipItem.index];
        let percentage = Math.floor((currentValue / total) * 100 + 0.5);
        return `${data.labels[tooltipItem.index]}: ${percentage}%`;
      },
    },
  },
};
