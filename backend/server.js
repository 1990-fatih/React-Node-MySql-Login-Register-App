const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');



// CORS ve JSON yapılandırması
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "14785236",
  database: "signup",
});

db.connect(err => {
  if (err) throw err;
  console.log('Verbunden mit der MySQL-Datenbank...');
});

app.post('/addQuestion', (req, res) => {
  const { examId, questionText, correctAnswer, choices } = req.body;

  const questionQuery = `
    INSERT INTO questions (exam_id, question_text, correct_answer) 
    VALUES (?, ?, ?)
  `;
  
  db.query(questionQuery, [examId, questionText, correctAnswer], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Beim Hinzufügen der Frage ist ein Fehler aufgetreten.');
    }

    const questionId = result.insertId;  // Rufen Sie die ID der neu hinzugefügten Frage ab

    //Antworten hinzufügen
    const choiceQuery = `
      INSERT INTO choices (question_id, choice_text) 
      VALUES (?, ?)
    `;
    
    choices.forEach(choice => {
      db.query(choiceQuery, [questionId, choice], (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Şıklar eklenirken hata oluştu.');
        }
      });
    });

    res.send('Anworten und Optionen wurden erfolgreich hinzugefügt.');
  });
});

app.get('/questions', (req, res) => {
  const query = `
    SELECT q.id AS questionId, q.question_text AS questionText, q.correct_answer AS correctAnswer, 
           GROUP_CONCAT(c.choice_text) AS choices
    FROM questions q
    LEFT JOIN choices c ON q.id = c.question_id
    GROUP BY q.id
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('MySQL Fehler:', err.sqlMessage);
      return res.status(500).send('Sorular alınırken hata oluştu.');
    }
    
  // Trennen Sie die Optionen als Liste
    const formattedResults = results.map(row => ({
      ...row,
      choices: row.choices.split(',')
    }));

    res.json(formattedResults);
  });
});

app.delete('/questions/:id', (req, res) => {
  const questionId = req.params.id;

  const deleteChoicesQuery = 'DELETE FROM choices WHERE question_id = ?';
  const deleteQuestionQuery = 'DELETE FROM questions WHERE id = ?';

  db.query(deleteChoicesQuery, [questionId], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Şıklar silinirken hata oluştu.');
    }

    db.query(deleteQuestionQuery, [questionId], (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Soru silinirken hata oluştu.');
      }

      res.send('Soru başarıyla silindi.');
    });
  });
});

// PUT: Fragen Update
app.put('/questions/:id', (req, res) => {
  const questionId = req.params.id;
  const { questionText, correctAnswer, choices } = req.body;

  const updateQuestionQuery = `
    UPDATE questions 
    SET question_text = ?, correct_answer = ? 
    WHERE id = ?
  `;

  db.query(updateQuestionQuery, [questionText, correctAnswer, questionId], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Soru güncellenirken hata oluştu.');
    }

    const deleteChoicesQuery = 'DELETE FROM choices WHERE question_id = ?';
    const insertChoicesQuery = 'INSERT INTO choices (question_id, choice_text) VALUES (?, ?)';

    // Zuerst die alten Optionen löschen
    db.query(deleteChoicesQuery, [questionId], (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Beim Löschen von Optionen ist ein Fehler aufgetreten.');
      }

       //Neue Optionen hinzufügen
      choices.forEach((choice) => {
        db.query(insertChoicesQuery, [questionId, choice], (err) => {
          if (err) {
            console.error(err);
            return res.status(500).send('Şıklar eklenirken hata oluştu.');
          }
        });
      });

      res.send('Soru başarıyla güncellendi.');
    });
  });
});

const bcrypt = require('bcrypt');

// POST: Neu User Hinzufügen************

app.post('/api/users', (req, res) => {
  const { firstName, lastName, birthDate, email, password, role } = req.body;

  const createUserQuery = `
    INSERT INTO users (first_name, last_name, birth_date, email, password, role)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(createUserQuery, [firstName, lastName, birthDate, email, password, role], (err, result) => {
    if (err) {
      console.error('Kullanıcı oluşturulamadı:', err);
      return res.status(500).send({ success: false, message: 'Kullanıcı oluşturulamadı.' });
    }

    res.status(201).send({ success: true, message: 'Kullanıcı başarıyla oluşturuldu!' });
  });
});

