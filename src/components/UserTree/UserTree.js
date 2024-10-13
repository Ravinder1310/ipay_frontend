import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import './UserTree.css';
import Layout from '../Layout/Layout';

const UserTree = () => {
  const [treeData, setTreeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [auth] = useAuth(); // Updated to destructure auth directly

  const rootUserId = auth?.user?.id; // The root user ID
  console.log("root user id ", rootUserId);

  // Helper function to map user data to tree structure
  const buildTree = (users, userId) => {
    const user = users.find((u) => u._id === userId);
    if (!user) return null;

    // Special handling for root user
    if (user._id === rootUserId) {
      return {
        name: 'You', // Display "You" for the root user
        attributes: {
          isActive: user.active ? 'Active' : 'Inactive',
          earningWallet: user.earningWallet,
        },
        children: [
          user.leftChild ? buildTree(users, user.leftChild) : null,
          user.rightChild ? buildTree(users, user.rightChild) : null,
        ].filter(Boolean), // Removes null values if there are no children
      };
    }

    return {
      name: user.referralCode,
      email: user.email,
      attributes: {
        earningWallet: user.earningWallet,
        rank: user.rank,
        isActive: user.active ? 'Active' : 'Inactive',
      },
      children: [
        user.leftChild ? buildTree(users, user.leftChild) : null,
        user.rightChild ? buildTree(users, user.rightChild) : null,
      ].filter(Boolean), // Removes null values if there are no children
    };
  };

  useEffect(() => {
    const fetchUserTree = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/all-users`);
        const users = response.data;
        console.log(users);

        const tree = buildTree(users, rootUserId);
        setTreeData([tree]); // Wrap in array because react-d3-tree expects an array
        setLoading(false);
      } catch (err) {
        setError('Error fetching user tree');
        setLoading(false);
      }
    };

    fetchUserTree();
  }, [rootUserId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!treeData || treeData.length === 0 || !treeData[0]) {
    return <p>No tree data available.</p>;
  }

  // Render the user tree using react-d3-tree
  return (
    <Layout>
      <div className='pt-24 bg-blue-200 flex flex-col items-center'> {/* Centering the entire layout */}
        <h1 className='text-black font-bold mb-4 text-center'>
          This is your team tree, minimize the tree for a better experience
        </h1>
        <div className='rounded-2xl text-white w-full px-4 py-4 justify-between font-bold'>
          <div className='flex my-4 items-center'>
            <div className='h-12 w-12 mx-2 bg-red-500 rounded-full'></div>
            <div> Active</div>
          </div>
          <div className='flex my-4 items-center'>
            <div className='h-12 w-12 mx-2 bg-green-500 rounded-full'></div>
            <div>Not Active</div>
          </div>
        </div>

        <div style={{ width: '100%', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Tree
            data={treeData}
            orientation="vertical"  // Vertical tree layout
            translate={{ x: 0, y: 0 }} // Adjust translation to center the tree
            nodeSize={{ x: 400, y: 300 }}  // Increase node size to allow more spacing
            pathFunc="diagonal" // Diagonal lines between nodes
            renderCustomNodeElement={({ nodeDatum }) => (
              <g>
                <circle
                  r="60"
                  fill={nodeDatum.attributes?.isActive === 'Active' ? 'green' : 'red'}
                  stroke="black"
                  strokeWidth="4"
                />
                <text fill="white" fontWeight="bold" strokeWidth="0.1" x="-45" y="-10">
                  {nodeDatum.email}
                </text>
                {nodeDatum.attributes && (
                  <text fill="white" fontWeight="bold" strokeWidth="0.3" x="-40" y="20">
                    Wallet: ${(nodeDatum.attributes.earningWallet).toFixed(2)}
                  </text>
                )}
              </g>
            )}
            styles={{
              links: {
                stroke: 'white', // White line color
                strokeWidth: 3,  // Line thickness
              },
            }}
            pathClassFunc={() => 'custom-link'} // Use custom CSS class for links
          />
        </div>
      </div>
    </Layout>
  );
};

export default UserTree;
