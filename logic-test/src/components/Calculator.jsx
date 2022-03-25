import React, { useState } from "react";

const Calculator = () => {
  const [operator, setOperator] = useState("");
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");

  const operatorHandler = (event) => {
    setOperator(event.target.value);
  };

  const firstValueHandler = (event) => {
    setFirstValue(Number(event.target.value));
  };

  const secondValueHandler = (event) => {
    setSecondValue(Number(event.target.value));
  };

  const hitung = (opr, x, y) => {
    const hasil = [];

    if (opr === "+") {
      hasil.push(<div>{x + y}</div>);
    } else if (opr === "-") {
      hasil.push(<div>{x - y}</div>);
    } else if (opr === "x") {
      hasil.push(<div>{x * y}</div>);
    } else if (opr === ":") {
      hasil.push(<div>{x / y}</div>);
    } else {
      return;
    }

    return hasil;
  };

  return (
    <div className="bg-purple-600 mx-auto max-w-3xl my-4 py-8">
      <div className="font-bold text-3xl text-center text-white py-4">
        Calculator
      </div>
      <div className=" justify-center items-center py-4 px-8 text-white">
        <div className="w-full">
          <label className="block mb-2 py-2 text-sm font-medium">
            Masukan Angka 1 :
          </label>
          <input
            value={firstValue}
            onChange={firstValueHandler}
            type="number"
            className="p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-teal-500 "
          />
        </div>

        <div className="w-full pt-4">
          <label className="block mb-2 py-2 text-sm font-medium">
            Masukan Angka 2 :
          </label>
          <input
            value={secondValue}
            onChange={secondValueHandler}
            // type="number"
            className="p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-teal-500 "
          />
        </div>

        <div>
          <div className="flex justify-start items-center gap-4 py-6">
            <button
              onClick={operatorHandler}
              value="+"
              type="submit"
              className="bg-teal-500 rounded-lg px-5 py-2 text-base font-medium"
            >
              +
            </button>
            <button
              onClick={operatorHandler}
              value="-"
              type="submit"
              className="bg-teal-500 rounded-lg px-5 py-2 text-base font-medium"
            >
              -
            </button>
            <button
              onClick={operatorHandler}
              value="x"
              type="submit"
              className="bg-teal-500 rounded-lg px-5 py-2 text-base font-medium"
            >
              x
            </button>
            <button
              onClick={operatorHandler}
              value=":"
              type="submit"
              className="bg-teal-500 rounded-lg px-5 py-2 text-base font-medium"
            >
              :
            </button>
          </div>

          <div className="flex gap-4 text-xl font-medium">
            {" "}
            Result : {hitung(operator, firstValue, secondValue)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
