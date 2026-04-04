const fs = require('fs');
async function test() {
  const formData = new FormData();
  formData.append('Name', 'Test FormSubmit');
  formData.append('attachment', new Blob(['test content'], {type: 'text/plain'}), 'test.txt');

  const res = await fetch('https://formsubmit.co/ajax/rakhimishra57@gmail.com', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });
  console.log(await res.text());
}
test();
