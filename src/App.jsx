import { useState } from 'react'

function FormInput ({labelText, labelFor, type, inputValue, handleInput}) {

  function listenToInput (e) {
    handleInput(e.target.value);
  }
  
  return (
  <>
    <label htmlFor={labelFor}>
      {labelText}
      <input 
        value={inputValue}
        type={type}
        onChange={listenToInput}
      />
    </label>
  </>
  );
}

function SubmitButton (firstName, lastName, email, phone) {

  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <button onClick={() => setIsActive(!isActive)}>hi</button>
      {isActive ? (
        <p>"Moini"</p>
      ) : (
      <p>"Tach"</p>
      )}
    </>
  )
}

function GeneralInfo (props) {

  
  return (
    <>
      <h2>General Information</h2>
      <FormInput
        labelText="First name:"
        labelFor="firstName"
        type="text"
        inputValue = {props.firstName}
        handleInput = {props.setFirstName}
        />
      <FormInput
        labelText="Last name:"
        labelFor="lastName"
        type="text"
        inputValue={props.lastName}
        handleInput={props.setLastName}
        />
      <FormInput
        labelText="Email:"
        labelFor="email"
        type="email"
        inputValue={props.email}
        handleInput={props.setEmail}
        />
      <FormInput 
        labelText="Phone number:"
        labelFor="phone"
        type="tel"
        inputValue={props.phone}
        handleInput={props.setPhone}
        />
      <SubmitButton
        firstName = {props.firstName}
        lastName = {props.lastName}
        email = {props.email}
        phone = {props.phone}
        />
  </>
  )
}



export default function General() {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <section>
      <GeneralInfo
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}

        setFirstName = {setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setPhone={setPhone}

      />
    </section>

  )
}


