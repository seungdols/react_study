
<!DOCTYPE html>
<!--Created using JS Bin http://jsbin.com

Copyright (c) 2018 by seungdols (http://jsbin.com/xujenak/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/immutable/3.7.3/immutable.min.js"></script>
<script id="jsbin-javascript">
let a = 7;
let b = 7;
let object1 = { a:1, b:2 }
let object2 = { a:1, b:2 }

console.log('object1 === object2: ', object1 === object2)

let object3 = object1

console.log('object1 === object3: ', object1 === object3)

object1.c = 3;

console.log('object3: ', object3)



const { Map, fromJS, List } = Immutable;
const data = Map({
a:1,
b:2,
c:Map({
d:3,
e:4,
f:5})
})

const data2 = fromJS({

a: 1,
b: 2,
c: {
d: 3,
e: 4,
f: 5
}

})

console.log(data2)

//자바스크립트 객체로 변환
const deserialized = data.toJS();
console.log(deserialized);

//특정 키의 값 불러오기
data.get('a');

//깊이 위치하는 값 불러오기
data.getin(['c','d'])

//값 설정
const newData = data.set('a',4)

console.log(newData === data)

//깊숙이 위치하는 값 수정
const newData = data.setin(['c','d',10]);


//여러 값 동시에 수정
const newData = data.mergeIn(['c'], {d: 10, e: 10})

data.mergeIn(['c', 'd'], 10)
    .mergeIn(['c', 'e'], 20)


const list1 = List([0,1,2,3,4,5])
const list2 = List([
   Map({ value: 1}),
   Map({ value: 2})
])

const list3 = fromJS([
 { value: 1 },
 { value: 2 }
])

//get item
list.get(0)

//get value of item
list.get([0, 'value'])

//modify element of list
const newList = list.set(0, Map({ value: 10}))

//modify element value
const newList = list.setIn([0, 'value'], 10)

const newList = list.update(0, item => item.set('value', item.get('value') * 5))

//add item in last of list
const newList = list.push(Map({value: 3})

//add item in first of list
const newList = list.unshift(Map({value: 0}))

//delete item
const newList = list.delete(1);
const newList = list.pop()

//get length
console.log(list.size)

list.isEmpty()


</script>
</body>
</html>