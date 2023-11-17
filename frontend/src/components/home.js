import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { CircularProgress, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Home = () => {
  const [fromEmail, setFromEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    }
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append("file", file);
    formDataToSend.append(
      "json",
      JSON.stringify({ fromEmail, name, phone, subject, message })
    );

    try {
      const response = await axios.post(
        "http://localhost:3030/mail/sendmail",
        formDataToSend
      );
      setName("");
      setPhone("");
      setSubject("");
      setMessage("");
      setFromEmail("");
      setFile(null);
      setLoading(false);
      setSuccess("Email sent successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <h1>Mail Service</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <TextField
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            variant="outlined"
            size="small"
            required
          />
        </label>
        <br />
        <br />
        <label>
          <TextField
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            variant="outlined"
            size="small"
            required
          />
        </label>
        <br />
        <br />
        <label>
          <TextField
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            variant="outlined"
            size="small"
            required
          />
        </label>
        <br />
        <br />
        <label>
          <TextField
            type="email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            placeholder="Email"
            variant="outlined"
            size="small"
            required
          />
        </label>
        <br />
        <br />
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message.."
          variant="outlined"
        />
        <br />
        <br />
        <label>
          <TextField
            type="file"
            size="small"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ content: "upload" }}
          />
        </label>
        <br />
        <br />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
      <div>
        {loading && <CircularProgress color="success" />}
        {success && <p>{success}</p>}
      </div>
    </div>
  );
};

export default Home;
