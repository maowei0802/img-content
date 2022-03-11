export const ajax = () => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET","./public/content.json");
        xhr.send();
        xhr.onreadystatechange = function () {
            if ( xhr.status === 200 && xhr.readyState === 4) {
                resolve(JSON.parse(xhr.responseText))
            }
        }
    })
}

