import { useState } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue(initialValue);
  };

  const onClick = e => {
    console.log(e.target.value);
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const bind = {
    onChange: onChange,
    onClick: onClick
  };

  return [value, reset, bind];
};

export default useInput;
