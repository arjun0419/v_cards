var axios = require('axios');
var fs = require('fs');

axios.get('http://api.apis.guru/v2/list.json')
  .then(function (response) {
    fs.appendFile('data.csv', 'name, preferred, preferredAddDate' + '\n', (err) => {
      if (err) throw err;
        console.log('Header was succesully added');
    });

    for (domain in response.data) {
      
      let infoArr = [];
      infoArr.push(domain);
      let preferred = response.data[domain].preferred;

      for (vers in response.data[domain].versions) {
        let version = vers;
        if (version === preferred) {
          infoArr.push(preferred);
          infoArr.push(response.data[domain].versions[vers].added);
        }
      }

      const arrContents = infoArr.join(",");

      fs.appendFile('data.csv', arrContents + '\n', (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });

    }
  })
  .catch(function (error) {
    console.log(error);
  });