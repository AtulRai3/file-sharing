'use client'
// Files.js

import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import app from './../../../../firebaseConfig';
import TotalFileCard from './_components/TotalFileCard';
import FileList from './_components/FileList';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

function Files() {
  const db = getFirestore(app);
  const { user } = useUser();
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getAllUserFiles();
    }
  }, [user]);

  const getAllUserFiles = async () => {
    try {
      const q = query(collection(db, 'uploadedFile'), where('userEmail', '==', user.primaryEmailAddress.emailAddress));
      const querySnapshot = await getDocs(q);
      const files = [];
      querySnapshot.forEach((doc) => {
        files.push({ id: doc.id, ...doc.data() });
      });
      setFileList(files);
    } catch (error) {
      console.error('Error fetching user files:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteFile = async (fileId) => {
    try {
      await deleteDoc(doc(db, 'uploadedFile', fileId));
      setFileList(fileList.filter((file) => file.id !== fileId));
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-[20px]">My Files</h2>
      {loading ? (
        <p>Loading...</p>
      ) : fileList.length === 0 ? (
        <>
          <h2 className="mb-6">You don't have any files</h2>
          <Link href="/upload" className="p-2 text-white bg-primary rounded-md mt-7">
            Upload Now
          </Link>

        </>
      ) : (
        <>
          <TotalFileCard totalFile={fileList.length} />
          <FileList fileList={fileList} onDelete={handleDeleteFile} />
        </>
      )}
    </div>
  );
}

export default Files;
