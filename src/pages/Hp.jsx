import React from 'react'
import { useState } from 'react'

const Hp = () => {
    const [selectedEmoji, setSelectedEmoji] = useState(null);
    const [messageSent, setMessageSent] = useState(false);
  
    const handleEmojiClick = (emoji) => {
      setSelectedEmoji(emoji);
      setMessageSent(true);
    };
  
    return (
      <div className="flex justify-center items-center h-92">
        <div className="w-auto p-8 mt-10 bg-white shadow-xl rounded-xl">
          <h1 className="text-3xl font-semibold mb-2">How are you feeling today?</h1>
          <p className="text-gray-600 mb-6">Select an emoji that best represents your current mood.</p>
          <div className="grid grid-cols-3 gap-4">
            <div className={`cursor-pointer bg-yellow-300 p-6 flex justify-center items-center rounded-lg transition-transform transform hover:scale-105 ${selectedEmoji === '😢' && 'bg-yellow-500'}`} onClick={() => handleEmojiClick('😢')}>
              <div className="text-4xl">😢</div>
              <div className="ml-4 text-lg font-medium">Sad</div>
            </div>
            <div className="cursor-pointer bg-orange-300 p-6 flex justify-center items-center rounded-lg transition-transform transform hover:scale-105" onClick={() => handleEmojiClick('😊')}>
              <div className="text-4xl">😊</div>
              <div className="ml-4 text-lg font-medium">Happy</div>
            </div>
            <div className="cursor-pointer bg-red-300 p-6 flex justify-center items-center rounded-lg transition-transform transform hover:scale-105" onClick={() => handleEmojiClick('😫')}>
              <div className="text-4xl">😫</div>
              <div className="ml-4 text-lg font-medium">Exhausted</div>
            </div>
            <div className="cursor-pointer bg-pink-300 p-6 flex justify-center items-center rounded-lg transition-transform transform hover:scale-105" onClick={() => handleEmojiClick('😃')}>
              <div className="text-4xl">😃</div>
              <div className="ml-4 text-lg font-medium">Excited</div>
            </div>
            <div className="cursor-pointer bg-blue-300 p-6 flex justify-center items-center rounded-lg transition-transform transform hover:scale-105" onClick={() => handleEmojiClick('😴')}>
              <div className="text-4xl">😴</div>
              <div className="ml-4 text-lg font-medium">Tired</div>
            </div>
            <div className="cursor-pointer bg-green-300 p-6 flex justify-center items-center rounded-lg transition-transform transform hover:scale-105" onClick={() => handleEmojiClick('😕')}>
            <div className="text-4xl">😕</div>
              <div className="ml-4 text-lg font-medium">Confused</div>
            </div>
          </div>
          {messageSent && (
            <div data-testid="message-banner" className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
              Message Sent! You selected: {selectedEmoji}
            </div>
          )}
        </div>
      </div>
  )
}

export default Hp