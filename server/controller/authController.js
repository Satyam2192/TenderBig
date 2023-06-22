const userModel = require("../models/userModel");
const { toTitleCase, validateEmail, generateUUID } = require("../config/functions");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
require('dotenv').config();

class Auth {

  /* User Registration/Signup controller  */
  async postSignup(req, res) {
    let { name, email, password, phoneNumber, country, state, city } = req.body;
    let error = {};
    if (
      !name ||
      !email ||
      !password ||
      !phoneNumber ||
      !country
    ) {
      error = {
        ...error,
        name: "Filed must not be empty",
        email: "Filed must not be empty",
        password: "Filed must not be empty",
        phoneNumber: "Filed must not be empty",
        country: "Filed must not be empty",
      };
      return res.json({ error });
    }
    if (name.length < 3 || name.length > 25) {
      error = { ...error, name: "Name must be 3-25 charecter" };
      return res.json({ error });
    } else {
      if (validateEmail(email)) {
        name = toTitleCase(name);
        if ((password.length > 255) | (password.length < 8)) {
          error = {
            ...error,
            password: "Password must be 8 charecter",
            name: "",
            email: "",
          };
          return res.json({ error });
        } else {
          // If Email & Number exists in Database then:
          try {
            password = bcrypt.hashSync(password, 10);
            let data = await userModel.findOne({ email: email });
            if (data) {
              error = {
                ...error,
                password: "",
                name: "",
                email: "Email already exists",
              };
              return res.json({ error });
            }
            data = await userModel.findOne({ phoneNumber: phoneNumber });
            if (data) {
              error = {
                ...error,
                password: "",
                name: "",
                emsil: "",
                phoneNumber: "Number already exists",
              };
              return res.json({ error });
            } else {
              const userId = generateUUID();

              let newUser = new userModel({
                userId,
                name,
                email,
                password,
                phoneNumber,
                country,
                state,
                city
              });
              newUser
                .save()
                .then((data) => {
                  return res.json({
                    success: "Account create successfully. Please login",
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          } catch (err) {
            console.log(err);
          }
        }
      } else {
        error = {
          ...error,
          password: "",
          name: "",
          email: "Email is not valid",
        };
        return res.json({ error });
      }
    }
  }

  /* User Login/Signin controller  */
  async postSignin(req, res) {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        error: "Fields must not be empty",
      });
    }
    try {
      const MAIL = process.env.DEFAULT_MAIL;
      const PASS = process.env.DEFAULT_PASS;
      if (MAIL == email && PASS == password) {
        const token = jwt.sign(
          { data: { userId: "admin", userRole: "admin", name: "maria_dev" } },
          JWT_SECRET
        );
        const encode = jwt.verify(token, JWT_SECRET);
        return res.json({
          token: token,
          user: encode,
        });
      }
      else {
        const data = await userModel.findOne({ email: email });
        if (!data) {
          return res.json({
            error: "Invalid email",
          });
        } else {
          const login = await bcrypt.compare(password, data.password);
          if (login) {
            const token = jwt.sign(
              { data },
              JWT_SECRET
            );
            const encode = jwt.verify(token, JWT_SECRET);
            return res.json({
              token: token,
              user: encode,
            });
          } else {
            return res.json({
              error: "Invalid password",
            });
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  async postLogout(req, res) {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  }
}

const authController = new Auth();
module.exports = authController;
