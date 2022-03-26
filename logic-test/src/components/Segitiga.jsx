import React, { useState } from "react";

const Segitiga = () => {
  const [inputPanjang, setInputPanjang] = useState(1);
  const [inputSudut, setInputSudut] = useState(45);
  const [isValid, setIsValid] = useState(false);

  const inputPanjangHandler = (event) => {
    console.log(event.target.value);

    const valuePanjang = event.target.value;
    setInputPanjang(valuePanjang);

    setIsValid((inputSudut == 45 || 135 || 225 || 315) && inputPanjang <= 12);
  };

  const inputSudutHandler = (event) => {
    console.log(event.target.value);
    const sudutValue = event.target.value;
    setInputSudut(sudutValue);

    setIsValid((inputSudut == 45 || 135 || 225 || 315) && inputPanjang <= 12);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsValid((inputSudut == 45 || 135 || 225 || 315) && inputPanjang <= 12);
  };

  const createSegitiga = (derajat, panjang) => {
    let hasil = [];

    if (panjang > 3 && panjang < 13) {
      if (derajat == 45) {
        for (let i = panjang; i > 0; i--) {
          for (let j = 0; j < i; j++) {
            hasil.push(<span className="text-xl mr-3 font-bold "> * </span>);
          }
          hasil.push(<br></br>);
        }
      } else if (derajat == 225) {
        for (let i = panjang; i > 0; i--) {
          for (let j = panjang; j >= 0; j--) {
            if (j < i) {
              hasil.push(<span className="text-xl mr-3 font-bold "> * </span>);
            } else if (j > i) {
              hasil.push(
                <span className="text-xl mr-3 font-bold text-transparent">
                  *{" "}
                </span>
              );
            }
          }
          hasil.push(<br></br>);
        }
      } else if (derajat == 315) {
        for (let i = panjang; i > 0; i--) {
          for (let j = 1; j <= panjang; j++) {
            if (j < i) {
              hasil.push(
                <span className="text-xl mr-3 font-bold text-transparent">
                  *{" "}
                </span>
              );
            } else if (j >= i) {
              hasil.push(<span className="text-xl mr-3 font-bold "> * </span>);
            }
          }
          hasil.push(<br></br>);
        }
      } else if (derajat == 135) {
        for (let i = panjang; i > 0; i--) {
          for (let j = i; j <= panjang; j++) {
            hasil.push(<span className="text-xl mr-3 font-bold">* </span>);
          }
          hasil.push(<br></br>);
        }
      } else {
        hasil.push(<div>Maaf anda salah memasukan nomor</div>);
      }
      return hasil;
    } else {
      return hasil;
    }
  };

  return (
    <>
      <div className="bg-purple-600 mx-auto max-w-3xl my-4 py-8">
        <div className="font-bold text-3xl text-center text-white py-4">
          Segitiga Otomatis
        </div>
        <div className="flex justify-center items-center py-4 px-8">
          <div className="w-full text-white">
            <div className="flex justify-between items-center gap-4">
              <div className="w-full">
                <label className="block mb-2 py-2 text-sm font-medium">
                  Masukan Panjang * :
                </label>
                <input
                  value={inputPanjang}
                  onChange={inputPanjangHandler}
                  type="number"
                  min="1"
                  max="12"
                  className="p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-teal-500 "
                />
              </div>
              <div className="w-2/5">
                <label className="block py-2 mb-2 text-sm font-medium">
                  Sudut :
                </label>
                <select
                  onChange={inputSudutHandler}
                  value={inputSudut}
                  className="p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 text-base outline-teal-500 "
                >
                  <option value="45">45</option>
                  <option value="135">135</option>
                  <option value="225">225</option>
                  <option value="315">315</option>
                </select>
              </div>
            </div>
            <div className="py-4">
              <button
                onClick={submitHandler}
                type="submit"
                className="bg-teal-500 rounded-lg px-5 py-2 text-base font-medium"
              >
                Submit
              </button>
            </div>
            <div className="max-w-md">
              {isValid ? (
                createSegitiga(inputSudut, inputPanjang)
              ) : (
                <div className="text-red-600 font-medium">
                  Maaf anda salah memasukan angka [Min 4 & Max 12]
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Segitiga;
