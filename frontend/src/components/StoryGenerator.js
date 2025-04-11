import React, { useState } from 'react';
import './StoryGenerator.css';

function StoryGenerator() {
  const [language, setLanguage] = useState('english');
  const [standard, setStandard] = useState('1');
  const [topic, setTopic] = useState('');
  const [generatedStory, setGeneratedStory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const standards = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

  const handleGenerateStory = async () => {
    if (!topic.trim()) {
      setError('Please enter a topic');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
        const response = await fetch('http://localhost:5000/api/generate-story', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ language, standard, topic }),
          });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate story');
      }

      setGeneratedStory(data.story);
    } catch (err) {
      setError(err.message || 'An error occurred while generating the story');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Story Generator</h1>
      
      {/* Language Selection */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Select Language:</label>
        <div className="flex mb-2">
          <button
            className={`mr-2 px-4 py-2 rounded-lg ${language === 'english' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setLanguage('english')}
          >
            English
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${language === 'telugu' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setLanguage('telugu')}
          >
            Telugu
          </button>
        </div>
      </div>
      
      {/* Standard Selection */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Select Standard:</label>
        <select
          value={standard}
          onChange={(e) => setStandard(e.target.value)}
          className="w-full p-2 border rounded-lg"
        >
          {standards.map((std) => (
            <option key={std} value={std}>
              {std}
            </option>
          ))}
        </select>
      </div>
      
      {/* Topic Input */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Enter Topic:</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g., Photosynthesis, Water Cycle, Addition"
          className="w-full p-2 border rounded-lg"
        />
      </div>
      
      {/* Generate Button */}
      <button
        onClick={handleGenerateStory}
        disabled={isLoading || !topic.trim()}
        className={`mt-4 px-6 py-2 rounded-lg ${
          isLoading || !topic.trim() ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {isLoading ? 'Generating...' : 'Generate Story'}
      </button>
      
      {/* Error Message */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}
      
      {/* Generated Story */}
      {generatedStory && (
        <div className="mt-6 p-6 bg-gray-50 rounded-lg">
          <h2 className="font-semibold mb-4 text-lg">Generated Story:</h2>
          <div className="whitespace-pre-wrap text-base leading-relaxed">
            {generatedStory}
          </div>
        </div>
      )}
    </div>
  );
}

export default StoryGenerator;