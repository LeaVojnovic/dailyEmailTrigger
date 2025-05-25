import { render, pretty } from '@react-email/render';
import { MyTemplate } from './src/emails/MyTemplate';
import * as React from 'react';

async function main() {
  const html = await pretty(await render(<MyTemplate />));
  console.log(html);
}

main();
