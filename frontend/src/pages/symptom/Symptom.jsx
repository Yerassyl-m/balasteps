import React, { useState, useEffect } from "react";
import "./Symptom.css";
import Headerside from "../../components/headerside/Headerside";
import Footer from "../../components/footer/Footer";

const Symptom = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const addSymptom = () => {
    const newSymptom = {
      id: Date.now(),
      title: "",
      description: "",
      date: "",
    };
    setSymptoms([...symptoms, newSymptom]);
  };

  const deleteSymptom = (id) => {
    setSymptoms(symptoms.filter((symptom) => symptom.id !== id));
  };

  const saveSymptoms = () => {
    const savedSymptoms = symptoms.map((symptom) => ({
      title: symptom.title,
      description: symptom.description,
      date: symptom.date,
    }));
    localStorage.setItem("symptoms", JSON.stringify(savedSymptoms));
    alert("Symptoms saved!");
  }

  useEffect(() => {
    const savedSymptoms = JSON.parse(localStorage.getItem("symptoms"));
    if (savedSymptoms) {
      setSymptoms(savedSymptoms.map((symptom, index) => ({
        id: Date.now() + index,
        ...symptom,
      })));
    }
  }, []);

  const updateSymptom = (id, field, value) => {
    setSymptoms(
      symptoms.map((symptom) =>
        symptom.id === id ? { ...symptom, [field]: value } : symptom
      )
    );
  };


  return (
    <div className="symptom_list">
      <Headerside isOpen={menuOpen} setIsOpen={setMenuOpen} />

      <div className={`symptom_inside ${menuOpen ? "shifted" : ""}`}>

        <div className="symptom_title">
          <h1>Symptom Tracker</h1>
        </div>

        <button onClick={addSymptom} className="symptom_add">
          + Add Symptom
        </button>

        <div className="symptom_form_container">
          <div className="symptom_form" style={{ marginTop: "20px", padding: "20px", }}>
            {symptoms.map((symptom, index) => (
              <div key={symptom.id} className="symptom_id">
                <div className="flex justify-between items-center border-b pb-2 mb-2">
                  <div className="symptom_form_inside">
                    <input
                      type="text"
                      placeholder={`Symptoms ${index + 1}`}
                      value={symptom.title}
                      onChange={(e) =>
                        updateSymptom(symptom.id, "title", e.target.value)

                      }
                      className="font-bold text-lg border-none outline-none flex-1"
                    />
                    <div className="symptom_form_date">
                      <label htmlFor={`date-${symptom.id}`}>📅 Date</label>
                      <input
                        id={`date-${symptom.id}`}
                        type="date"
                        value={symptom.date}
                        onChange={(e) =>
                          updateSymptom(symptom.id, "date", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>

                <textarea
                  type="text"
                  placeholder={`Actions/therapies for the symptom ${index + 1}`}
                  value={symptom.description}
                  onChange={(e) =>
                    updateSymptom(symptom.id, "description", e.target.value)
                  }
                  className="symptom_form_textarea"
                  rows={3}
                />

                <div className="button_all_symptom">

                  <div className="symptom_delete">
                    <button
                      onClick={() => deleteSymptom(symptom.id)}
                      className="delete_button_symptom"
                    >
                      🗑 Удалить
                    </button>
                  </div>

                  <div className="symptom_save">
                    <button
                      onClick={() => saveSymptoms(symptom.id)}
                      className="save_button_symptom"
                    >
                      💾 Сохранить
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Symptom;