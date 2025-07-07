'use client';
import React, { useEffect, useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [codingTime, setCodingTime] = useState(null);

  useEffect(() => {
    const fetchWakaTimeData = async () => {
      try {
        const response = await fetch('/api/wakatime');
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const responseData = await response.json();
        setCodingTime(responseData);
      } catch (error) {
        console.error("Failed to fetch WakaTime stats:", error);
        return null;
      }
    };

    fetchWakaTimeData();
  }, []);

  return (
    <footer className="bg-slate-800 text-slate-300 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} 《Web前端开发》课程练习平台. 保留所有权利.
        </p>
        <p className="text-xs mt-2">
          使用 Next.js 和 Tailwind CSS 构建
        </p>
        {codingTime && (
          <div className="text-xs mt-2 space-y-1">
            <p>本周编码时长: {codingTime.currentWeek}</p>
            <p>总编码时长: {codingTime.allTime}</p>
          </div>
        )}
      </div>
    </footer>
  );
}