var express=require('express');
var fs = require("fs");
var app=express();
var parser=require('body-parser');
var cors=require('cors');
var contents = fs.readFileSync("../assets/courses.json");
var jsonContent = JSON.parse(contents);

console.log('Running server');

app.use(parser.json());
app.route('/rest/api/post',cors()).post((req,res)=>{
    console.log("Post Invoked");
    var newcourse=req.body;
    let data={
      "courseId":newcourse.id,
      "courseName":newcourse.name,
      "coursePrice":newcourse.price
    }
    jsonContent.push(data);
      fs.writeFileSync('../assets/courses.json', JSON.stringify(jsonContent));  
});

app.route('/rest/api/update').post((req,res)=>{
  console.log("Update Invoked");
  var newcourse=req.body;
  let data={
    "courseId":newcourse.id,
    "courseName":newcourse.name,
    "coursePrice":newcourse.price
  }
  for(var j in jsonContent)
  if(j==newcourse.index)
  {
    jsonContent[j]=data;
  }
    fs.writeFileSync('../assets/courses.json', JSON.stringify(jsonContent));  
  
});

app.route('/rest/api/delete').post((req,res)=>{
  console.log("Delete Invoked");
  var deletefile=req.body;
  jsonContent.splice(deletefile.index,1);
  fs.writeFileSync('../assets/courses.json', JSON.stringify(jsonContent));
});

app.listen(8000);