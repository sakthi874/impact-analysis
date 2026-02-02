❤️ Heart Disease Impact Analysis using Machine Learning & Data Visualization

👥 Team Members
S. Sakthi, M. Swathi
(Final-year MCA Students)

📝 Project Overview :

Heart Disease Impact Analysis is a machine learning–based healthcare project designed to predict which organ is likely to be affected first in patients suffering from heart disease.
Unlike traditional systems that only detect the presence of heart disease, this project goes a step further by analyzing structured clinical data to identify organ-specific risks such as impact on the brain, kidney, or lungs. The system uses multiple machine learning algorithms, with a strong focus on Decision Tree models for their interpretability and clinical relevance. The final model is deployed through a web-based interface, enabling healthcare professionals to make early, data-driven decisions.

🔍 Key Features

Predicts the first organ likely to be affected due to heart disease

Uses clinical parameters such as:

Cholesterol levels

Blood pressure

Chest pain type

Age and medical history

Compares multiple ML models:

Decision Tree

Random Forest

Neural Networks

Displays feature importance for better medical interpretability

Provides real-time predictions via a web interface

⚙️ Technologies Used :

* Programming Language: Python 3.8+

* Machine Learning:  Decision Tree ,Random Forest , Neural Networks .

* Libraries & Tools: Jupyter Notebook , Pandas, NumPy , Matplotlib , Scikit-learn

* Web Framework: Flask

* Dataset Source: Kaggle (Healthcare Dataset)

🧠 Machine Learning Workflow: 

1.Data Collection    : Clinical and demographic patient data

2.Data Preprocessing : Missing value handling ,Normalization & encoding                  

3.Feature Selection : Correlation analysis , Recursive Feature Elimination              

4.Model Training    : Train&evaluate multiple algorithms  

5.Prediction        : Predict organ vulnerability with confidence scores

6.Evaluation        : Accuracy, Precision, Recall, F1-score     

7.Deployment        : Flask-based web interface

🌐 Web Application Features

* Patient data input form

* Real-time organ risk prediction

* Visualization of feature importance

* Easy-to-use interface for clinicians

📁 Project Structure
Heart Disease Impact Analysis/
│
├── app.py                  # Flask application
├── model.py                # ML model training & prediction
├── dataset.csv             # Heart disease dataset
├── requirements.txt        # Required libraries
│
├── templates/
│   ├── index.html          # Main page
│   ├── predict.html        # Prediction page
│
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│
└── screenshots/            # Output & result images

✅ Advantages

🎯 Organ-Specific Prediction

🩺 Improved Clinical Decision Support

🌳 Highly Interpretable Models (Decision Tree)

⏱️ Early Diagnosis & Prevention

🌍 Web-Based & Accessible System

🏁 Conclusion

This project demonstrates how machine learning can be effectively applied in healthcare to move from general diagnosis to precision-based, organ-specific risk prediction. By combining interpretability, accuracy, and real-world deployment through a web interface, the system supports proactive medical decision-making and improved patient outcomes.

🚀 Future Enhancements

* Integration with wearable health devices

* Real-time patient monitoring

* Federated learning for privacy

* Multi-language support
