
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const [file, setFile] = useState(null);
  const [videoURL, setVideoURL] = useState("");

  function uploadVideo(e) {
    const selected = e.target.files[0];
    if (!selected) return;

    if (!selected.type.startsWith("video/")) {
      alert("Please select a video file");
      return;
    }

    if (videoURL) URL.revokeObjectURL(videoURL);

    setFile(selected);
    setVideoURL(URL.createObjectURL(selected));
  }

  return (
    <div className="app">
      <header>
        <div className="logo">✂ CLIPMASTER <span>AI</span></div>
        <div className="status">● FREE VERSION</div>
      </header>

      <main>
        <section className="hero">
          <div className="tag">✦ AI VIDEO MAGIC</div>
          <h1>Turn Long Videos Into <span>Viral Shorts.</span></h1>
          <p>Upload once. Find highlights. Generate captions. Create shorts.</p>
        </section>

        <section className="upload">
          <div className="upload-icon">↑</div>
          <h2>Upload Your Video</h2>
          <p>Choose a video from your device</p>

          <label className="upload-btn">
            Choose Video
            <input
              type="file"
              accept="video/*"
              onChange={uploadVideo}
              hidden
            />
          </label>

          {file && (
            <div className="file-info">
              <strong>{file.name}</strong>
              <p>{(file.size / 1024 / 1024).toFixed(1)} MB</p>
            </div>
          )}

          {videoURL && (
            <video src={videoURL} controls className="preview" />
          )}
        </section>

        <section className="features">
          <h2>Your AI Toolkit</h2>
          <div className="feature-grid">
            <div className="feature">🎯<h3>AI Highlights</h3><p>Find engaging moments</p></div>
            <div className="feature">💬<h3>Auto Captions</h3><p>Generate subtitles</p></div>
            <div className="feature">📱<h3>Vertical Shorts</h3><p>9:16 video format</p></div>
            <div className="feature">⚡<h3>Fast Export</h3><p>Ready for social media</p></div>
          </div>
        </section>

        <section className="coming">
          <h2>More AI Features Coming</h2>
          <p>Automatic clipping and smart captions are the next development stages.</p>
        </section>
      </main>

      <footer>CLIPMASTER AI © 2026 · Made for Creators</footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
