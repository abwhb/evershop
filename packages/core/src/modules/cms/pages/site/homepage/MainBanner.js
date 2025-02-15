import React from 'react';
import Button from '../../../components/site/Button';
import './MainBanner.scss';

export default function MainBanner() {
  return (
    <div className="main-banner-home flex">
      <div className="container text-center self-center">
        <h2 className="h1 text-white">Chic handbags reimagined for modern life.</h2>
        <Button url="/products" title="SHOP NOW" variant="primary" />
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};