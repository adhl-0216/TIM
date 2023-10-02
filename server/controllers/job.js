const home = (req, res, next) => {
    res.render("job-lists", { title: "Jobs" });
  };
  


module.exports = {
    home
};
  