const express=require('express')
const sql=require('mysql');
const cores=require('cors');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const cookieParser=require('cookie-parser')
const app=express();
const salt=10;
const f=require('./userdatabase')
app.use(cores({
 origin:["http://localhost:3000"],
 methods:["POST","GET"],
 credentials:true
}
 
));
app.use(express.json());
app.use(cookieParser());
const db=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ecomart_users'
})

app.post('/signup',(req,res)=>{
    const sql1='insert into users(name,mail,password,phnumber) values(?)';
    bcrypt.hash(req.body.password.toString(),salt,(err,hash)=>{
      if(err) return res.json({Error:'error for hasing password '})
      const value=[
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.phnumber
    ]
//  create use personal table

   
      db.query(sql1,[value],(err,data)=>{
        if(err)
        {
          return res.json({Error:'Mail is already exist'});

        }
        else{
        return res.json({status:'Success'});}
    
      })
    
   
    })  
})
// logout and auth perpose
function verifyuser(req,res,next)
{
const token=req.cookies.token;
if(!token)
{
  return res.json({Error:'you are not autherized'})
}
else{
  jwt.verify(token,"jwt-privatekey",(err,decod)=>{
    if(err) 
    {
      return res.json({Error:'cookie was ot found'})
    }
    else{
      req.name=decod.name;
      console.log(req.name);
      next();
    }

  })
}
}
app.get('/',verifyuser,(req,res)=>{
return (res.json({status:'Success',name:req.name}))
})
// login purpose
app.post('/login',(req,res)=>{
  console.log('hello world')
  const sql1='select * from users where mail = ?';
  db.query(sql1,[req.body.email],(err,data)=>{
    if(err)
  
     return res.json({Error:'email was not found '})
  

  if(data.length > 0)
  {
    console.log('iam here  to check password')
    bcrypt.compare(req.body.password.toString(),data[0].password,(err,response)=>{
      if(err)  return res.json({Error:'password error'})
    
  if((req.body.password.toString()===data[0].password))
  {
    const name=data[0].name;
    const token=jwt.sign({name},"jwt-privatekey",{expiresIn:'1d'});
    res.cookie("token",token);
    console.log(data)
    return res.json({status:'Success',data})
  }
  else{
    return res.json({Error:' password wrong try again'})
  }
    })
  
  }
  else{
    return res.json({Error:'no uerr found at this email try another mail '})
  }


  })
})
// update user info like fname and lname
app.post('/userinfo',(req,res)=>{
  const updateQuery = 'UPDATE users SET ? WHERE ?';
 
    const value={
     firstname:req.body.firstname,
      lastname:req.body.lastname,
      gender:req.body.gender,
      phnumber:req.body.phnumber,
    }
  const condition={
   mail:req.body.email
  }
 console.log(req.body.gender)
    db.query(updateQuery,[value,condition],(err,data)=>{
      console.log(data)
      if(err)
      {
        return res.json({Error:'Error'});

      }
      else{
       if(data.affectedRows<=0)
       {

        return res.json({Error:'use same mail when your use in login'});

       }
       else{
        const sql1='select * from users where mail = ?';
        db.query(sql1,[req.body.email],(err,data1)=>{
          if(err)
          {
            return res.json({Error:'mail was not found '})
          }
          else{
            if(data.affectedRows<=0)
            {    
             return res.json({Error:'use same mail when your use in login'});
     
            }
            else{
             const sql1='select * from users where mail = ?';
             db.query(sql1,[req.body.email],(err,data1)=>{
               if(err)
               {
                 return res.json({Error:'mail was not found '})
               }
               else{
                 console.log(data1)
                 return res.json({status:'Success',data1});
               }
              })}
              
     
            }
         })
        }
       }
  
     })
  
})
// update address
app.post('/address',(req,res)=>{
  const updateQuery = 'INSERT INTO users_address SET ?';
 
    const value={
      name:req.body.name,
      mail:req.body.email,
     pincode:req.body.pincode,
     locality:req.body.locality,
     address:req.body.address,
     city:req.body.city,
     state:req.body.state,
     landmark:req.body.landmark,
     altnumber:req.body.altphone,
     addtype:req.body.addtype
    }
  const condition={
   mail:req.body.email
  }
   console.log(value)
    db.query(updateQuery,value,(err,data)=>{
      console.log(err)
      if(err)
      {
        return res.json({Error:'Error'});

      }
      else{
      
        const sql1='select * from users_address where mail = ?';
        db.query(sql1,[req.body.email],(err,data1)=>{
          if(err)
          {
            return res.json({Error:'mail was not found '})
          }
          else{
            console.log(data1)
            return res.json({status:'Success',data1});
          }
         })
         

       }

     })
  
})
// remove address addressdelete
app.post('/addressdelete',(req,res)=>{
 
  
  const selectQuery = 'delete  FROM users_address WHERE  address= ?';
   const values={
    address:req.body.values
    
   }
  console.log(req.body)
//   db.query(selectQuery, [productname], (err, results) => {
//     if (err) {
//       console.log('Error:', err);
//     }
//     else{
//       const sql1='select * from ecomartcart where mail = ?';
//       db.query(sql1,[mail],(err,data1)=>{
//         if(err)
//         {
//           return res.json({Error:'error at select '})
//         }
//         else{
//           console.log(data1.length)
//           return res.json({status:'Success',data1});
//         }
//        })} 
// })
})
// add to cart 
app.post('/addtocart1',(req,res)=>{
  const value={
    name:req.body[0].username,
    mail:req.body[0].usermail,
    productid:req.body[0].id,
    productname:req.body[0].productname,
    price:req.body[0].price,
    productimg:req.body[0].productimg,
  }

const query = 'INSERT INTO ecomartcart SET ?'; 
db.query(query, value, (err, results) => {
  if (err) {
    console.error('Error inserting data:', err);
  }    else{
    const sql1='select * from ecomartcart where mail = ?';
    db.query(sql1,[value.mail],(err,data1)=>{
      if(err)
      {
        return res.json({Error:'error at select '})
      }
      else{
        console.log(data1.length)
        return res.json({status:'Success',data1});
      }
     })}

  })
  

})
function fun1(productname) {
  const selectQuery = 'SELECT `count` FROM ecomartcart WHERE productname = ?';

  db.query(selectQuery, [productname], (err, results) => {
    if (err) {
      console.log('Error:', err);
    } else {
      if (results.length > 0) {
        var count1 = results[0].count;
        count1 = count1 + 1;

        const updateQuery = 'UPDATE ecomartcart SET `count` = ? WHERE productname = ?';

        db.query(updateQuery, [count1, productname], (err, data) => {
          if (err) {
            console.log('Error:', err);
          } else {
            console.log('Updated:');
          }
        });
      } else {
        console.log('Product not found.');
      }
    }
  });
}

