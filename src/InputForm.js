import "./components css/InputForm.css";

function InputForm(props) {
  function onSubmitHandler(event) {
    event.preventDefault();
    const inputValue = document.getElementById("textInput");
    const inputValueText = inputValue.value;
    const selectValue = document.getElementById("select");
    const selectValueText = selectValue.value;
    const timeValue = document.getElementById("timeInput");
    const timeValueText = timeValue.value;
    const dataObj = {
      id: inputValueText,
      title: inputValueText,
      day: selectValueText,
      time: timeValueText,
      color: "#4e4e4e",
    };
    if (dataObj.title !== "") {
      props.func(dataObj);
    } else {
      window.alert("Please write short description of the task.");
    }

    inputValue.value = "";
    selectValue.value = "Monday";
    timeValue.value = "";
  }

  return (
    <div className="formWrapper">
      <form onSubmit={onSubmitHandler} className="form" action="submit">
        <input
          type="text"
          id="textInput"
          placeholder=" Type something you have to do..."
        />
        <select id="select">
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
        </select>
        <div>
          <input id="timeInput" type="time" min={"00:00"} max={"24:00"}></input>
        </div>
        <button id="submitButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default InputForm;
