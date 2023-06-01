import {FaSearch} from "react-icons/fa"
const input = () => {
  return (
    <>
      <div className="search">
        <label htmlFor="Search" className="d-flex align-items-center">
          <input
            type="search"
            placeholder="Search..."
            className="search-input form-control"
          />
          <button className="bg-dark btn search-btn">
            <FaSearch className="text-white" style={{width:"22px", height:"20px"}}/>
          </button>
        </label>
      </div>
    </>
  );
};

export default input;
