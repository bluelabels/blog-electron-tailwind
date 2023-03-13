import { useCallback, useEffect, useState } from 'react';

type ColorMode = 'light' | 'dark';

export default function DarkModeButton() {
  const [colorMode, setColorMode] = useState<ColorMode>('light');

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setColorMode('dark');
    } else {
      setColorMode('light');
    }
  }, []);

  const handleColorModeButton = useCallback(() => {
    if (colorMode === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setColorMode('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setColorMode('dark');
    }
  }, [colorMode]);

  return (
    <div>
      <button
        type="button"
        className="w-50 bg-blue-200 dark:bg-blue-800 text-gray-800 dark:text-gray-200"
        onClick={handleColorModeButton}
      >
        {colorMode === 'dark' ? '버튼 (다크 모드)' : '버튼 (라이트 모드)'}
      </button>
    </div>
  );
}
