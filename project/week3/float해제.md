## float해제 

=> 전문용어는 **clearfix**

`float`를 하게되면 기본적으로 엘리먼트들은 자리잡고 있던 공간을 잃게됩니다.

그래서 이 부분을 부모 엘리먼트가 잡아줘야 하는데 이때 사용하는 방법중 하나가

```css
.element:after{
    content:"";
    display:block;
    clear:both;
}
```

이방법입니다. 부모요소에 적용하면 되구요. 하나씩 살펴보면,

`:after`를 써서 가상요소를 만듭니다.  

따로 글자를 넣어줄건 아니기 때문에 `content`는 `" "`로 비워줍니다.

그리고 `clear:both`를 명시함으로써 `float` 설정된 흐름을 `Normal flow`로 설정할 수 있습니다. 

`display:block`을 넣어줌으로써 `after`를 `block `레벨로 바꿔주면 부모 엘리먼트를 `after`로 마무리 해주면서 공간을 잡을 수 있게됩니다.



번외) float이 적용된 엘리먼트에 clear:both를 하게되면 엘리먼트들이 float가 막혀 원래의 block상태로 되는건 확인 할 수 있으나 공간은 여전히 잡지 못하는 부분을 확인할 수 있습니다.

[심화내용](http://wagunblog.com/wp/?p=195)

