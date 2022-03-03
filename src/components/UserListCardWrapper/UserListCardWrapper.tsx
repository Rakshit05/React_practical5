import React, { useState } from "react";
import "./UserListCardWrapper.css";
import { UserList } from "../UserList/UserList";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import { users } from "../userDetails";

interface user {
  userAvatar: number;
  userName: string;
  userEmail: string;
}
export const UserListCardWrapper = () => {
  const [user, setUser] = useState<user | null>(null);
  return (
    <section>
      <div className="container">
        <div className="userListCardWrapper">
          <UserList
            users={users}
            handleHover={(user) => {
              setUser(user);
            }}
          />
          <UserProfileCard user={user} />
        </div>
      </div>
    </section>
  );
};
