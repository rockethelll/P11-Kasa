import Banner from '../../components/Banner/Banner';
import DropDownDescription from '../../components/DropDown/DropDownText';
import { aboutList } from './../../../public/data/aboutList';

const About = () => {
  return (
    <>
      <Banner image="../images/montagne.webp" />
      <div className="about-dropdown">
        {/* Display aboutList using map to create DropDownDescription component */}
        {aboutList.map((about, index) => (
          <DropDownDescription
            key={index}
            title={about.title}
            content={about.content}
          />
        ))}
      </div>
    </>
  );
};

export default About;
