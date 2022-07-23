function httpGetAsync(theUrl, resolve) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.status == 200 && xmlHttp.readyState == 4) {
      resolve(xmlHttp);
    }
  };
  xmlHttp.open("GET", theUrl, true);
  xmlHttp.send(null);
}

const promiseResult1 = new Promise((resolve, reject) => {
  httpGetAsync(
    "https://cdn.tgdd.vn/2021/04/CookProductThumb/2-620x620-46.jpg",
    resolve
  );
});
const promiseResult2 = new Promise((resolve, reject) => {
  httpGetAsync("https://www.hoteljob.vn/files/pancake-la-gi-4.jpeg", resolve);
});
const promiseResult3 = new Promise((resolve, reject) => {
  httpGetAsync(
    "https://img.tastelife.tv/assets/uploads/2021/12/tBTNMo77h2Qhd-2-684x480.jpg",
    resolve
  );
});

const excuteAsync = async () => {
    try {
        const response1 = await promiseResult1;
        document.getElementById("img_1").setAttribute("src", response1.responseURL);
        const response2 = await promiseResult1;
        document.getElementById("img_2").setAttribute("src", response2.responseURL);
        const response3 = await promiseResult1;
        document.getElementById("img_3").setAttribute("src", response3.responseURL);
    } catch(error) {
        console.log(error)
    }
  
};
excuteAsync();

// chaining
// promiseResult1
//   .then((data) => {
//     document.getElementById("img_1").setAttribute("src", data.responseURL);
//     return promiseResult2;
//   })
//   .then((data) => {
//     document.getElementById("img_2").setAttribute("src", data.responseURL);
//     return promiseResult3;
//   })
//   .then((data) => {
//     document.getElementById("img_3").setAttribute("src", data.responseURL);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
