import PropTypes from 'prop-types';
import { useState } from 'react';
import ChevronDown from '../../assets/chevron-down-solid.svg';
import ChevronUp from '../../assets/chevron-up-solid.svg';

const DropDownArray = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown meny
  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-title">
        <p>{title}</p>

        {/* Manages rafter orientation according to isOpen status  */}
        {isOpen ? (
          <img src={ChevronDown} alt="chevron-down" onClick={() => toggle()} />
        ) : (
          <img src={ChevronUp} alt="chevron-up" onClick={() => toggle()} />
        )}
      </div>
      <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
        <ul>
          {/* Display content using map to create LI element  */}
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

DropDownArray.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
export default DropDownArray;
