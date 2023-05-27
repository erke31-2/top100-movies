import Select from "react-select";
const options = [
  { value: "All", label: "All" },
  { value: "Action", label: "Action" },
  { value: "Adventure", label: "Adventure" },
  { value: "Animation", label: "Animation" },
  { value: "Biography", label: "Biography" },
  { value: "Comedy", label: "Comedy" },
  { value: "Crime", label: "Crime" },
  { value: "Drama", label: "Drama" },
  { value: "Family", label: "Family" },
  { value: "Fantasy", label: "Fantasy" },
  { value: "History", label: "History" },
  { value: "Horror", label: "Horror" },
  { value: "Mystery", label: "Mystery" },
  { value: "Romance", label: "Romance" },
  { value: "Sci-Fi", label: "Sci-Fi" },
  { value: "Thriller", label: "Thriller" },
  { value: "War", label: "War" },
  { value: "Western", label: "Western" },
];

const colorStyles = {
  control: (styles) => ({
    ...styles,
    textAlign: "center",
    backgroundColor: "aliceblue",
    border: "2px solid #95cdfe",
    borderRadius: "8px",
    width: "108px",
    fontWeight: "700",
    cursor: "pointer",
    outline: "none",
    fontSize: "1rem",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    display: "none",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return { ...styles, color: "black", fontWeight: "700", cursor: "pointer" };
  },
};
const Dropdown = ({ setSelected }) => {
  const handleChange = (selectedOption) => {
    setSelected(selectedOption.value);
    sessionStorage.setItem("selectedGenre", selectedOption.value);
  };
  return (
    <Select options={options} styles={colorStyles} onChange={handleChange} placeholder="Genres"/>
  );
};

export default Dropdown;
