const registerUser = (req, res) => {
  try {
    const { name, email, password, dob } = req.body;
    const newUser = {
      name,
      email,
      password,
      dob,
    };
    return res.status(200).json({
      message: "user is created",
      data: newUser,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Creation is failed", error: error.message });
  }
};

const loggedIn = (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === "arafat@gmail.com" && password === "12345") {
      return res.status(200).json({
        message: "user is logged in",
      });
    } else {
      res.status(400).json({ message: "email & pass is wrong" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Creation is failed", error: error.message });
  }
};

module.exports = { registerUser, loggedIn };
