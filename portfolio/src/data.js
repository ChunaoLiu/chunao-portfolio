

export const featuredPortfolio = [
    {
        id: 0,
        title: "WhiteBoard",
        description: "A Mobile IDE featuring tesseract OCR and real time compilation",
        img: "/assets/Whiteboard.png",
        webpage: "https://github.com/Anurag-Shah/WhiteBoard"
    },
    {
        id: 1,
        title: "Pow-Wow",
        description: "An Online on-demand consultation app",
        img: "/assets/Pow-Wow-Logo-2.jpg",
        webpage: "https://github.com/aNewbieProgrammer/Pow-Wow"
    },
    {
        id: 2,
        title: "MyPortfolio",
        description: "You're looking at it!",
        img: "/../favicon.ico",
        webpage: "https://github.com/aNewbieProgrammer/Portfolio"
    }
]

export const mobilePortfolio = [
    {
        id: 0,
        title: "WhiteBoard",
        description: "A Mobile IDE featuring tesseract OCR and real time compilation",
        img: "/assets/Whiteboard.png",
        webpage: "https://github.com/Anurag-Shah/WhiteBoard"
    },
    {
        id: 1,
        title: "Pow-Wow",
        description: "An Online on-demand consultation app",
        img: "/assets/Pow-Wow-Logo-2.jpg",
        webpage: "https://github.com/aNewbieProgrammer/Pow-Wow"
    },
]

export const webappPortfolio = [
    {
        id: 0,
        title: "MyPortfolio",
        description: "You're looking at it!",
        img: "/../favicon.ico",
        webpage: "https://github.com/aNewbieProgrammer/Portfolio"
    }
]

export const options_Language = {
    maintainAspectRatio: false,
    responsive: true,
    dynamicDisplay : true,
    scales: {
        y: {
            min: 0,
            max: 10,
            ticks: {
                stepSize: 2
            }
        }
    },
    animation: {
        duration: 2000,
        easing: "easeInBounce",
      },
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Proficient Languages',
        },
        deferred: {
            yOffset: '100%',
            delay: 1000000
        }
    },
};

export const options_Framework = {
    maintainAspectRatio: false,
    responsive: true,
    dynamicDisplay : true,
    scales: {
        y: {
            min: 0,
            max: 10,
            ticks: {
                stepSize: 2
            }
        }
    },
    animation: {
        duration: 2000,
        easing: "easeInBounce",
      },
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: "Proficient Framwork & Tools",
        },
        deferred: {
            xOffset: 150,
            yOffset: '50%',
            delay: 500
        }
    },
};

export const options_Cloud = {
    maintainAspectRatio: false,
    responsive: true,
    dynamicDisplay : true,
    scales: {
        y: {
            min: 0,
            max: 10,
            ticks: {
                stepSize: 2
            }
        }
    },
    animation: {
        duration: 2000,
        easing: "easeInBounce",
      },
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Familiar Cloud services / solution',
        },
        deferred: {
            xOffset: 150,
            yOffset: '50%',
            delay: 2000
        }
    },
};

export const LanguageSkillData = {
    labels: ['Java', 'JavaScript', 'C/C++', 'Python', 'HTML & CSS', 'MySQL', 'Swift'],
    datasets: [
      {
        label: 'Programming / Scripted Language Skills',
        data: [9, 7, 10, 9, 9, 6, 7],
        backgroundColor: [
          'rgba(22, 240, 238, 0.8)',
        ],
      },
    ],
  };

  export const FrameworkAndTools = {
    labels: ['Django', 'React', 'Xcode', 'React Native', 'Jenkins', 'Apache HTTP Server'],
    datasets: [
      {
        label: 'Frameworks & Tools',
        data: [9, 9, 8, 8, 9, 7],
        backgroundColor: [
          'rgba(22, 240, 238, 0.8)',
        ],
      },
    ],
  };

  export const Cloud = {
    labels: ['AWS', 'GCP', 'Azure'],
    datasets: [
      {
        label: 'Experience in Cloud solution',
        data: [7, 4, 2],
        backgroundColor: [
          'rgba(22, 240, 238, 0.8)',
        ],
      },
    ],
  };