import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {Form, LabelForm, InputForm, BtnForm} from './ContactForm.styled'

function ContactForm({onAddContact}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    console.log(e.currentTarget.value);
    setName(e.currentTarget.name)
    switch
  };

const handleAddContact = e => {
        e.preventDefault();
    
        const newContact = {
          id: nanoid(),
          name: name.trim(),
          number: number.trim(),
        };
        
        onAddContact(newContact);
        name('');
        number('');
        // this.setState({ name: '', number: '' });
      };
    
      return (
              <Form onSubmit={handleAddContact}>
                <LabelForm>
                  Name
                  <InputForm
                    type="text"
                    value={name}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChange}
                  />
                </LabelForm>
                <LabelForm>
                  Number
                  <InputForm
                    type="tel"
                    value={number}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChange}
                  />
                </LabelForm>
        
                <BtnForm type="submit">
                  Add contact
                </BtnForm>
              </Form>
            );
}
  ContactForm.PropTypes = {
    onAddContact: PropTypes.func.isRequired,
  }
  export default ContactForm
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
// import {Form, LabelForm, InputForm, BtnForm} from './ContactForm.styled'

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   static propTypes = {
//     onAddContact: PropTypes.func.isRequired,
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({ [name]: value });
//   };

//   handleAddContact = e => {
//     e.preventDefault();

//     const newContact = {
//       id: nanoid(),
//       name: this.state.name.trim(),
//       number: this.state.number.trim(),
//     };
    
//     this.props.onAddContact(newContact);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <Form onSubmit={this.handleAddContact}>
//         <LabelForm>
//           Name
//           <InputForm
//             type="text"
//             value={name}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChange}
//           />
//         </LabelForm>
//         <LabelForm>
//           Number
//           <InputForm
//             type="tel"
//             value={number}
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChange}
//           />
//         </LabelForm>

//         <BtnForm type="submit">
//           Add contact
//         </BtnForm>
//       </Form>
//     );
//   }
// }

// export default ContactForm;
