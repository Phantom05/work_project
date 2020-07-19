// NOTE: 클래스를 사용하는이유, (상속, 재사용)
class Common {
  constructor() {
    this.hello = "world";
  }

  el(name) {
    return document.querySelector(`#${name}`);
  }
}
class Page extends Common {
  constructor(props) {
    super(props);
    this.config = {
      carName: props.name,
      pageName: props.pageName,
    };
  }
  bbang() {
    console.log("baang");
  }
  run(callback) {
    const self = this;
    console.log(self);
    const setting = {
      config: self.config,
      parent: self,
    };
    callback(setting);
  }
}

const setting = {
  name: "benz",
  pageName: "login",
};

const page = new Page(setting);

page.run(function (props) {
  const { parent: pr } = props;
  console.log(props);
  console.log(pr.el("root"));
  console.log("run callback");
});

// console.log(hello);
// console.log(hello1);
// console.log(hello.bbang());

// const setting = {
//   width: 200,
//   height: 400,
// };
// const modal = new Modal();
// modal.open(setting);

// async function main(){
//  const movieData = await axios.get('/../dataJson.json')
// }

// main()
