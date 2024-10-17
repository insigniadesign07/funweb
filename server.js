import express from 'express';

const app = express();

app.get('/api/jokes' , (req , res)=>{
    const jokes = [
        {
            id: 1,
            name: "Ahmad",
            des: "THis is One"
        },
        {
            id: 2,
            name: "Ahmad Raza",
            des: "THis is Two"
        },
        {
            id: 3,
            name: "Ahmad Raza Hassan",
            des: "THis is Three"
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000 ;

app.listen(port , ()=>{
    console.log(`server at http://localhost:${port}`);
}
);