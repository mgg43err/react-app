import React from 'react';
import d from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={d.dialog + ' ' + d.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => { 
  return (<div className={d.message}>{props.message}</div>);
}

const Dialogs = () => {
  return (
    <div className={d.dialogs}>
      <div className={d.dialogs_items}>
        <DialogItem name="Bill" id="1" />
        <DialogItem name="Gaby" id="2" />
        <DialogItem name="Michael" id="3" />
        <DialogItem name="Noah" id="4" />
        <DialogItem name="Oliver" id="5" />
        <DialogItem name="John" id="6"/>
      </div>
      <div className={d.messages}>
        <Message message="Hi" />
        <Message message="Hi, How is your IT-kamasutra?" />
        <Message message="Yo" />
        <Message message="Frontend" />
        <Message message="Yes" />
        <Message message="YESSSS"/>
      </div>
    </div>
  );
};

export default Dialogs;
