import * as React from 'react';
import { Html, Text, Hr, Button } from '@react-email/components';

export function MyTemplate() {
  return (
    <Html lang="hr">
      <Text>Poštovani korisniče,</Text>
      <Hr />
      <Text>Imate 5 računa koji čekaju ovjeru.</Text>
      <Button href="https://tvoja-stranica.com/ovjera">Ovjeri sada</Button>
    </Html>
  );
}
