export type entry = {
  key: string;
  search: string;
  process: string;
  numFiles: number;
  files: string;
};
export const data: entry[] = [];

for (let i = 1; i <= 16; i++) {
  const entry: entry = {
    key: i.toString(),
    search: generateRandomArabicName(),
    process: generateRandomArabicName(),
    numFiles: generateRandomNumber(),
    files: generateRandomArabicName(),
  };

  data.push(entry);
}

function generateRandomArabicName() {
  const names = ["عبد الله", "فاطمة", "محمد", "سارة", "علي", "ليلى"];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}
function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}
