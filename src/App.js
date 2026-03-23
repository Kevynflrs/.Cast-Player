import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Player from './components/Player';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setSelectedFile(fileUrl);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/plain': ['.cast']
    },
    maxFiles: 1,
  });

  return (
    <div className="App">
      <h1>Lecteur de fichiers .cast</h1>

      {!selectedFile ? (
        <div
          {...getRootProps()}
          className="dropzone"
          style={{
            border: '2px dashed #ccc',
            padding: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            margin: '20px auto',
            maxWidth: '500px',
            background: isDragActive ? '#f0f0f0' : 'white',
          }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Déposez le fichier ici ...</p>
          ) : (
            <p>Glissez-déposez un fichier .cast ici, ou cliquez pour en sélectionner un.</p>
          )}
        </div>
      ) : (
        <Player src={selectedFile} />
      )}
    </div>
  );
}

export default App;