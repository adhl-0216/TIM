const axios = require("axios");

const apiOptions = {
  server: "localhost:3000",
};

const _renderJobs = (req, res, data) => {
  res.render("jobList", {
    title: "TIM | Jobs",
    jobs: data,
  });
};

const jobList = async (req, res) => {
  axios.get("http://localhost:3000/api/jobs")
    .then((response) => {
      _renderJobs(req, res, response.data);
    }).catch((error) => {console.log(error);});
};

module.exports = {
  jobList,
};
