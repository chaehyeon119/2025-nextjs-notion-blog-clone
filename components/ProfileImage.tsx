'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ProfileImage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 브라우저에서 렌더링된 후에만 테마 값을 신뢰할 수 있음
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // SSR 시에는 아무것도 렌더링하지 않음
    return null;
  }

  return (
    <Image
      src={theme === 'light' ? '/images/profile-light.png' : '/images/profile-dark.png'}
      alt="짐코딩"
      width={144}
      height={144}
      className="object-cover"
    />
  );
}
