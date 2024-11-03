const db = require("../config/db");

const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      number,
      emergencyNumber,
      email,
      add1,
      add2,
      add3,
      add4,
    } = req.body;

    if (!firstName || !lastName || !number) {
      return res.send({
        success: false,
        message: "fill all the required field",
      });
    }

    const sql =
      "INSERT INTO user (firstName, lastName, number, emergencyNumber, email, add1, add2, add3, add4 , createdAt ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())";
    const data = await db.query(sql, [
      firstName,
      lastName,
      number,
      emergencyNumber,
      email,
      add1,
      add2,
      add3,
      add4,
    ]);
    if (!data) {
      return res.status(404).send({
        success: false,
      });
    }
    res.status(200).send({
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM user");
    if (!data) {
      return res.status(404).send("Data not found");
    }
    res.status(200).send({
      success: true,
      data: data[0],
    });
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await db.query("SELECT * FROM user WHERE userId=?", [id]);

    if (!data) {
      return res.status(404).send("Data not found");
    }
    res.status(200).send({
      success: true,
      data: data[0],
    });
  } catch (err) {
    console.log(err);
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.send({
        success: false,
        message: "invalid id",
      });
    }

    const {
      firstName,
      lastName,
      number,
      emergencyNumber,
      email,
      add1,
      add2,
      add3,
      add4,
    } = req.body;

    const data = await db.query(
      "UPDATE user SET firstName = ? , lastName = ?, number = ? , emergencyNumber = ?, email = ?, add1 = ?, add2 = ?, add3 = ?, add4 = ? WHERE userId=?",
      [
        firstName,
        lastName,
        number,
        emergencyNumber,
        email,
        add1,
        add2,
        add3,
        add4,
        id
      ]
    );
    if (!data) {
      return res.send("Data not updated");
    }
    res.status(200).send({
      success: true,
      data: data[0],
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await db.query("DELETE FROM user WHERE userId=?", [id]);
    if (!data) {
      return res.status(404).send("Data not found");
    }
    res.status(200).send({
      success: true,
      message: "Record deleted!",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createUser, getUser, getUserById, deleteUserById, updateUserById };
