const jobList = (req, res, next) => {
  res.render("jobList", {
    title: "TIM | Jobs",
    jobs: [
      {
        title: "Cashier",
        location: "New York, NY",
        description:
          "Looking for a cashier with excellent customer service skills. Must be able to handle cash transactions and assist customers. Previous cashier experience is a plus.",
        hourlyRate: 14.5,
        weeklyHours: 20,
        schedule: ["Mon", "Wed", "Fri"],
        tags: ["Retail", "Customer Service"],
        dateCreated: "2023-10-23",
      },
      {
        title: "Delivery Driver",
        location: "Los Angeles, CA",
        description:
          "We are seeking a responsible delivery driver to join our team. You will be responsible for delivering orders to customers' homes. A valid driver's license is required.",
        hourlyRate: 15.0,
        weeklyHours: 15,
        schedule: ["Tue", "Thu", "Sat"],
        tags: ["Delivery", "Driver"],
        dateCreated: "2023-10-23",
      },
      {
        title: "Bartender",
        location: "Chicago, IL",
        description:
          "We are looking for an experienced bartender to work in our lively bar. Must be familiar with making a variety of drinks and cocktails. Bartending certification is a plus.",
        hourlyRate: 13.0,
        weeklyHours: 10,
        schedule: ["Thu", "Fri", "Sat", "Sun"],
        tags: ["Bartending", "Hospitality"],
        dateCreated: "2023-10-23",
      },
      {
        title: "Tutor",
        location: "San Francisco, CA",
        description:
          "We need a tutor to help students with their homework and provide extra support in math and science. Previous tutoring experience is preferred.",
        hourlyRate: 18.0,
        weeklyHours: 12,
        schedule: ["Mon", "Wed"],
        tags: ["Education", "Tutoring"],
        dateCreated: "2023-10-23",
      },
      {
        title: "Server",
        location: "Miami, FL",
        description:
          "We are hiring servers for our busy restaurant. Applicants should have a friendly attitude and be able to handle a fast-paced environment.",
        hourlyRate: 12.5,
        weeklyHours: 15,
        schedule: ["Fri", "Sat", "Sun"],
        tags: ["Hospitality", "Restaurant"],
        dateCreated: "2023-10-23",
      },
    ],
  });
};

module.exports = {
  jobList,
};
