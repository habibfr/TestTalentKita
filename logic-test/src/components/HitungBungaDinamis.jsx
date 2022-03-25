import React, { useState } from "react";

const HitungBungaDinamis = () => {
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState("");
  const [valueIsValid, setValueIsValid] = useState();
  const [bulanEntered, setBulanEntered] = useState("");
  const [bulanIsValid, setBulanIsValid] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    setTimeout(() => {
      setIsValid(false);
      setBulanEntered("");
      setValue("");
    }, 10000);
    setIsValid(valueIsValid && bulanIsValid);
  };

  const inputChangeHandler = (event) => {
    const value = Number(event.target.value);
    setValue(value);
    setValueIsValid(value >= 100000);
  };

  const bulanChangeHandler = (event) => {
    const value = Number(event.target.value);

    setBulanEntered(value);
    setBulanIsValid(value > 0 && value <= 12);
  };

  const hasil = (x, y) => {
    const nilai = [];
    let uangAkhir = x;
    for (let i = 1; i < y + 1; i++) {
      if (uangAkhir < 100000) {
        return;
      } else if (uangAkhir >= 100000 && uangAkhir <= 500000) {
        uangAkhir = uangAkhir + uangAkhir * (2 / 100) - 1500;
      } else if (uangAkhir > 500000 && uangAkhir <= 1000000) {
        uangAkhir = uangAkhir + uangAkhir * (3 / 100) - 2000;
      } else if (uangAkhir > 1000000 && uangAkhir <= 50000000) {
        uangAkhir = uangAkhir + uangAkhir * (4 / 100) - 2500;
      } else {
        uangAkhir = uangAkhir + uangAkhir * (5 / 100) - 3000;
      }
      nilai.push(
        <div key={i} className="">
          Uang Anda bulan {i} = Rp.{" "}
          {new Intl.NumberFormat("id-ID").format(uangAkhir)}
        </div>
      );
    }
    return nilai;
  };

  return (
    <>
      <div className="bg-purple-600 mx-auto max-w-3xl my-4 py-8">
        <div className="font-bold text-3xl text-center text-white py-4">
          Hitung Bunga Dinamis
        </div>
        <div className="flex justify-center items-center py-4 px-8">
          <div className="w-full text-white">
            <div className="flex justify-between items-center gap-4">
              <div className="w-full">
                <label className="block mb-2 py-2 text-sm font-medium">
                  Masukan Uang :
                </label>
                <input
                  value={value}
                  onChange={inputChangeHandler}
                  type="number"
                  min="100000"
                  step="10000"
                  className=" p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs outline-teal-500 "
                />
              </div>
              <div className="w-2/5">
                <label className="block py-2 mb-2 text-sm font-medium">
                  Bulan :
                </label>
                <input
                  value={bulanEntered}
                  onChange={bulanChangeHandler}
                  type="number"
                  min="1"
                  max="12"
                  className=" p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs outline-teal-500"
                />
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
            <div className="py-4 text-base font-medium">
              {isValid ? (
                <div>
                  {hasil(value, bulanEntered)}
                  <div className="mt-6 text-teal-600">
                    Hasil Akan di Hapus Setiap 10 Detik.
                  </div>
                </div>
              ) : (
                <div className="text-red-600">
                  Masukan Angka yang Benar [Min Uang : 100000 & Min Bulan : 1].
                </div>
              )}
            </div>
            <div className="text-xs text-gray-300">*Bunga 0.2% perbulan</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HitungBungaDinamis;
