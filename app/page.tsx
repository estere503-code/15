import React from 'react';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>DPI HT 01 Financial Submission</h1>
      <p>Status: Agent 1 Baseline Certified</p>
      <ul>
        <li><strong>Corrected Net Profit:</strong> €65,000</li>
        <li><strong>Closing Cash:</strong> €60,000</li>
        <li><strong>Net Receivables:</strong> €168,000</li>
        <li><strong>Inventory:</strong> €121,000</li>
      </ul>
      <p>
        View raw data at <a href="/submission.json">/submission.json</a>
      </p>
    </main>
  );
}
