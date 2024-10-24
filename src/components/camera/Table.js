import React from "react";

const Table = () => {
  const data = [
    {
      id: 1,
      name: "cam1",
      health: "ok ok",
      location: "New York Recorder",
      recorder: "New York Recorder",
      taks: "3 Tasks",
      status: "Active",
      Actions: "Disabled",
    },
    {
      id: 2,
      name: "cam1",
      health: "ok ok",
      location: "New York Recorder",
      recorder: "New York Recorder",
      taks: "3 Tasks",
      status: "Active",
      Actions: "Disabled",
    },
    {
      id: 3,
      name: "cam1",
      health: "ok ok",
      location: "New York Recorder",
      recorder: "New York Recorder",
      taks: "3 Tasks",
      status: "Active",
      Actions: "Disabled",
    },
  ];
  return (
    <div style={{ marginTop: "10px" }}>
      <div>
        <h2>Sample Table</h2>
        <div style={{ padding: "14px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <td style={{ padding: "10px", textAlign: "left" }}>
                  <input type="checkbox" />
                </td>
                <th
                  style={{
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  Name
                </th>
                <th
                  style={{
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  HEALTH
                </th>
                <th
                  style={{
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  LOCATION
                </th>
                <th
                  style={{
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  RECORDER
                </th>
                <th
                  style={{
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  TASKS
                </th>
                <th
                  style={{
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  STATUS
                </th>
                <th
                  style={{
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td style={{ padding: "10px", textAlign: "left" }}>
                    <input type="checkbox" />
                  </td>
                  <td style={{ padding: "10px", textAlign: "left" }}>
                    {item.name}
                  </td>
                  <td style={{ padding: "10px", textAlign: "left" }}>
                    {item.health}
                  </td>
                  <td style={{ padding: "10px", textAlign: "left" }}>
                    {item.location}
                  </td>
                  <td style={{ padding: "10px", textAlign: "left" }}>
                    {item.recorder}
                  </td>
                  <td style={{ padding: "10px", textAlign: "left" }}>
                    {item.taks}
                  </td>
                  <td style={{ padding: "10px", textAlign: "left" }}>
                    {item.status}
                  </td>
                  <td style={{ padding: "10px", textAlign: "left" }}>
                    {item.Actions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
