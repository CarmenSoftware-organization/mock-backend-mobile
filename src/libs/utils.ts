// Utility function สำหรับสร้าง UUID v4
export const generateId = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// Utility function สำหรับสร้าง timestamp ปัจจุบัน
export const getCurrentTimestamp = (): string => {
  return new Date().toISOString();
};

// Utility function สำหรับสร้างตัวเลขสุ่ม
export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Utility function สำหรับสร้างตัวเลขสุ่มที่เป็นทศนิยม
export const getRandomFloat = (min: number, max: number): number => {
  return parseFloat(((Math.random() * (max - min) + min) + '.' + getRandomInt(1,99999)));
};