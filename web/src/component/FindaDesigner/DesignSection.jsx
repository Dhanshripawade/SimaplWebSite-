import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DesignSection = () => {
  const [selected, setSelected] = useState(null);

  const options = [
    { label: 'Logo design', icon: '🎨' },
    { label: 'Web page design', icon: '💻' },
    { label: 'Postcard, flyer or print', icon: '✉️' },
    { label: 'Illustration or graphics', icon: '🖼️' },
    { label: 'Product packaging', icon: '🛍️' },
    { label: 'Product label', icon: '🏷️' },
    { label: 'Book cover', icon: '📚' }
  ];

  const handleSelect = (label) => {
    setSelected(label);
  };

  return (
    <div className="container text-center my-1 mt-5">
      <h3>What do you need designed?</h3>
      <div className="row g-4 mt-3">
        {options.map((option, index) => (
          <div className="col-md-4" key={index}>
            <button
              className={`btn btn-outline-secondary w-100 p-3 ${selected === option.label ? 'active' : ''}`}
              onClick={() => handleSelect(option.label)}
            >
              <span className="me-4">{option.icon}</span> {option.label}
            </button>
          </div>
        ))}
        <div className="col-md-4">
          <button className="btn btn-outline-secondary w-100 p-3">See all </button>
          {/* <div className="mt-4 ">
        <button className="btn btn-secondary ">Next.....</button>
      </div> */}

<div className="d-flex justify-content-center align-items-center mt-5" style={{ height: '100px' }}>
        <button className="btn btn-light text-white bg-black px-5 py-3" style={{ borderRadius: '20px' }}>  Next... </button>
      </div>
        </div>
      </div>
     
    </div>
  );
};

export default DesignSection;
