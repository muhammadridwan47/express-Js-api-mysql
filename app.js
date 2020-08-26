const express = require("express");
const app = express();
const db = require("./config/db");



db.authenticate().then(() => console.log("berhasil konek ke db"));
const Coba = require('./models/Coba');

app.listen(5000, () => console.log("port berjalan di 5000") );
 app.use(express.urlencoded({extended:true}));

// app.get("/",(req,res) => res.send("respons node js berhasil"));


app.get("/", async (req,res) => {
    try {
        const getAllUser = await Coba.findAll();
        res.json(getAllUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server GET error");
    }
});

app.get('/detail/:id', async (req,res) => {
    try {
        const id = req.params.id;
        const getUser = await Coba.findOne({
            where: {id:id}
        });
        res.json(getUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Detail error");
    }
});


app.delete('/delete/:id',async (req,res) => {
    try {

        const id = req.params.id;

        const deleteUser = await Coba.destroy({
                where: {id:id}
        });

        await deleteUser;
        res.json('data have been deleted');
    
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Delete error");
    }
});

app.put('/update/:id', async (req,res) => {
    try {
        
        const {nama,alamat} = req.body;
        const id = req.params.id;

        const updateUser = await Coba.update({
            nama,
            alamat
        },{where: {id:id}});

        await updateUser;
        res.json('data have been updated');

    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Update error");      
    }
});

app.post("/post",async (req,res) => {
    try {

        const {nama,alamat} = req.body;

        const CobaTes = new Coba({
            
            nama,
            alamat
        
        });

        await CobaTes.save();

        res.json(CobaTes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server POST error");

    }
});

