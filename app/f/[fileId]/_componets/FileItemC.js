import { Download } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

function FileItemC({ file }) {
  const [password, setPassword] = useState('');

  const handleDownload = () => {
    if (file.password === password) {
      window.open(file.fileUrl);
    } else {
      alert('Incorrect password. Please enter the correct password to download the file.');
    }
  };

  return (
    <div>
      {file && (
        <div className='p-5 rounded-md bg-white flex flex-col items-center'>
          <div className='text-center flex-col gap-3 items-center flex'>
            <h2 className='text-[20px] text-gray-600'>
              <strong className='text-primary'>{file.userName} </strong>
              Shared the file with You
            </h2>
            <h2 className='text-[10px] text-gray-400'>Find File details below</h2>
            <Image
              src='/download-file.gif'
              width={150}
              height={150}
              alt='download'
              className='w-[150px] h-[150px]  p-5 '
            />
            <h2 className='text-gray-500 text-[15px]'>
              {file.fileName} ⚡ {file.fileType}  ⚡ {(file.fileSize / 1024 / 1024).toFixed(2)} MB
            </h2>
          </div>

          {file.password.length > 3 && (
            <input
              type='password'
              className='p-2 border rounded-md text-[14px] mt-5 text-center outline-blue-400'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter password to access'
            />
          )}

          <button
            className={`flex gap-2 p-2 bg-primary text-white rounded-full w-full items-center hover:bg-blue-600 text-[14px] mt-5 text-center justify-center ${
              file.password !== password ? 'disabled:bg-gray-300' : ''
            }`}
            onClick={handleDownload}
            disabled={file.password !== password}
          >
            <Download className='h-4 w-4' /> Download
          </button>

          <h2 className='text-gray-400 text-[12px]'>*Terms and Conditions apply</h2>
        </div>
      )}
    </div>
  );
}

export default FileItemC;
