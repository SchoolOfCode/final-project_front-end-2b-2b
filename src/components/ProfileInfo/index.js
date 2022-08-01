import styles from "./profileInfo.module.css";
import Button from "../Button/index";
import { useState } from "react";

const ProfileInfo = ({ profile }) => {
  const [text, setText] = useState("");
  const handleSend = (event) => {
    event.preventDefault();
    console.log(text);
    setText("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <section className={styles.profileSection}>
      <div className={styles.profileInfoContainer}>
        <h3>Bio</h3>
        <p>{profile.bio}</p>
      </div>
      <div className={styles.profileInfoContainer}>
        <h3>Teach</h3>
        <ul>
          {profile.teach_skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
      <div className={styles.profileInfoContainer}>
        <h3>Learn</h3>
        <ul>
          {profile.learn_skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
      <div className={styles.profileInfoContainer}>
        <h3>Write a message</h3>
        <form className={styles.profileInfoForm} onSubmit={handleSend}>
          <textarea
            onChange={handleChange}
            placeholder="Type your message here..."
            value={text}
          ></textarea>
          <Button colour="blue" text="Send" />
        </form>
      </div>
    </section>
  );
};

export default ProfileInfo;

//ProfileInfo
// creat profile css
// import module
// create profile info component
