import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from './TextInput';

const FormDialog =(props) => {
  const [name, setName ] = useState("")
  const [email, setEmail ] = useState("")
  const [description, setDescription] = useState("")

  const inputName = (event) =>{
    setName(event.target.value)
  }

  const inputEmail = (event) =>{
    setEmail(event.target.value)
  }

  const inputDescription = (event) =>{
    setDescription(event.target.value)
  }

  const submitForm = ()=>{
    const payload  =  {
      text: 'お問い合わせがありました\n' +
            'お名前:' + name + '\n' +
            'Email:' + email + '\n' +
            'お問い合わせ内容:\n' + description 　
    }

    const url = "???"

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(()=>{
      alert('お問い合わせありがとうございました。追ってご連絡いたします。')
      setName("")
      setEmail("")
      setDescription("")

      props.handleClose();

    })
  }

  return(
    <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <TextInput
              label={"お名前（必須）"}
              multiline={false}
              rows={1}
              value={name}
              type={"text"}
              onChange={inputName}
          />

          <TextInput
              label={"Email（必須）"}
              multiline={false}
              rows={1}
              value={email}
              type={"email"}
              onChange={inputEmail}
          />

          <TextInput
              label={"お問い合わせ内容（必須）"}
              multiline={true}
              rows={8}
              value={description}
              type={"text"}
              onChange={inputDescription}
          />

          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={submitForm} color="primary" autoFocus>
            送信する
          </Button>
        </DialogActions>
    </Dialog>
  )
}

export default FormDialog;
