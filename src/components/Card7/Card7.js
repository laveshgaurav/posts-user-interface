import React from "react";
import Styles from "./Card7.module.scss";

function Card7() {
  const DATA = [
    {
      id: 1,
      name: "Gaurav_Resume.pdf",
      icon: "https://img.icons8.com/color/512/pdf.png",
      completed: 78,
    },
    {
      id: 2,
      name: "PortfolioWebsite.pdf",
      icon: "https://img.icons8.com/color/512/pdf.png",
      completed: 87,
    },
    {
      id: 3,
      name: "NameList.xls",
      icon: "https://img.icons8.com/fluency/512/microsoft-excel-2019.png",
      completed: 100,
    },
  ];

  return (
    <div className={Styles.Card7_Container}>
      <h2 className={Styles.Heading}>UPLOAD FILES</h2>
      <h3 className={Styles.SubHeading}>
        Upload documents you want to share
        <br />
        with your team.
      </h3>
      <label>
        <h1>
          <i class="fas fa-cloud-upload-alt"></i>
        </h1>
        <h3>
          Drag and drop files here
          <br />
          OR
        </h3>
        <h4>Choose a file</h4>
        <input type="file" />
      </label>
      <h5>Uploaded Files</h5>
      {DATA.map((item) => (
        <div className={Styles.File_Container}>
          <div className={Styles.Icon_Container}>
            <img width={32} height={32} src={item.icon} alt="icon" />
          </div>
          <div className={Styles.Content}>
            <h3>{item.name}</h3>
            {item.completed === 100 ? (
              <h5>478kb</h5>
            ) : (
              <div className={Styles.Progress_Container}>
                <div
                  className={Styles.Progress}
                  style={{ width: `${item.completed}%` }}
                ></div>
              </div>
            )}
          </div>
          <div className={Styles.Check}>
            {item.completed === 100 ? (
              <i class="fas fa-check" style={{ color: "#3f6144" }}></i>
            ) : (
              <i class="fas fa-times" style={{ color: "#6b3c45" }}></i>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card7;
