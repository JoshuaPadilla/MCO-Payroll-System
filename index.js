import express from "express"

const app = express();
const port = 3000;

const empList = [];
const payHistory = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {

    res.render("index.ejs", {paylist: payHistory});
});

app.get("/add", (req, res) => {
    
    res.render("add.ejs");
});
app.get("/new-payroll", (req, res) => {
    res.render("newPayroll.ejs")
});

app.post("/new-payroll", (req, res) => {

    const newPayoll = req.body;

    const baseSal = newPayoll.baseSalary;
    const hoursWorked = newPayoll.hoursWorked;

    newPayoll.gross = calcGross(baseSal, hoursWorked);
    newPayoll.tax = calcTax(newPayoll.gross)
    newPayoll.net = calcNetPay(newPayoll.gross,newPayoll.tax)
    payHistory.push(newPayoll);
    console.log(newPayoll);
    res.redirect("/");

});

app.post("/add", (req, res) => {
    const newEmp = req.body;
    newEmp.ID = idGen(empList);
    empList.push(newEmp);

    console.log(newEmp);

    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



function calcNetPay(gross, tax) {
    return Math.trunc(gross - tax);
}

function calcGross(baseSal, hoursWorked) {
    return baseSal * hoursWorked;
}
function calcTax(gross) {
    return Math.trunc(gross * 0.20);
}

function toInt(num) {
    return parseInt(num);
}

function idGen(list) {
    const len = list.length;
    const idLen = String(len).length;
    let id;
    switch(idLen){
        case 1:
            id =  `000${idLen}`;
            break;
        case 2:
            id =  `00${idLen}`;
            break;
        case 3:
            id =  `0${idLen}`;
            break;
        default:
            break;
    }

    return id;
}