import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import Layout from '../Layout/Layout';

function Pdf_Video() {
  const [showContent, setShowContent] = useState('pdf'); // State to toggle between PDFs and Videos

  // Mock data for PDFs
  const pdfs = [
    { id: 1, name: "PDF Document 1", url: "/path-to-pdf1.pdf" },
    { id: 2, name: "PDF Document 2", url: "/path-to-pdf2.pdf" },
    { id: 3, name: "PDF Document 3", url: "/path-to-pdf3.pdf" },
  ];

  // YouTube video iframe codes
  const videos = [
    "https://www.youtube.com/embed/n92qIk6nU84?si=nVd-A7Gf95ztRMef",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/lY2yjAdbvdQ"
  ];

  return (
    <Layout>
      <div className='flex pt-24 justify-around'>
        {/* Toggle buttons */}
        <Button 
          onClick={() => setShowContent('pdf')}
          className={`p-4 border-2 font-bold hover:text-white hover:border-b-2 duration-300 w-[40%] rounded-lg ${showContent === 'pdf' ? 'bg-gray-300' : ''}`}
        >
          PDF
        </Button>
        <Button 
          onClick={() => setShowContent('videos')}
          className={`p-4 border-2 font-bold hover:text-white hover:border-b-2 duration-300 w-[40%] rounded-lg ${showContent === 'videos' ? 'bg-gray-300' : ''}`}
        >
          Videos
        </Button>
      </div>

      {/* Conditional rendering of PDF list or videos */}
      <div className='mt-10'>
        {showContent === 'pdf' ? (
          <div className='flex flex-col items-center'>
            {pdfs.map(pdf => (
              <a 
                key={pdf.id} 
                href={pdf.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className='p-4 m-2 bg-gray-200 border border-gray-400 rounded-lg w-[60%] text-center hover:bg-gray-300 transition'
              >
                {pdf.name}
              </a>
            ))}
          </div>
        ) : (
          <div className='flex flex-col items-center'>
            {videos.map((video, index) => (
              <div className='w-[90%] shadow-2xl my-4 p-4 rounded-lg bg-white'>
                <iframe
                key={index}
               
                src={video}
                title={`YouTube video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='rounded-lg w-[100%]'
              />
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Pdf_Video;
