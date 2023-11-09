const axios = require("axios");

const server =
  process.env.NODE_ENV == "PRODUCTION"
    ? "https://tim-2k4a.onrender.com"
    : "http://localhost:2048";

const _renderJobs = (req, res, data) => {
  res.render("jobList", {
    title: "TIM | Jobs",
    jobs: data,
  });
};

const jobList = async (req, res) => {
  axios
    .get(server + "/api/jobs")
    .then((response) => {
      _renderJobs(req, res, response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  jobList,
};
