import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState<string>("");

  const onReset = (e: React.MouseEvent) => {
    e.preventDefault();
    setName("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div>
      <form>
        <input value={name} onChange={(e) => onChange(e)} />
        <h1>You typed: {name}</h1>
        <button onClick={(e) => onReset(e)}>reset</button>
      </form>
    </div>
  );
};
