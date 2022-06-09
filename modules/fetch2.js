export default function fetch2(url) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject("Timed out");
    }, 2000);
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    request.addEventListener("load", function () {
      const data = JSON.parse(this.responseText);
      resolve(data);
    });
  });
}
