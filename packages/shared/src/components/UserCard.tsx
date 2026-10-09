import React from 'react';

export const UserCard= ({username}: {username?: string}) =>  {
    return (
        <div style={{ border: '1px solid green', padding: '20px', margin: '20px'  }}>
            <div>username: {username ?? "user"}</div>
            <div>password: 12345</div>
        </div>
    );
};
