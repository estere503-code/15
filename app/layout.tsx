import React from 'react';

export const metadata = {
  title: 'DPI HT 01 Financial Submission',
  description: 'Certified Agent Baseline Financial Report',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
