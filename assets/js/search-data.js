// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "You can download the PDF version of my CV by clicking on the button on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Here you will find the collection of my projects. ⚠️ This section is still under construction!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "projects-mpc-controller-for-a-rocket-prototype",
          title: 'MPC Controller for a Rocket Prototype',
          description: "Advanced control systems for a rocket prototype using Model Predictive Control.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_mpc_project/";
            },},{id: "projects-mobile-robotics-project",
          title: 'Mobile Robotics Project',
          description: "Integration of vision, navigation, and filtering for autonomous Thymio robot navigation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_mobile_project/";
            },},{id: "projects-distributed-mpc-for-miniature-hovercraft",
          title: 'Distributed MPC for Miniature Hovercraft',
          description: "Semester project on distributed formation control using Model Predictive Control (DMPC), culminating in a paper for ICRA 2025.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_hovercraft/";
            },},{id: "projects-firmware-development-for-a-sensorized-pleurobot",
          title: 'Firmware Development for a Sensorized Pleurobot',
          description: "Enhancing the Pleurobot&#39;s capabilities with real-time control, ROS2 integration, and advanced communication systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_pleurobot/";
            },},{id: "projects-sensor-integration-on-robotic-platform-paquitop",
          title: 'Sensor Integration on Robotic Platform Paquitop',
          description: "Designing and implementing a sensor integration system for enhanced obstacle detection on the Paquitop robotic platform.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_paquitop/";
            },},{id: "projects-onboard-computer-programming-for-swiss-solar-boat",
          title: 'Onboard Computer Programming for Swiss Solar Boat',
          description: "Developing a flexible, modular framework for onboard electronics and software in a sustainable hydrogen-powered boat.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_ssb/";
            },},{id: "projects-stallaini-energy-and-automation-system",
          title: 'Stallaini Energy and Automation system',
          description: "Developing a sustainable off-grid energy system, including photovoltaic and water management, remote control and automation features.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_stallaini/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%72%69%6C%6C%6F%61%6E%64%72%65%61%36@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/grilloandrea6", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/grilloandrea6", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
