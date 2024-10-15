import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../context/auth';
import Layout from '../Layout/Layout';

function Invitation() {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [invitationLink, setInvitationLink] = useState('');
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('left'); // Default side

  // Function to generate the invitation link with the wallet address and preferred side
  const generateInvitationLink = (walletAddress, preferredSide) => {
    const link = `${window.location.origin}/signup?referral=${walletAddress}&side=${preferredSide}`;
    setInvitationLink(link);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(invitationLink);
    setIsLinkCopied(true);
    toast('Invitation link copied to clipboard!', {
      duration: 4000,
      position: 'top-center',
      style: {
        background: 'white',
        color: 'black',
      },
      icon: '👏',
    });

    setTimeout(() => {
      setIsLinkCopied(false);
    }, 2000);
  };

  useEffect(() => {
    generateInvitationLink(auth?.user?.referralCode, selectedPosition);
  }, [selectedPosition]);

  return (
    <Layout title={'Invite - Earning Money'}>
      <div className="mx-auto p-4 h-[450px] text-black mb-10">
        <div className='w-[90%] m-auto mt-28 shadow-xl shadow-gray-400 pb-10'>
        <div className="flex flex-col justify-center items-center text-lg">
          <div>Your Invitation Code</div>
          <div className="font-bold">{auth?.user?.referralCode}</div>
        </div>
        <div className="mt-4">
          <div>Select the side for the referred user:</div>
          <div className="flex justify-center mt-2">
            <button
              className={`mr-4 w-24  ${selectedPosition === 'left' ? 'bg-red-600' : 'bg-gray-400'} text-white p-2 rounded-lg`}
              onClick={() => setSelectedPosition('left')}
            >
              Left
            </button>
            <button
              className={`w-24 ${selectedPosition === 'right' ? 'bg-red-600' : 'bg-gray-400'} text-white p-2 rounded-lg`}
              onClick={() => setSelectedPosition('right')}
            >
              Right
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div>Your Invitation Link</div>
          <div className="flex flex-col justify-center items-center mt-2">
            <div className="w-4/5 border p-2 rounded-lg border-black">{invitationLink}</div>
            <div className="w-4/5">
              <button
                className={`rounded-full bg-gradient-to-r from-red-400 to-red-600 text-white p-3 w-full mt-4 ${isLinkCopied ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={copyToClipboard}
                disabled={isLinkCopied}
              >
                {isLinkCopied ? 'Link Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}

export default Invitation;