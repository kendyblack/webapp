var app = require('express')(),
   port = process.env.PORT || 3000;

app.get('/',function(req,res){
    res.sendFile(__dirname + "/demo.html");
})

app.listen(port, function() {
  console.log('Listening on port ' + port)
})
Trong thư mục ứng dụng mình tạo 1 file demo.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Demo Application</title>
    <link rel="stylesheet" href="/public/css/style.css">
</head>
<body>
<h1> Welcome to your basic web app structure </h1>
<p>
    If the title above is red
    then Nginx is serving static files!
</p>
</body>
</html>
