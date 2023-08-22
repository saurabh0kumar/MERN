const fs = require('fs');

fs.readFile('abc.txt','utf-8',(err,data)->
{
    if(err)
    {
     console.log('something went wrong  ${err} ');
    return ;
    }
    console.log(data);

}
);