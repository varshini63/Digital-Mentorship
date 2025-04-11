import React, { useState } from 'react';
import axios from 'axios';
import './Doubts.css';

const Doubts = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');
    setError('');

    const formData = new FormData();
    if (text) formData.append('text', text);
    if (image) formData.append('image', image);

    try {
      const res = await axios.post('http://127.0.0.1:5000/submit_doubt', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.data.status === 'success' && Array.isArray(res.data.response)) {
        setResponse(res.data.response.join('\n\n'));
      } else if (typeof res.data.response === 'string') {
        setResponse(res.data.response);
      } else {
        setError('Invalid response format received');
      }
    } catch (err) {
      console.error('Error details:', err);
      setError(err.response?.data?.message || 'Error submitting your doubt.');
      setResponse('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="doubts-container">
      <h1 className="doubts-header">Submit Your Doubt</h1>
      <form onSubmit={handleSubmit} className="doubts-form">
        <textarea
          className="doubts-textarea"
          placeholder="Enter your doubt here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="4"
        />
        <input
          className="doubts-file-input"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button
          className="doubts-submit-button"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Doubt'}
        </button>
      </form>
      {response && (
        <div className="doubts-response">
          <strong>Response:</strong> {response}
        </div>
      )}
      {error && (
        <div className="doubts-error">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default Doubts;