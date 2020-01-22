document.getElementById('btn').addEventListener('click',function(){
  const img_title = document.createElement('h2');
  const img_box = document.createElement('div');
  const img = document.createElement('img');
  img_title.innerHTML = 'Hello, Image'
  img_box.classList.add('img_box');
  img.src = 'https://source.unsplash.com/random';
  img.classList.add('test_img');
  img_box.append(img_title,img);

  document.getElementById('target').append(img_box);
})