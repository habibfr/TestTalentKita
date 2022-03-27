import React, { useState } from "react";

const Form = () => {
  const [formIsValid, setFormIsValid] = useState();
  const [nameIsValid, setNameIsValid] = useState(false);
  const [inputName, setInputName] = useState("");
  const [emailIsValid, setemailIsValid] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [genIsValid, setgenIsValid] = useState(true);
  const [inputGen, setInputGen] = useState("pria");
  const [umurIsValid, setumurIsValid] = useState(false);
  const [inputUmur, setInputUmur] = useState("");
  const [teleponIsValid, setTeleponIsValid] = useState(false);
  const [inpuTelepon, setInputTelepon] = useState(0);
  const [inputPendidikan, setInputPendikan] = useState("");
  const [pendidikanIsValid, setPendidikanIsValid] = useState(false);

  const nameInputHandler = (event) => {
    setInputName(event.target.value);
    const nameValid = event.target.value.trim().length >= 5;
    setNameIsValid(nameValid);

    setFormIsValid(
      genIsValid && umurIsValid && teleponIsValid & emailIsValid && nameValid
    );
  };

  const emailInputHandler = (event) => {
    setInputEmail(event.target.value);
    const emailValid = event.target.value.includes("@");
    setemailIsValid(emailValid);

    setFormIsValid(
      nameIsValid && genIsValid && umurIsValid && teleponIsValid && emailValid
    );
  };

  const genInputHandler = (event) => {
    setInputGen(event.target.value);
    const genValid =
      event.target.value === "pria" || event.target.value === "wanita";
    setgenIsValid(genValid);

    setFormIsValid(
      nameIsValid && emailIsValid && umurIsValid && teleponIsValid && genValid
    );
  };

  const umurChangeHandler = (event) => {
    setInputUmur(event.target.value);
    const umurValid = event.target.value > 10 && event.target.value < 100;
    setumurIsValid(umurValid);

    setFormIsValid(
      nameIsValid && emailIsValid && genIsValid && teleponIsValid && umurValid
    );
  };

  const teleponChangeHandler = (event) => {
    setInputTelepon(event.target.value);
    const teleponValid =
      event.target.value.trim().length > 9 &&
      event.target.value.trim().length < 13;
    setTeleponIsValid(teleponValid);

    setFormIsValid(
      nameIsValid && emailIsValid && genIsValid && teleponValid && umurIsValid
    );
  };

  const inputPendidikanHandler = (event) => {
    setInputPendikan(event.target.value);
    setPendidikanIsValid(event.target.value.trim().length > 4);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setInputName("");
    setInputEmail("");
    setInputGen("");
    setInputUmur("");
    setInputTelepon("");
    setInputPendikan("");

    setTimeout(() => {
      setNameIsValid(false);
      setemailIsValid(false);
      setumurIsValid(false);
      setTeleponIsValid(false);
    }, 500);
  };

  return (
    <div className="bg-purple-600 mx-auto max-w-3xl my-4 py-8">
      <div className="font-bold text-3xl text-center text-white py-4">Form</div>
      <div className="flex justify-center items-center py-4 px-8">
        <div className="w-full text-white">
          <div className="flex justify-between items-center gap-4">
            <div className="w-4/5 mx-auto">
              <form onSubmit={submitHandler}>
                <label className="block mb-2 pt-2 text-sm font-medium">
                  Nama :
                </label>
                <input
                  value={inputName}
                  onChange={nameInputHandler}
                  type="text"
                  placeholder="Habib fr"
                  className={
                    nameIsValid
                      ? "p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs outline-teal-400 "
                      : "p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs outline-teal-400  focus:bg-red-300 focus:outline-red-700"
                  }
                />
                <label className="block mb-2 pt-2 text-sm font-medium">
                  Email :
                </label>
                <input
                  value={inputEmail}
                  onChange={emailInputHandler}
                  type="email"
                  required="true"
                  placeholder="habib123@gmail.com"
                  className={
                    emailIsValid
                      ? "p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs outline-teal-400 "
                      : "p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs outline-teal-400  focus:bg-red-300 focus:outline-red-700"
                  }
                />
                <label className="block mb-2 pt-2 text-sm font-medium">
                  Jenis Kelamin :
                </label>
                <select
                  value={inputGen}
                  onChange={genInputHandler}
                  className={
                    genIsValid
                      ? "p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs outline-teal-400 "
                      : "p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs outline-teal-400  focus:bg-red-300 focus:outline-red-700"
                  }
                >
                  <option>pria</option>
                  <option>wanita</option>
                </select>
                <label className="block mb-2 pt-2 text-sm font-medium">
                  Umur :
                </label>
                <input
                  value={inputUmur}
                  onChange={umurChangeHandler}
                  placeholder="20"
                  type="number"
                  required="true"
                  max="100"
                  min="10"
                  className={
                    umurIsValid
                      ? "p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs outline-teal-400 "
                      : "p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs outline-teal-400  focus:bg-red-300 focus:outline-red-700"
                  }
                />
                <label className="block mb-2 pt-2 text-sm font-medium">
                  No Telepon :
                </label>
                <input
                  value={inpuTelepon}
                  onChange={teleponChangeHandler}
                  type="text"
                  placeholder="0812345678"
                  className={
                    teleponIsValid
                      ? "p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs outline-teal-400 "
                      : "p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs outline-teal-400  focus:bg-red-300 focus:outline-red-700"
                  }
                />
                <label className="block mb-2 pt-2 text-sm font-medium">
                  Pendidikan :
                </label>
                <input
                  type="text"
                  placeholder="Sistem Informasi"
                  value={inputPendidikan}
                  onChange={inputPendidikanHandler}
                  className=" p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs outline-teal-400"
                />

                <div className="py-4 text-center">
                  <button
                    type="submit"
                    className="bg-teal-500 rounded-lg w-full py-2 text-base font-medium hover:bg-teal-600"
                    disabled={!formIsValid}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
