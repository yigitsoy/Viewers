import React from 'react';
import { Link } from 'react-router-dom';

// Todo: We should make this configurable via modes and extensions
export default function NotFound({
  message = 'Sorry, this page does not exist',
}) {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="py-8 px-8 mx-auto bg-secondary-dark shadow-md space-y-2 rounded-lg">
        <div className="text-center space-y-2 pt-4">
          <div className="space-y-2">
            <p className="text-blue-300 text-base">
              <h4 className="text-2xl">{message}</h4>
            </p>
            <p className="text-xg text-primary-active font-semibold pt-8">
              <Link to={'/'}>Click here to go back to the Study List</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
