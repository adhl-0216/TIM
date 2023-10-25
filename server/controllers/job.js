const jobList = (req, res, next) => {
  res.render("jobList", {
    title: "TIM | Jobs",
    jobs: [
      {
        title: "Part-Time Barista",
        address: "123 Main Street, Anytown",
        description:
          "Join our team and showcase your coffee-making skills in a friendly atmosphere. Prior experience in a café is a plus.",
        hourlyRate: 12.5,
        weeklyHours: 20,
        schedule: ["Mon", "Wed", "Fri"],
        tags: ["Food Service", "Hospitality"],
        dateCreated: "2023-10-12T08:00:00Z".substring(0, 10),
      },
      {
        title: "Library Assistant",
        address: "456 Elm Avenue, Cityville",
        description:
          "Help patrons find books, manage check-outs, and maintain a quiet library environment. Ideal for book lovers.",
        hourlyRate: 14.25,
        weeklyHours: 12,
        schedule: ["Tue", "Thu", "Sat"],
        tags: ["Education", "Library"],
        dateCreated: "2023-10-11T10:30:00Z".substring(0, 10),
      },
      {
        title: "Retail Sales Associate",
        address: "789 Oak Street, Suburbia",
        description:
          "Work in a popular retail store, assist customers, and maintain product displays. Friendly and outgoing personality preferred.",
        hourlyRate: 13.75,
        weeklyHours: 15,
        schedule: ["Sat", "Sun"],
        tags: ["Retail", "Sales"],
        dateCreated: "2023-10-10T15:15:00Z".substring(0, 10),
      },
      {
        title: "Dog Walker",
        address: "321 Park Avenue, Townsville",
        description:
          "Enjoy the outdoors while helping pet owners by walking their dogs. No prior experience required, but a love for animals is a must.",
        hourlyRate: 12.4,
        weeklyHours: 10,
        schedule: ["Mon", "Wed", "Fri"],
        tags: ["Pet Care", "Outdoor"],
        dateCreated: "2023-10-09T11:45:00Z".substring(0, 10),
      },
      {
        title: "Data Entry Clerk",
        address: "101 Business Boulevard, Metropolis",
        description:
          "Accurately input data into spreadsheets and databases. Strong attention to detail is essential for this role.",
        hourlyRate: 13.0,
        weeklyHours: 8,
        schedule: ["Tue", "Thu"],
        tags: ["Office", "Data Entry"],
        dateCreated: "2023-10-08T09:20:00Z".substring(0, 10),
      },
    ],
  });
};

module.exports = {
  jobList,
};
