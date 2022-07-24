const app =require("express")();
const PORT=process.env.PORT ||3000;
app.get("", (req, res)=> {res.send('<h5 class="text-primary">ADELE </h5> <h6>someone like you</h6>');});
app.listen(PORT,()=>{console.log('App up and port ${PORT}');});