import React from 'react';
import d from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={d.dialogs}>
      <div className={d.dialogs_items}>
        <div className={d.item}>Bill</div>
        <div className={d.item}>Gaby</div>
        <div className={d.item}>John</div>
        <div className={d.item}>Michael</div>
        <div className={d.item}>Noah</div>
        <div className={d.item}>Oliver</div>
      </div>
    </div>
  );
};

export default Dialogs;
