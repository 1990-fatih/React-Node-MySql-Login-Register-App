const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "quiz",
});

app.post("/singin", (req, res) => {
  const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES(?)";

  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.get("/frage", (req,res)=>
  {
      const q = "SELECT * FROM fragen"
  
      db.query(q,(err,data)=>{
          if(err) return res.json(err) 
              return res.json(data)
  
      })
  })

app.post("/get", (req, res) => {
    const q = "SELECT * FROM login WHERE `email`= ? AND `password`= ?";
  
    db.query(q, [req.body.email, req.body.password], (err, data) => {
      if (err) {
        return res.json("err");
      }
      if (data.length > 0) {
        return res.json("Success");
      } else {
        return res.json("Faile");
      }
    });
  });
app.listen(8800, () => {
  console.log("Database connected");
});
