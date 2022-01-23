window.addEventListener('DOMContentLoaded', (Event) =>{
    getVisitCount();
})

const funtionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(funtionApi).then(response => {
        return response.json()
    }).then(respone => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function (error) {
        console.log(error);
    });
        return count;
}