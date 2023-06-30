// const express = require('express');
// const http = require('http');
// const path = require('path');
// const nodemailer = require('nodemailer');
//
// const app = express();
// const server = http.createServer(app);
// const port = 3000;
//
// app.set("port", port);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));
//
// // Routing
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "/index.html"));
// });
//
// app.get("/style.css", function(req, res) {
//     res.set("Content-Type", "text/css");
//     res.sendFile(path.join(__dirname, "/style.css"));
// });
//
// app.post("/send_email", function (req, res) {
//     const name = req.body.name;
//     const email = req.body.email;
//     const subject = req.body.subject;
//     const message = req.body.message;
//
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'shubhamshah2203@gmail.com',
//             pass: 'cwubpapwjpcaqrrv'
//         }
//     });
//
//     const mailOptions = {
//         from: name,
//         to: email,
//         subject: subject,
//         text: message
//     };
//
//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error);
//             res.status(500).json({ error: 'An error occurred while sending the email.' });
//         } else {
//             console.log("Email Sent: " + info.response);
//             // Send a success status code without any response body
//
//         }
//     });
// });
//
// // Initialize Web Server
// server.listen(port, function () {
//     console.log("Starting Server on port: " + port);
// });

const express = require('express');
const http = require('http');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const server = http.createServer(app);
const port = 3000;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use('/images', express.static(path.join(__dirname, "images")));

// Routing
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/style.css", function(req, res) {
    res.set("Content-Type", "text/css");
    res.sendFile(path.join(__dirname, "/style.css"));
});

app.post("/send_email", function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'contactform046@gmail.com',
            pass: 'gryhpqlufvzudpvz'
        }
    });

    const mailOptions = {
        from: name,
        to: 'inamke85@gmail.com',
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).json({ error: 'An error occurred while sending the email.' });
        } else {
            console.log("Email Sent: " + info.response);
            res.sendStatus(200); // Send a success status code without any response body
        }
    });
});

// Initialize Web Server
server.listen(port, function () {
    console.log("Starting Server on port: " + port);
});


