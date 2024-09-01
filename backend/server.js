const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "14785236",
  database: "quiz",
});

app.post("/addFrage", (req, res) => {
  const sql = "INSERT INTO fragen1 (`frageText`,`antwort1`,`antwort2`,`antwort3`,`antwort4`,`correct`) VALUES(?)";

  const values = [
    
    req.body.frageText,
    req.body.antwort1,
    req.body.antwort2,
    req.body.antwort3,
    req.body.antwort4,
    req.body.correct

  ];

  
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.get("/frage", (req,res)=>
  {
      const q = "SELECT * FROM fragen1"
  
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
