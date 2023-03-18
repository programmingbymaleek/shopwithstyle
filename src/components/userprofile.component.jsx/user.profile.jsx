import React from "react";

function UserProfile({ user }) {
  const { displayName } = user;
  return (
    <div>
      <p>Hello {displayName} welcome to your page</p>
    </div>
  );
}

export default UserProfile;
