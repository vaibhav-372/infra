import React from "react";

const Contacts = ({ contacts }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg">
        <h3 className="text-2xl font-semibold text-center mb-8">Contact Messages</h3>
        {contacts.length === 0 ? (
          <p className="text-center">No contact messages received yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {contacts
              .slice()
              .reverse() // This will reverse the array to show the latest contacts first
              .map((contact, index) => (
                <div key={index} className="p-4 border shadow-md rounded-md bg-white">
                  <div className="mb-2 flex">
                    <h4 className="text-sm font-bold w-32">Name:</h4>
                    <p className="text-sm">{contact.name}</p>
                  </div>
                  <div className="mb-2 flex">
                    <h4 className="text-sm font-bold w-32">Email:</h4>
                    <p className="text-sm">{contact.email}</p>
                  </div>
                  <div className="mb-2 flex">
                    <h4 className="text-sm font-bold w-32">Phone Number:</h4>
                    <p className="text-sm">{contact.number}</p>
                  </div>
                  <div className="mb-2 flex">
                    <h4 className="text-sm font-bold w-32">Message:</h4>
                    <p className="text-sm">{contact.message}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
