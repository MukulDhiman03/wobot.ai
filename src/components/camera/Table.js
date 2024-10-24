import React from "react";

const Table = () => {
  const data = [
    { id: 1, name: "cam1", age: "Ny", city: "New York Recorder" },
    { id: 2, name: "cam2", age: 22, city: "London" },
    { id: 3, name: "cam3", age: 35, city: "Paris" },
  ];
  return (
    <div style={{ marginTop: "10px" }}>
      <div>
        <h2>Sample Table</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  backgroundColor: "#f2f2f2",
                }}
              >
                ID
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "10px",
                }}
              >
                Name
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "10px",
                }}
              >
                HEALTH
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "10px",
                }}
              >
                LOCATION
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "10px",
                }}
              >
                RECORDER
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "10px",
                }}
              >
                TASKS
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "10px",
                }}
              >
                STATUS
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "10px",
                }}
              >
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {data.map((item) => (
              <tr key={item.id}>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {item.id}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {item.name}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {item.age}
                </td>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {item.city}
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
