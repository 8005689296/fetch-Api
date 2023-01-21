

fetch('http://localhost:4000/submit-student-data').then((apidata) => {
    console.log(apidata);
    return apidata.json();
}).then ((actualdata)=> {
 console.log('actualdata');
})
.catch((error) => {
    console.log(error);

})