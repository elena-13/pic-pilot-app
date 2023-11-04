import React from 'react';

import { NumericFormat } from 'react-number-format';

import Select from '@/components/Select/Select';

import styles from './canvas-size.module.scss';

const CanvasSize = () => {
  const templateOptions = [
    { value: 'a1', label: 'A1' },
    { value: 'a2', label: 'A2' },
    { value: 'a3', label: 'A3' },
    { value: 'a4', label: 'A4' },
    { value: 'a5', label: 'A5' },
  ];

  const UnitsOptions = [
    { value: 'px', label: 'px' },
    { value: 'mm', label: 'mm' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <label className={styles.label}>Template</label>
        <Select options={templateOptions} placeholder="Select template" />
      </div>
      <div className={styles.item}>
        <label className={styles.label}>Units</label>
        <Select options={UnitsOptions} placeholder="Select units" />
      </div>
      <div className={styles.item}>
        <div className={styles.size}>
          <div className={styles.item}>
            <label className={styles.label}>Width</label>
            <NumericFormat value={1280} className={styles.input} />
          </div>
          <div className={styles.dash}>&#8212;</div>
          <div className={styles.item}>
            <label className={styles.label}>Height</label>
            <NumericFormat value={720} className={styles.input} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasSize;
