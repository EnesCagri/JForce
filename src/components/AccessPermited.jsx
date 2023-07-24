import React from "react";
import { Link } from "react-router-dom";

const AccessPermited = () => {
  return (
    <section
      className="fixed inset-0 flex items-center justify-center min-h-screen w-full from-gray-800 via-greeen-300 to-blue-500 bg-gradient-to-br "
      style={{ padding: 0, margin: 0 }}
    >
      <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
        <div className="max-w-md mx-auto space-y-6">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <Link to="/login" className="no-underline ">
                <h1 className="mb-4 text-6xl tracking-tight font-extrabold  text-primary-600 dark:text-primary-500">
                  GERİ DÖN
                </h1>
              </Link>

              <p className="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl">
                İzinsiz Erişim
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Görünüşe göre bu bölüme erişiminz yok.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessPermited;
