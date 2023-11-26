import React, { useState } from 'react';

import { NumericFormat } from 'react-number-format';

import Select from '@/components/Select/Select';

import { templateOptions, unitsOptions } from './constants';

import styles from './canvas-size.module.scss';

const CanvasSize = () => {
  const [selectedTemplate, setSelectedTemplatet] = useState(templateOptions[0]);

  const [width, setWidth] = useState(1280);
  const [height, setHeight] = useState(720);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <label className={styles.label}>Template</label>
        <Select
          options={templateOptions}
          placeholder="Select template"
          value={selectedTemplate}
          onChange={(newValue) => setSelectedTemplatet(newValue!!)}
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label}>Units</label>
        <Select options={unitsOptions} placeholder="Select units" />
      </div>
      <div className={styles.item}>
        <div className={styles.size}>
          <div className={styles.item}>
            <label className={styles.label}>Width</label>
            <NumericFormat
              className={styles.input}
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
            />
          </div>
          <div className={styles.dash}>&#8212;</div>
          <div className={styles.item}>
            <label className={styles.label}>Height</label>
            <NumericFormat
              className={styles.input}
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasSize;
