import React from 'react';
import { Wrap, Title, Contact, Label, Input, Button, Textarea } from './ConractForm.styles';

export const ContactForm = () => {
  return (
    <Wrap>
      <Title>Contact with us</Title>
      <Contact>
        <Label htmlFor="email">
          E-mail
          <Input type="text" id="email" />
        </Label>
        <Label htmlFor="description">
          Write message to us
          <Textarea name="description"></Textarea>
        </Label>
        <Button>Send</Button>
      </Contact>
    </Wrap>
  );
};
