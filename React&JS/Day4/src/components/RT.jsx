import React, { useEffect, useState } from "react";
import axios from "axios";

const VPS_ID = "52*****1";
const API_TOKEN = "RVQd**lpAmsOPF*********wXENFz2ax75***3a";

const RT = () => {
  const [status, setStatus] = useState("Loading...");
  const [loading, setLoading] = useState(false);
  const [restarting, setRestarting] = useState(false);

  const fetchStatus = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://developers.hostinger.com/api/vps/v1/virtual-machines/${VPS_ID}`,
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );
      setStatus(res.data.state);
    } catch (err) {
      setStatus("Error fetching status");
    } finally {
      setLoading(false);
    }
  };

  const handleRestart = async () => {
    setRestarting(true);
    try {
      await axios.post(
        `https://developers.hostinger.com/api/vps/v1/virtual-machines/${VPS_ID}/restart`,
        {},
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );
      alert("Restart initiated successfully!");
      fetchStatus();
    } catch (err) {
      alert("Failed to restart the server.");
    } finally {
      setRestarting(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>VPS Server Control</h1>
        <p style={styles.status}>
          Status: <strong>{loading ? "Loading..." : status}</strong>
        </p>
        <button
          onClick={handleRestart}
          disabled={restarting}
          style={{
            ...styles.button,
            backgroundColor: restarting ? "#ccc" : "#28a745",
            cursor: restarting ? "not-allowed" : "pointer",
          }}
        >
          {restarting ? "Restarting..." : "Restart Server"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "linear-gradient(to right, #4b0082, #1e90ff)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
    textAlign: "center",
    width: "300px",
  },
  title: {
    fontSize: "22px",
    marginBottom: "20px",
  },
  status: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
  },
};

export default RT;
