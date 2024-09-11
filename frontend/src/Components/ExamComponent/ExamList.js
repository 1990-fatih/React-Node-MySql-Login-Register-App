import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";  // useParams ile URL parametresi alınıyor

const ExamList = () => {
  const { userId } = useParams();  // URL'deki userId'yi al
  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get("http://localhost:5000/exams");
      setExams(response.data);
    } catch (error) {
      console.error("Sınavlar getirilirken hata oluştu:", error);
    }
  };

  return (
    <div className="container">
      <h1>Mevcut Sınavlar</h1>
      <p>Kullanıcı ID: {userId}</p>  {/* Kullanıcı id'yi göstermek için */}
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>Başlık</th>
            <th>Açıklama</th>
            <th>Sınava Katıl</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.id}>
              <td>{exam.title}</td>
              <td>{exam.description}</td>
              <td>
                <a href={`/exam/${exam.id}`} className="btn btn-primary">
                  Sınava Katıl
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamList;
