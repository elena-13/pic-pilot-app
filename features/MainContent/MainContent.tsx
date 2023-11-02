import React, { useState } from 'react'
import cx from 'classnames'

import Button from '@/components/Button/Button'

import styles from './main-content.module.scss';

const MainContent = () => {
  const [showOriginal, setShowOriginal] = useState(true);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, canvasId: string): void => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reader = new FileReader();

    reader.onload = function(event: ProgressEvent<FileReader>) {
        if (!event.target || typeof event.target.result !== 'string') return;
        const img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }
        img.src = event.target.result;
    }
    if (e.target.files && e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
    }
}


  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {showOriginal && (
          <div className={styles.imageContainer}>
            <canvas id="originalCanvas"></canvas>
            <input type="file" onChange={(e) => handleImageUpload(e, 'originalCanvas')} />
            <span>Original Image</span>
          </div>
        )}
        {!showOriginal && (
          <div className={styles.imageContainer}>
            <canvas id="transformedCanvas"></canvas>
            <input type="file" onChange={(e) => handleImageUpload(e, 'transformedCanvas')} />
            <span>Transformed Image</span>
          </div>
        )}
      </div>

      <div className={styles.footer}>
        <div className={cx(styles.footerItem, styles.footerItemCentered)}>
          <div className={styles.zoomControls}>
            <Button type="button" variant='secondary'>-</Button>
            <span>100%</span>
            <Button type="button" variant='secondary'>+</Button>
          </div>
        </div>
        <div className={styles.footerItem}>
          <Button type="button" onClick={() => setShowOriginal(!showOriginal)} variant='secondary'>Toggle View</Button>
        </div>
      </div>
    </div>
  )
}

export default MainContent
