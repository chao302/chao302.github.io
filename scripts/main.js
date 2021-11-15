//把<img>元素的引用放在myImage变量里
let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
//将myImage的onclick事件与一个匿名函数绑定
myButton.onclick = function () {
  //获取图片的src值
  let mySrc = myImage.getAttribute("src");
  //判断是否为原始路径
  if (mySrc === "images/hand-drawing.png") {
    //是则更改为另一个图片的路径
    myImage.setAttribute("src", "images/hand-draw.png");
  } else {
    //不是就改回来
    myImage.setAttribute("src", "images/hand-drawing.png");
  }
};
