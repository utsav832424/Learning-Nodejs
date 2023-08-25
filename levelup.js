require("dotenv").config();
const express = require("express");
 app =  module.exports=express(); 
const courseRouter =  require("./api/course/course.router");
const masterRouter = require("./api/mastercourse/mastercourse.router");
const userRouter = require ("./api/users/user.router");
const jobRouter = require ("./api/jobs/job.router");
const bannerRouter = require ("./api/banner/banner.router");
const certificatesRouter = require ("./api/certificates/certificates.router");
const recipeRouter = require ("./api/recipe/recipe.router");
const videoRouter = require ("./api/youtube/youtube.router");
const leaveRouter = require ("./api/leave/leave.router");
const attendenceRouter = require ("./api/attendence/attendence.router");

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json()); 

app.use(express.json());

  
app.use("/api/course", courseRouter); 
app.use("/api/users", userRouter); 
app.use("/api/mastercourse", masterRouter); 
app.use("/api/jobs", jobRouter); 
app.use("/api/banner", bannerRouter); 
app.use("/api/certificates", certificatesRouter);
app.use("/api/recipe", recipeRouter);
app.use("/api/youtube", videoRouter);
app.use("/api/leave", leaveRouter);
app.use("/api/attendence", attendenceRouter);

app.listen(process.env.APP_PORT, ()=> {
    console.log("server up and running on port:" , process.env.APP_PORT);
});