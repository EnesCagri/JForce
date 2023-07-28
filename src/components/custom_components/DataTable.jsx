import React from "react";
import ActionButton from "./ActionButton";

const DataTable = ({ headers, fields, data, actions, filter, query }) => {
  return (
    <div>
      <div className="overflow-auto shadow-sm rounded-lg hidden md:block">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200 ">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="p-3 text-sm font-semibold tracking-wide text-left "
                >
                  {header}
                </th>
              ))}
              <th className="text-center">İşlemler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 ">
            {filter(data, query).map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                {fields.map((field, fieldIndex) => (
                  <td
                    className="p-3 text-sm text-gray-700 whitespace-nowrap "
                    key={fieldIndex}
                  >
                    {item[field]}{" "}
                  </td>
                ))}
                <td
                  style={{
                    gridTemplateColumns: `repeat(${actions.length}, minmax(0, 1fr))`,
                  }}
                  className="grid gap-2 text-center"
                >
                  {actions.map((action, actionIndex) => (
                    <ActionButton
                      key={actionIndex}
                      style={action.buttonStyle}
                      actionFunction={action.actionFunction}
                      label={action.label}
                      item={item.id}
                    />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 gap-4 md:hidden">
        <div className="bg-red p-8 rounded-lg shadow ">
          <div className=" text-sm">
            {filter(data, query).map((item, rowIndex) => (
              <div
                key={rowIndex}
                className="rounded-lg bg-gray-50 my-2 shadow-lg"
              >
                {fields.map((field, fieldIndex) => (
                  <div
                    className="p-3 text-gray-700 whitespace-nowrap  text-lg"
                    key={fieldIndex}
                  >
                    <span className="font-bold text-xl">{`${headers[fieldIndex]}: `}</span>
                    {`${item[field]}`}
                  </div>
                ))}
                <div
                  className={`flex flex-row gap-0 text-center pb-2 justify-center px-3`}
                >
                  {actions.map((action, actionIndex) => (
                    <ActionButton
                      key={actionIndex}
                      style={action.buttonStyle}
                      actionFunction={action.actionFunction}
                      label={action.label}
                      item={item.id}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