// API zum Abrufen von Prüfungsfragen
app.get('/api/exam/:examId/questions', (req, res) => {
  const examId = req.params.examId;
  const query = `
    SELECT q.id AS questionId, q.question_text, q.correct_answer, c.id AS choiceId, c.choice_text
    FROM questions q
    LEFT JOIN choices c ON q.id = c.question_id
    WHERE q.exam_id = ?
  `;

  db.query(query, [examId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

   // Bearbeiten Sie die Fragen und Optionen und senden Sie sie
    const questions = [];
    results.forEach(row => {
      let question = questions.find(q => q.id === row.questionId);
      if (!question) {
        question = {
          id: row.questionId,
          questionText: row.question_text,
          correctAnswerId: row.correct_answer,
          choices: []
        };
        questions.push(question);
      }
      question.choices.push({ id: row.choiceId, choiceText: row.choice_text });
    });

    res.json(questions);
  });
});

// API zum Speichern des Prüfungsergebnisses
app.post('/api/save-result', (req, res) => {
  const { userId, examId, score } = req.body;
  const query = 'INSERT INTO exam_results (user_id, exam_id, score) VALUES (?, ?, ?)';

  db.query(query, [userId, examId, score], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Ergebnis erfolgreich gespeichert.' });
  });
});

// Giriş işlemi için POST route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const loginQuery = `
    SELECT * FROM users WHERE email = ? AND password = ?
  `;

  db.query(loginQuery, [email, password], (err, results) => {
    if (err) {
      console.error('Veritabanı hatası:', err);
      return res.status(500).send({ success: false, message: 'Veritabanı hatası' });
    }

    if (results.length === 0) {
      // Kullanıcı bulunamadıysa
      return res.status(401).send({ success: false, message: 'Geçersiz email veya şifre' });
    }

    // Kullanıcı bulundu, rolüne göre cevap gönder
    const user = results[0];
    res.status(200).send({
      success: true,
      message: 'Giriş başarılı',
      userId: user.id,
      role: user.role
    });
  });
});

//User abrufen
app.get('/users', (req, res) => {
  const query = 'SELECT id, first_name, last_name, email, birth_date, role FROM users';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Kullanıcılar listelenirken hata oluştu:', err);
      return res.status(500).send('Veritabanı hatası.');
    }
    res.json(results);
  });
});

app.put('/users/:id', (req, res) => {
  const { first_name, last_name, email, birth_date, role, password } = req.body;
  const query = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, birth_date = ?, role = ?, password = ? WHERE id = ?';
  db.query(query, [first_name, last_name, email, birth_date, role, password, req.params.id], (err) => {
    if (err) {
      console.error('Kullanıcı güncellenirken hata oluştu:', err);
      return res.status(500).send('Kullanıcı güncellenemedi.');
    }
    res.send('Kullanıcı başarıyla güncellendi.');
  });
});
//User Delete
app.delete('/users/:id', (req, res) => {
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [req.params.id], (err) => {
    if (err) {
      console.error('Kullanıcı silinirken hata oluştu:', err);
      return res.status(500).send('Kullanıcı silinemedi.');
    }
    res.send('Kullanıcı başarıyla silindi.');
  });
});

//User Update
app.put('/users/:id', (req, res) => {
  const { first_name, last_name, email, birth_date, role, password } = req.body;
  const query = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, birth_date = ?, role = ?, password = ? WHERE id = ?';
  db.query(query, [first_name, last_name, email, birth_date, role, password, req.params.id], (err) => {
    if (err) {
      console.error('Kullanıcı güncellenirken hata oluştu:', err);
      return res.status(500).send('Kullanıcı güncellenemedi.');
    }
    res.send('Kullanıcı başarıyla güncellendi.');
  });
});

// Sınavları listeleme endpoint'i
app.get('/exams', (req, res) => {
  const query = 'SELECT * FROM exams';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Sınavlar getirilirken hata oluştu:', err);
      return res.status(500).send('Sınavlar getirilemedi.');
    }
    res.json(results);
  });
});

// Sınav sonucunu kaydetme endpoint'i
app.post('/save-result', (req, res) => {
  const { userId, examId, score } = req.body;
  const query = 'INSERT INTO exam_results (user_id, exam_id, score) VALUES (?, ?, ?)';
  db.query(query, [userId, examId, score], (err) => {
    if (err) {
      console.error('Sınav sonucu kaydedilirken hata oluştu:', err);
      return res.status(500).send('Sınav sonucu kaydedilemedi.');
    }
    res.send('Sınav sonucu başarıyla kaydedildi.');
  });
});

//Starten Sie den Server
app.listen(5000, () => {
  console.log('Der Server läuft auf Port 5000...');
});