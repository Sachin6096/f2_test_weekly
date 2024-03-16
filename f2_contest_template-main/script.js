/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log

  arr.map((obj) => {
      if(obj.profession === "developer")
      {
        console.log(obj);
      }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log

    arr.forEach((obj) => {

      if(obj.profession === "developer")
      {
        console.log(obj);
      }
    })
}

function addData() {
  //Write your code here, just console.log
  let data = {id:4,name:"susan",age:"20",profession:"intern"}
  arr.push(data);
  console.log(data);
}

function removeAdmin() {
  //Write your code here, just console.log

  let newArray = [];
  arr.forEach((obj) => {

    if(obj.profession != "admin")
    {
      newArray.push(obj);
    }
  });

  arr = newArray;
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log

  let arr2 = [
    {id: 5, name: "sachin", age: "20", profession:"developer"},
    {id: 6, name: "sonia", age: "18", profession:"intern"},
    {id: 7, name: "sandeep", age: "19", profession:"admin"},
  ];

  arr = arr.concat(arr2)
  console.log(arr)
}
