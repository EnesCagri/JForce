import React from "react";

const FileChooser = ({ setImage }) => {
  const convertToBase64 = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };

    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  return (
    <div className="form-group">
      <div className="flex items-center justify-center w-full pt-4">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 :border-gray-500"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p className="mb-2 text-sm text-gray-500 ">
              <span className="font-semibold">
                Fotoğraf Yüklemek için tıkla
              </span>{" "}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PNG veya JPG
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={convertToBase64}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default FileChooser;
