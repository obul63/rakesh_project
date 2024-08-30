import React, { useState } from 'react';
import './Bmi.css';
import pic1 from './images/underweight.png'
import pic2 from './images/normalfinal.png'
import pic3 from './images/overweightfinal.png'
import pic4 from './images/obesityfinal.png'
import Footer from './Footer'
const Checkbmi = () => {
  const [weight, setWeight] = useState('0');
  const [height, setHeight] = useState('0');
  const [bmi, setBMI] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const h = height * height / 100
      const bmiValue = Math.round(weight / h * 100)
      setBMI(`BMI value is = ${bmiValue}`);


      if (bmiValue <= 18.5) {
        document.getElementById('bmi-category').innerHTML = "Underweight";
        document.getElementById('bmi-category').style.color = "white";
        const img = document.getElementById('img')
        img.innerHTML = `<img src=${pic1} alt='Example Image'>`
     
      } else if (bmiValue > 18.5 && bmiValue <= 25) {
        document.getElementById('bmi-category').innerHTML = "Normal";
        document.getElementById('bmi-category').style.color = "orange";
        const img2 = document.getElementById('img')
        img2.innerHTML = `<img src=${pic2} alt='Example Image'>`
      } else if (bmiValue > 25 && bmiValue <= 30) {
        document.getElementById('bmi-category').innerHTML = "Overweight";
        document.getElementById('bmi-category').style.color = "red";
        const img3 = document.getElementById('img')
        img3.innerHTML = `<img src=${pic3} alt='Example Image'>`
      } else {
        document.getElementById('bmi-category').innerHTML = "Obesity";
        document.getElementById('bmi-category').style.color = "green";
        const img4 = document.getElementById('img')
        img4.innerHTML = `<img src=${pic4} alt='Example Image'>`
      }
    }
  };

  return (
    <body className='bmi'>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6' id="ro">

          </div>
          <div className='col-md-6 card' id="sai">
            <h1 className='pt-3 text-center' id="h1">BMI Calculator</h1>
            <div className='input-group'>
              <h2 className='input-label'>Weight (kgs):
                <input
                  type="range"
                  min="20"
                  max="100"
                  steps="10"
                  value={weight}
                  id="range"
                  onChange={(e) => setWeight(e.target.value)}
                /><br></br>
              </h2>

              <h2 style={{ color: 'white' }}> {weight}kgs.</h2>
            </div>
            <div className='input-group'>
              <h2 className='input-label'>Height (mtr):
                <input type="range" min="50" max="250" steps="10"
                  value={height}
                  id="range1"
                  onChange={(e) => setHeight(e.target.value)}
                /><br></br>
              </h2>
              <h2 style={{ color: 'white' }}>{height}Cm.</h2>
            </div>
            <button onClick={calculateBMI} className='btn btn-dark text-light mt-3' >Calculate BMI</button>
            <h3 className='mt-3 text-light'>{bmi}</h3>
            <h2 id='bmi-category'></h2>
            <h1 id="img" className='pic'></h1>
          </div>
          
        </div>
        {/* <Footer/> */}
      </div>


    </body>
  );
};

export default Checkbmi;
