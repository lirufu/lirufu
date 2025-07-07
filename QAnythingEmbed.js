'use client';
import React, { useEffect } from 'react';

const QAnythingEmbed = () => {
  useEffect(() => {
    // 可以在这里添加任何初始化逻辑
  }, []);

  return (
    <div className="w-full h-screen">
      <script 
        src="https://ai.youdao.com/saas/qanything/js/agent-iframe-min.js"
        id="qanything-iframe"
        data-agent-src="https://ai.youdao.com/saas/qanything/#/bots/2639C2181F9F4E85/share"
        data-default-open="false"
        data-drag="false"
        data-open-icon="https://download.ydstatic.com/ead/icon-qanything-iframe-btn.png"
        data-close-icon="https://download.ydstatic.com/ead/icon-qanything-iframe-btn.png"
        defer
      />
    </div>
  );
};

export default QAnythingEmbed;
    
   