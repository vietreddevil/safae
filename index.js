const fs = require('fs');
var whole_content = JSON.parse(fs.readFileSync('testjsonfile.json', 'utf8'));

whole_content.forEach(element => {
    let index_name = 'myindex';
    let type_name = 'typename';
    //or you can specify the _id too if you want
    var doc_configure = '{"_index":"' + index_name + '","_type":"' + type_name + '"}\n';
    var doc_content = JSON.stringify(element).trim() + '\n';
    var doc = doc_configure + doc_content;

    fs.appendFile('test.json', doc, ()=> {});
});