document.getElementById('btn').addEventListener('click',function(){
const input = document.getElementById('input');
const inputValue = input ? input.value :'';
  for(let i = 0; i < 10; i++){

    const img_title      = document.createElement('h2');
    const img_dim        = document.createElement('div');
    const img_hover_text = document.createElement('p');
    const img_box        = document.createElement('div');
    const img            = document.createElement('img');

    img_hover_text.innerHTML=`Programming! ${inputValue}`
    img_title.innerHTML = 'Hello, Image'
    img.src = 'https://source.unsplash.com/random';
    img_hover_text.classList.add('img_hover_text');
    img_dim.classList.add('img_dim');
    img_box.classList.add('img_box');
    img.classList.add('img');

    img_dim.append(img_hover_text);
    img_box.append(img_dim,img_title,img);
    document.getElementById('target').append(img_box);
  }
  document.documentElement.scrollTop = document.body.scrollHeight;
})