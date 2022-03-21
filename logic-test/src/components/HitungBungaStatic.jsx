import React, { useState } from "react";

const HitungBungaStatic = () => {
  const [isValid, setIsValid] = useState(null);
  const [value, setValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (value >= 100000) {
      setTimeout(() => {
        setIsValid(false);
        setValue("");
      }, 10000);
      setIsValid(true);
    }
  };

  const inputChangeHandler = (event) => {
    const value = Number(event.target.value);

    setValue(value);
  };

  const hasil = (x) => {
    const nilai = [];
    let uangAkhir = x;
    for (let i = 1; i < 7; i++) {
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
      <div className="bg-purple-600 mx-auto max-w-3xl py-8">
        <div className="font-bold text-3xl text-center text-white py-4">
          Hitung Bunga Statis
        </div>
        <div className="flex justify-center items-center py-4 px-8">
          <div className="w-full text-white">
            <div className="flex justify-between items-center gap-4">
              <div className="w-full">
                <label className="block mb-2 py-2 text-sm font-medium">
                  Masukan Angka :
                </label>
                <input
                  value={value}
                  onChange={inputChangeHandler}
                  type="number"
                  min="100000"
                  step="10000"
                  className=" p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs outline-teal-400"
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
                  {hasil(value)}
                  <div className="mt-6 text-teal-600">Hasil Akan di Hapus Setiap 10 Detik.</div>
                </div>
              ) : (
                <div className="text-red-600">Masukan Angka yang Benar [Min : 100000].</div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HitungBungaStatic;
