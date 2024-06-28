import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="1188130345539422" chatSupport>
      <CustomChat pageId="347105408490559" minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookMsg;
