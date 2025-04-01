export default {
    onSpeechStart: jest.fn(),
    onSpeechEnd: jest.fn(),
    onSpeechResults: jest.fn(),
    removeAllListeners: jest.fn(() => Promise.resolve()),
    start: jest.fn(() => Promise.resolve()),
    stop: jest.fn(() => Promise.resolve()),
    destroy: jest.fn(() => Promise.resolve()), // Ensure destroy() returns a Promise
    isAvailable: jest.fn(() => Promise.resolve(true)), // Mock isAvailable() correctly
  };