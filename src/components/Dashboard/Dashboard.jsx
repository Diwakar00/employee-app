import { connect } from "react-redux";

import "./Dashboard.css";

const Dashboard = (props) => {
  let headings = Object.keys(props.users[0]);
  let allDatas = props.users.map((obj) => Object.values(obj));

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headings.map((heading) => (
              <th key={heading} style={{ textTransform: "capitalize" }}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allDatas.map((datas) => (
            <tr key={datas}>
              {datas.map((data) => (
                <td key={data}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.user,
});

export default connect(mapStateToProps)(Dashboard);
