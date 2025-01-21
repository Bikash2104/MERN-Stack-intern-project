const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const multer = require("multer");
const path = require("path");
const { MongoClient, ObjectId } = require("mongodb");
const conString = "mongodb://127.0.0.1:27017";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage: storage });

app.post("/empdetails", upload.fields([{ name: "image" }]), (req, res) => {
    const employee = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        designation: req.body.designation,
        gender: req.body.gender,
        courses: Array.isArray(req.body.courses) ? req.body.courses : JSON.parse(req.body.courses || "[]"),
        image: req.files?.image ? `/uploads/${req.files.image[0].filename}` : "",
    };

    MongoClient.connect(conString).then((clientObj) => {
        const database = clientObj.db("Employees-Details");
        const employeesCollection = database.collection("Employee");

        // Check for duplicate email or mobile number
        employeesCollection
            .findOne({
                $or: [{ email: employee.email }, { mobile: employee.mobile }],
            })
            .then((existingEmployee) => {
                if (existingEmployee) {
                    res.status(400).json({
                        error: "Duplicate entry: Email or mobile number already exists",
                    });
                    clientObj.close();
                } else {
                    // If no duplicate found, insert the employee
                    employeesCollection
                        .insertOne(employee)
                        .then(() => {
                            console.log("Employee inserted:", employee);
                            res.status(200).json(employee);
                        })
                        .catch((err) => {
                            console.error("Error inserting employee:", err);
                            res.status(500).json({ error: "Failed to insert employee" });
                        })
                        .finally(() => clientObj.close());
                }
            })
            .catch((err) => {
                console.error("Error checking for duplicates:", err);
                res.status(500).json({ error: "Failed to check for duplicates" });
                clientObj.close();
            });
    });
});


//api for employee
app.get("/allemp", (req, res) => {
    MongoClient.connect(conString).then((clientObj) => {
      const database = clientObj.db("Employees-Details");
      database
        .collection("Employee")
        .find()
        .toArray()
        .then((employees) => {
          res.status(200).json(employees);
        })
        .catch((error) => {
          console.error("Error fetching employess:", error);
          res.status(500).json({ error: "Error fetching employees" });
        })
        .finally(() => clientObj.close());
    });
  });



  app.delete("/employee/:id", (req, res) => {
    const { id } = req.params;
    MongoClient.connect(conString).then((clientObj) => {
        const database = clientObj.db("Employees-Details");
        database
            .collection("Employee")
            .deleteOne({ _id: new ObjectId(id) }) // Use ObjectId here
            .then(() => {
                console.log(`Employee with id ${id} deleted.`);
                res.status(200).json({ message: "Employee deleted successfully" });
            })
            .catch((error) => {
                console.error("Error deleting employee:", error);
                res.status(500).json({ error: "Failed to delete employee" });
            })
            .finally(() => clientObj.close());
    });
});


app.put("/employee/:id", upload.fields([{ name: "image" }]), (req, res) => {
    const { id } = req.params;
    const updatedEmployee = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        designation: req.body.designation,
        gender: req.body.gender,
        courses: JSON.parse(req.body.courses),
        image: req.files?.image ? `/uploads/${req.files.image[0].filename}` : req.body.image,
    };

    MongoClient.connect(conString).then((clientObj) => {
        const database = clientObj.db("Employees-Details");
        database
            .collection("Employee")
            .updateOne({ _id: new ObjectId(id) }, { $set: updatedEmployee })
            .then(() => {
                console.log(`Employee with id ${id} updated.`);
                res.status(200).json(updatedEmployee);
            })
            .catch((error) => {
                console.error("Error updating employee:", error);
                res.status(500).json({ error: "Failed to update employee" });
            })
            .finally(() => clientObj.close());
    });
});

app.post("/register-users", (req, res) => {
    const user = {
        UserName: req.body.UserName,
        Email: req.body.Email,
        Password: req.body.Password
    };

    MongoClient.connect(conString).then(clientObj => {
        const database = clientObj.db("Employee-Data");
        const usersCollection = database.collection("Register-users");

        // Check for duplicate email
        usersCollection.findOne({ Email: user.Email })
            .then(existingUser => {
                if (existingUser) {
                    res.status(400).json({ message: "Email already registered" });
                    clientObj.close();
                } else {
                    // No duplicate found, proceed to register
                    usersCollection.insertOne(user)
                        .then(() => {
                            console.log("User Registered...");
                            res.status(201).json({ message: "User registered successfully" });
                        })
                        .catch(err => {
                            console.error("Error inserting user:", err);
                            res.status(500).json({ message: "Error registering user" });
                        })
                        .finally(() => clientObj.close());
                }
            })
            .catch(err => {
                console.error("Error checking for duplicate email:", err);
                res.status(500).json({ message: "Error checking for duplicate email" });
                clientObj.close();
            });
    });
});


app.get("/users", (req, res) => {
    MongoClient.connect(conString).then((clientObj) => {
        var database = clientObj.db("Employee-Data");

        database.collection("Register-users")
            .find({})
            .toArray()
            .then((users) => {
                res.status(200).json(users);
            })
            .catch((err) => {
                console.error("Error fetching users:", err);
                res.status(500).json({ message: "Error fetching users" });
            });
    });
});




app.listen(7000, () => {
    console.log(`server start on http://127.0.0.1:7000`)
})



