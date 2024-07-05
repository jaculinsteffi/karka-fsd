import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/ytdata', {
        params: {
          part: 'snippet',
          maxResults: 10,
          q: searchQuery,
        },
      });
      setResults(response.data.items);
    } catch (error) {
      console.error('Error fetching data from YouTube API', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search YouTube"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((video) => (
          <div key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
