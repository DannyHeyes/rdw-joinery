import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { SubmitButton } from '../buttons/buttons';

import { form, formGroup, formSuccess } from './contactform.module.scss';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqkwdoda");
  if (state.succeeded) {
      return (
          <div className={formSuccess}>
            <h4>
                Thank you for your message!
            </h4>
            <p>
                We will get back to you as soon as possible to arrange a your custom quote!
            </p>
          </div>
      );
  }
  return (
      <form onSubmit={handleSubmit} className={form}>
        <p>
            Please provide as much information in the message box as possible so we have a better idea of how we can help you moving forward. 
        </p>

        <div className={formGroup}>
            <label htmlFor="name">
                Name
            </label>
            <input name="name" type="text" id="name" />
        </div>

        <div className={formGroup}>
            <label htmlFor="email">
                Email address
            </label>
            <input type="email" name="email" id="email" />
            <ValidationError prefix="Email" field="email"errors={state.errors}/>
        </div>

        <div className={formGroup}>
            <label htmlFor="message">
                Message
            </label>
            <textarea id="message" name="message" cols="30" rows="10" />
            <ValidationError prefix="Message" field="message"errors={state.errors}/>
        </div>

      <SubmitButton>
          Submit
      </SubmitButton>
    </form>
  );
}