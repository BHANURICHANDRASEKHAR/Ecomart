
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "martusers"
});

function fun(dbname)
{
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    const name1 = dbname.toString();
    var sql = `CREATE TABLE ${name1} (name VARCHAR(255),img varchar(255),product_name varchar(255),price varchar(30))`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created"+result);
    });
  });
}
module.exports={fun}

 // const sql1='select * from ecomartcart where mail = ?';
    // db.query(sql1,[value.mail],(err,data1)=>{
    //   if(err)
    //   {
    //     return res.json({Error:'error at select '})
    //   }
    //   else{
    //     console.log(data1.length)
    //     return res.json({status:'Success',data1});
    //   }
    //  })