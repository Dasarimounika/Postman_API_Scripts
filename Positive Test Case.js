
//API call "​http://api.planefinder.net/api/airport/times/UME"


const jsonData = pm.response.json(); //saving the json response globally 


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
}) 