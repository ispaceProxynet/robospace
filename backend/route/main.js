import express from 'express';
const router = express.Router();
import nodemailer from 'nodemailer'
import Main from '../model/main.js'









/**
 * GET /
 * Main - Main Page
*/
router.get('/', async (req, res) => {
  try {

    res.render('main/index');
  } catch (error) {
    console.log(error);
  }
});


/**
 * GET /
 * Main - Main Page
*/
router.get('/about', async (req, res) => {
    try {
  
      res.render('main/about');
    } catch (error) {
      console.log(error);
    }
  });


  /**
 * GET /
 * Main - Main Page
*/
router.get('/contact', async (req, res) => {
    try {
  
      res.render('main/contact');
    } catch (error) {
      console.log(error);
    }
  });


  /**
 * GET /
 * Main - Main Page
*/
router.get('/portfolio', async (req, res) => {
    try {
  
      res.render('main/portfolio');
    } catch (error) {
      console.log(error);
    }
  });


  /**
 * GET /
 * Main - Main Page
*/
router.get('/curriculum', async (req, res) => {
    try {
  
      res.render('main/index');
    } catch (error) {
      console.log(error);
    }
  });


    /**
 * GET /
 * Main - Main Page
*/
router.get('/team', async (req, res) => {
    try {
  
      res.render('main/team');
    } catch (error) {
      console.log(error);
    }
  });


  /**
 * POST /
 * Newsletter - Post Newletter
*/
router.post('/newsletter', async (req, res) => {
    const { email } = req.body;
  
    try {
  
      const newsletter = new Main({
        email
      });
       await newsletter.save();
      res.redirect('/');
     
  
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred while processing the file" });
    }
  });



  router.post('/contact', (req, res) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'deenello83@gmail.com',
        pass: 'ilryxmqadcqckupx'
      }
    });

    const { name, email, subject, city, state, message } = req.body;
  
    const mailOptions = {
      from: email,
      to: 'deenello83@gmail.com',
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nCity: ${city}\nState: ${state}\nMessage: ${message}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending message');
      } else {
        // console.log(`Message sent: ${info.response}`);
        res.redirect('/');
      }
    });
  });
  
  export default router