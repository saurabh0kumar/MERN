const express = require(`express`);
const bodyParser=require(`body-parser`);

const app=express();

app.use(bodyParser.json());
app.use('api/auth',require(`./routes/auth`));
app.use(`api/employee`,require(`./routes/employee`));

const port=3000;
app.listen(port,() =>
{
    console.log(`server  started  with the port ${port}`);

});
