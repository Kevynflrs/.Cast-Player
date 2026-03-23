import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Player from './components/Player';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setSelectedFile(fileUrl);
      setFileName(file.name);
    }
  }, []);

  const resetFile = () => {
    setSelectedFile(null);
    setFileName('');
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'text/plain': ['.cast'] },
    maxFiles: 1,
  });

  return (
    <div className="App">
      <h1>Lecteur de fichiers .cast</h1>

      {!selectedFile ? (
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Déposez le fichier ici ...</p>
          ) : (
            <p>Glissez-déposez un fichier .cast ici, ou cliquez pour en sélectionner un.</p>
          )}
        </div>
      ) : (
        <div className="player-wrapper">
          <div className="file-info">
            <span>Fichier : {fileName}</span>
            <button onClick={resetFile} className="reset-button">Changer de fichier</button>
          </div>
          <Player src={selectedFile} />
        </div>
      )}
    </div>
  );
}

export default App;