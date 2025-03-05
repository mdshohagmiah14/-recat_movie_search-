import { useState } from "react";

 function Form(props) {
  const [formData, setFormData] = useState({ searchterm: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.moviesearch(formData.searchterm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
          placeholder="Search for a movie"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Form;