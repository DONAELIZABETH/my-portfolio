import React from 'react';
import { FaAward } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <div className="education">
      <h4 className="education-heading4">Glimpse Through</h4>
      <h1 className="education-heading1">Education</h1>

      <div className="education-btech">
        <h2 className="bt">
          <FaAward /> B-Tech
        </h2>
        <h3 className="cse">
          Computer Science & Engineering <br />
          <span className="cgpa">CGPA - 7.13 (2020-2024)</span>
        </h3>
        <h3 className="apj">APJ Abdul Kalam Technological University</h3>
        <h3 className="mlm">Mangalam College Of Engineering</h3>
      </div>

      <div className="education-12">
        <h2 className="twelve">
          <FaAward /> 12th
        </h2>
        <h3 className="bi">Bio-Maths</h3>
        <h3 className="dhse">
          DHSE - State Board of Kerala <br />
          Percentage - 85% (2018-2020)
        </h3>
        <h3 className="saha">St. Aloysius H.S.S Athirampuzha</h3>
      </div>

      <div className="education-10">
        <h2 className="tenth">
          <FaAward /> 10th
        </h2>
        <h3 className="kbpe">KBPE - Kerala Board of Public Examinations</h3>
        <h3 className="ptge">Percentage - 98% (2017-2018)</h3>
        <h3 className="smga">St. Mary's G.H.S Athirampuzha</h3>
      </div>

      <section className="education-extra">
        <h1>Extra Curricular Activities</h1>
        <div>
          <h3>National Service Scheme</h3>
          <h5>2018-2023</h5>
        </div>
        <div>
          <h3>Red Cross</h3>
          <h5>2016-2018</h5>
        </div>
      </section>
    </div>
  );
};

export default Education;
