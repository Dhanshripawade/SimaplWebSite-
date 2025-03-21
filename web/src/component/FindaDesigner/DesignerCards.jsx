import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DesignerCards.css';

const DesignerCards = () => {
  const designers = [
    { name: "Bow'n'Pencil", level: "Top Level", image: "https://images-platform.99static.com/l8nkyZeQIvyS-4ej5bWoz5zH92o=/0x0:1080x1080/400x400/projects-files/137/13788/1378831/1867e8f9-7ab4-4a79-9139-9f351a67da78.gif", project: "Solution 7" },
    { name: "thisisremedy", level: "Top Level", image: "https://images-platform.99static.com/NNpa_9dXgQTLsG-9URdKG2X4qak=/0x0:1060x1062/400x400/projects-files/183/18377/1837707/2a91d656-39ff-4bee-86b8-896967356561.png", project: "Swing & Serve" },
    { name: "musework", level: "Top Level", image: "https://images-platform.99static.com/-pfU31mNL3gu-ZMlnWB93Yri0vI=/79x844:769x1534/400x400/99designs-contests-attachments/156/156438/attachment_156438344", project: "Truth" }
  ];

  const categories = [
    "Logo & identity",
    "Web & app design",
    "Business & advertising",
    "Clothing & merchandise",
    "Art & illustration",
    "Packaging & label",
    "Book & magazine"
  ];

  const Industries = [
    "Business & consulting",
     "Food & drink",
    "Medical & pharmaceutical",
   "Retail",
"Technology",
    "Packaging & label",
    "Book & magazine"
  ];

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-3">
          <h4 className="custom-title">Categories</h4>
          {categories.map((category, index) => (
            <div key={index} className="form-check">
              <input className="form-check-input custom-checkbox" type="checkbox" id={`category-${index}`} />
              <label className="form-check-label custom-label" htmlFor={`category-${index}`}>{category}</label>
            </div>
          ))}
          <h4 className="custom-title mt-3">Industries</h4>

           {Industries.map((category, index) => (
            <div key={index} className="form-check">
              <input className="form-check-input custom-checkbox" type="checkbox" id={`category-${index}`} />
              <label className="form-check-label custom-label" htmlFor={`category-${index}`}>{category}</label>
            </div>
          ))}
        </div>
        <div className="col-md-9">
          <h3 className="custom-title">Logo and identity designers</h3>
          <div className="row">
            {designers.map((designer, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card custom-card">
                  <img src={designer.image} className="card-img-top" alt={designer.project} />
                  <div className="card-body text-center">
                    <h5 className="card-title custom-card-title">{designer.name}</h5>
                    <span className="badge bg-primary mb-2 custom-badge">{designer.level}</span>
                    <p className="card-text custom-card-text">{designer.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerCards;
