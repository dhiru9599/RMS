import FormData from 'formdata-node';
import fetch from 'node-fetch'; // Vite project has it or we can use global fetch
import fs from 'fs';

async function test() {
  const formData = new FormData();
  formData.append('Name', 'Test Fetch JSON');
  
  const res = await fetch('https://formsubmit.co/rakhimishra57@gmail.com', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: formData
  });
  console.log(await res.text());
}
test();