app.post('/addtocart',(req,res)=>{
  const value={
    name:req.body[0].username,
    mail:req.body[0].usermail,
    productid:req.body[0].id,
    productname:req.body[0].productname,
    price:req.body[0].price,
    productimg:req.body[0].productimg,
    count:1,
  }

const query = 'INSERT INTO ecomartcart SET ?'; 
db.query(query, value, (err, results) => {
  if (err) {
    fun1(value.productname);
  }    else{
    const sql1='select * from ecomartcart where mail = ?';
    db.query(sql1,[value.mail],(err,data1)=>{
      if(err)
      {
        return res.json({Error:'error at select '})
      }
      else{
        console.log(data1.length)
        return res.json({status:'Success',data1});
      }
     })}

  })
  

})
// select query

// add to cart inc function
app.post('/addtocartinc',(req,res)=>{
  var  datat;
  console.log('iam here to add count')
  const selectQuery = 'SELECT `count` FROM ecomartcart WHERE productname = ?';
   const values={
    usermail:req.body[0].mail,
    productname:req.body[0].productname,
    opr:req.body[0].opr,
   }
  const productname=values.productname;
  const mail=values.usermail
  console.log(values.opr)
  db.query(selectQuery, [productname], (err, results) => {
    if (err) {
      console.log('Error:', err);
    } else {
      if (results.length > 0) {
        var count1 = results[0].count;
        if(values.opr=='inc')
        {
          count1 = count1 + 1;

        }
        else{
          count1 = count1 - 1;

        }

        const updateQuery = 'UPDATE ecomartcart SET `count` = ? WHERE productname = ?';

        db.query(updateQuery, [count1, productname], (err, data) => {
          if (err) {
            console.log('Error:', err);
          } else{
            const sql1='select * from ecomartcart where mail = ?';
            db.query(sql1,[mail],(err,data1)=>{
              if(err)
              {
                return res.json({Error:'error at select '})
              }
              else{
                console.log(data1.length)
                return res.json({status:'Success',data1});
              }
             })}
        });
      } else {
       
      }
     
    }
  });
})
// remove one element from cart
app.post('/removetocart',(req,res)=>{
 
  
  const selectQuery = 'delete  FROM ecomartcart WHERE productname = ?';
   const values={
    usermail:req.body[0].mail,
    productname:req.body[0].productname,
    
   }
  const productname=values.productname;
  const mail=values.usermail
  console.log(mail)
  db.query(selectQuery, [productname], (err, results) => {
    if (err) {
      console.log('Error:', err);
    }
    else{
      const sql1='select * from ecomartcart where mail = ?';
      db.query(sql1,[mail],(err,data1)=>{
        if(err)
        {
          return res.json({Error:'error at select '})
        }
        else{
          console.log(data1.length)
          return res.json({status:'Success',data1});
        }
       })} 
})
})

app.listen(8082,()=>{
    console.log('listening........')
})