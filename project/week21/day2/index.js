const getDataBtn = document.querySelector("#getDataBtn");
const view = document.querySelector("#view");

const api = {
  address: "https://jsonplaceholder.typicode.com",
  post: "/posts",
};

getDataBtn.addEventListener("click", function (evt) {
  // evt.target;
  axios.get(api.address + api.post).then((response) => {
    console.log(response);
    const drawFormat = {
      data: response.data,
      target: view,
    };
    dataDrawing(drawFormat);
  });
});

// list.map().filter().reserver();

function dataDrawing(config) {
  const { target, data } = config;

  $(target).html(JSON.stringify(data));
}

// function test(eventName, callback) {
//   const clickEvent = {
//     name: "world",
//     target: "world~~",
//   };
//   if (eventName === "click") {
//     callback(clickEvent);
//   }
// }

// test("click", function (obj) {
//   console.log(obj, "obj");
//   console.log("hello 1");
// });

// function a(a,s,sfg,sfg,dfh,erh,erhe,rher,herh,erhe,rh,weg){

// }

// const my =10;

// router.get('https://jsonplaceholder.typicode.com/posts',function(req){

//   const {res} = DBquery(`SELECT * from post`);
//   req.json(res)

//   db.query(`SELECT * from post`,function(data){
//     // 'data' || {} || []
//     req.json(data)
//   })
//   db.query(`SELECT * from post`,function(data){
//     // 'data' || {} || []
//     req.json(data)
//   })

//   db.query(`SELECT * from post`,function(data){
//     // 'data' || {} || []
//     req.json(data)
//   })

// })

// function query(string,callback){

//   if(string === "click"){
//     callback(data)
//   }
//   if(string === "keyup"){
//     callback(data)
//   }

//   const data = DATABASE(string);

//   if(data){
//     callback(data)
//   }

// }
